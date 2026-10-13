import { expect, test } from "@playwright/test";

test("recruiter can explore projects, filter, and inspect a case study", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Du code clair.",
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.locator(".project-card")).toHaveCount(6);
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
  await expect(page.locator(".project-card")).toHaveCount(6);
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
    page.getByRole("link", { name: "fahchouchsm@gmail.com", exact: true }),
  ).toHaveAttribute("href", "mailto:fahchouchsm@gmail.com");
  await expect(
    page.getByRole("link", { name: "+212 600 242 374" }),
  ).toHaveAttribute("href", "tel:+212600242374");
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByRole("button", { name: "Copier l’adresse email" }).click();
  await expect(page.getByText("Copié !", { exact: true })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "fahchouchsm@gmail.com",
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
