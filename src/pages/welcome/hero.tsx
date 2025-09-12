// import type { FC } from "react";
// import { TypeAnimation } from "react-type-animation";
// import { useTranslation } from "react-i18next";

// export const Hero: FC = () => {
//   const { t } = useTranslation();

//   const typingStrings = t("hero.typing", { returnObjects: true }) as string[];
//   const typingSequence: (string | number)[] = typingStrings.flatMap((s) => [
//     s,
//     2000,
//   ]);

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between  px-10">
//       <div className="text-center md:text-left max-w-xl">
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">
//           {t("hero.greeting")}{" "}
//           <span className="text-primary">{t("hero.name")}</span>
//         </h1>

//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">
//           {t("hero.subtitlePrefix")}{" "}
//           <TypeAnimation
//             sequence={typingSequence}
//             wrapper="span"
//             speed={50}
//             repeat={Infinity}
//           />
//         </h2>

//         <p className="mb-6 text-lg opacity-80">{t("hero.description")}</p>

//         <button className="btn btn-primary">{t("hero.cta")}</button>
//       </div>

//       <div className="mt-10 md:mt-0">
//         <img
//           src="/react.svg"
//           alt={t("hero.name")}
//           className="w-64 h-64  object-cover shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };
