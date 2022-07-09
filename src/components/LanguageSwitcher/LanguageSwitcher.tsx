import { useTranslation } from "react-i18next";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "English" },
    ru: { nativeName: "Russian" },
    az: { nativeName: "Azerbaijan" },
  };

  console.log(i18n.language);

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {(lngs as any)[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
