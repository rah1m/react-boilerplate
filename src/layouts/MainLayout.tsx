import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <ul className="list-none flex">
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">
          <Link to="posts">Posts</Link>
        </li>
      </ul>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
