import Loader from "@components/Loader";
import { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "src/layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Posts = lazy(() => import("../pages/Posts"));

const BaseRoutes: FC = () => (
  <Suspense fallback={<Loader />}>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="posts" element={<Posts />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  </Suspense>
);

export default BaseRoutes;
