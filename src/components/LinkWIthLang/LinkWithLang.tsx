import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, LinkProps } from "react-router-dom";

const LinkWithLang: FC<LinkProps> = ({ children, to, ...rest }) => {
  const { i18n } = useTranslation();
  const path = i18n.language;

  return (
    <Link to={`${path}/${to === "/" ? "" : to}`} {...rest}>
      {children}
    </Link>
  );
};

export default LinkWithLang;
