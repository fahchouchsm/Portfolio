import { expect, test } from "@playwright/test";

test("name branding remains visible and unavailable GitHub chart has a fallback", async ({
  page,
}) => {
  await page.route("https://ghchart.rshah.org/**", (route) => route.abort());
  await page.goto("/");
  const brand = page.getByRole("link", { name: "Mohammed Fahchouch, accueil" });
  await expect(brand).toContainText("Mohammed");
  await expect(brand).toContainText("Fahchouch");
  await expect(brand).toBeVisible();
  await page.locator(".github-section").scrollIntoViewIfNeeded();
  await expect(page.locator(".chart-fallback")).toBeVisible();
  await expect(page.locator(".chart-fallback a")).toHaveAttribute(
    "href",
    "https://github.com/fahchouchsm",
  );
});

test("recruiter can explore projects, filter, and inspect a case study", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Mohammed",
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.locator(".project-card")).toHaveCount(5);
  await page.getByRole("button", { name: "Backend", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(2);
  await page
    .getByRole("button", {
      name: "Découvrir le projet AuthGateway",
      exact: true,
    })
    .click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "Le regard architecture" }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "Explorer le code" }),
  ).toHaveAttribute(
    "href",
    "https://github.com/fahchouchsm/authGetway-PFA-4year",
  );
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(
    page.getByRole("button", {
      name: "Découvrir le projet AuthGateway",
      exact: true,
    }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Desktop", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(2);
  await page
    .getByRole("button", {
      name: "Découvrir le projet MySQL Compass",
      exact: true,
    })
    .click();
  await expect(dialog).toContainText("code source non publié");
  await expect(dialog.getByRole("link")).toHaveCount(0);
  await page.getByRole("button", { name: "Fermer le projet" }).click();
  await page.getByRole("button", { name: "Tous" }).click();
  await expect(page.locator(".project-card")).toHaveCount(5);
  expect(errors).toEqual([]);
});

test("SOLID explanations and contact actions are usable", async ({ page }) => {
  await page.goto("/");
  const principle = page
    .locator("details")
    .filter({ hasText: "Dependency Inversion" });
  await principle.locator("summary").click();
  await expect(principle).toHaveAttribute("open", "");
  await expect(principle.locator("p")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "fahchouchmd@gmail.com", exact: true }),
  ).toHaveAttribute("href", "mailto:fahchouchmd@gmail.com");
  await expect(
    page.getByRole("link", { name: "+212 600 242 374" }),
  ).toHaveAttribute("href", "tel:+212600242374");
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByRole("button", { name: "Copier l’adresse email" }).click();
  await expect(page.getByText("Copié !", { exact: true })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "fahchouchmd@gmail.com",
  );
});

test("responsive navigation and layout do not overflow", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Ouvrir le menu" }).click();
    await expect(page.getByRole("navigation")).toBeVisible();
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "Parcours" })
      .click();
    await expect(page.getByRole("navigation")).not.toBeVisible();
    await expect(page).toHaveURL(/#parcours$/);
  }
  for (const width of testInfo.project.name === "mobile"
    ? [320, 375, 390]
    : [768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflows = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflows, `No horizontal overflow at ${width}px`).toBe(false);
  }
});

test("user can switch language between French and English", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.getByRole("heading", { name: "Projets d’ingénierie" })).toBeVisible();

  // Switch to English
  await page.getByRole("button", { name: "English" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { name: "Engineering Projects" })).toBeVisible();

  // Switch back to French
  await page.getByRole("button", { name: "Français" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.getByRole("heading", { name: "Projets d’ingénierie" })).toBeVisible();
});

test("clicking anywhere on project card opens modal with diagrams and metrics", async ({
  page,
}) => {
  await page.goto("/");

  const expectedProjects = [
    { name: "BetterGit", diagramLabel: "BetterGit", metric: "Grade A" },
    { name: "AuthGateway", diagramLabel: "AuthGateway", metric: "RS256" },
    { name: "FixMyCity", diagramLabel: "FixMyCity", metric: "4 Couches" },
    { name: "Skillz Hire", diagramLabel: "Skillz Hire", metric: "Full-Duplex" },
    { name: "MySQL Compass", diagramLabel: "MySQL Compass", metric: "50 000+" },
  ];

  const dialog = page.getByRole("dialog");

  for (let i = 0; i < expectedProjects.length; i++) {
    const item = expectedProjects[i];
    const card = page.locator(".project-card").nth(i);

    // Clicking anywhere on card surface opens modal
    await card.click({ position: { x: 30, y: 30 } });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("heading", { name: item.name })).toBeVisible();

    // Verify diagram is visible
    await expect(
      dialog.locator(`.project-diagram[aria-label*='${item.diagramLabel}']`),
    ).toBeVisible();

    // Verify engineering metrics are visible
    await expect(dialog.locator(".modal-metrics-grid")).toBeVisible();
    await expect(dialog.getByText(item.metric, { exact: true })).toBeVisible();

    // Close dialog
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
  }

  // Verify that clicking "Code source" external link does NOT open modal
  const codeSourceLink = page.locator(".project-code-link").first();
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    codeSourceLink.click(),
  ]);
  expect(popup.url()).toContain("github.com");
  await popup.close();
  await expect(dialog).not.toBeVisible();
});
