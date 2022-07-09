import AnimatedWrapper from "@components/AnimatedWrapper/AnimatedWrapper";
import CustomButton from "@components/Button";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <AnimatedWrapper>
      <h1 className="text-3xl font-bold underline">{t("title")}</h1>
      <CustomButton>Tets</CustomButton>
    </AnimatedWrapper>
  );
};

export default Home;
