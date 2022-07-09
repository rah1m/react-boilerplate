import Loader from "@components/Loader";
import { FC, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainLayout from "src/layouts/MainLayout";

import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../pages/Home"));
const Posts = lazy(() => import("../pages/Posts"));

const BaseRoutes: FC = () => {
  const { i18n } = useTranslation();
  console.log(i18n.language);

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path={i18n.language}>
                <Route path="posts" element={<Posts />} />
                <Route index element={<Home />} />
              </Route>
              <Route path="/" element={<Navigate to="/az" replace />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </Suspense>
  );
};

export default BaseRoutes;
