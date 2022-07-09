import LanguageSwitcher from "@components/LanguageSwitcher/LanguageSwitcher";
import LinkWithLang from "@components/LinkWIthLang/LinkWithLang";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <ul className="list-none flex">
        <li className="p-2">
          <LinkWithLang to="/">Home</LinkWithLang>
        </li>
        <li className="p-2">
          <LinkWithLang to="posts">Posts</LinkWithLang>
        </li>
      </ul>
      <LanguageSwitcher />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
