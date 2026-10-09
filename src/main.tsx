import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Apologetics from "@pages/Apologetics.tsx";
import Theology from "@pages/Theology.tsx";
import BibleCommentary from "@pages/BibleCommentary.tsx";
import Glossary from "@pages/Glossary.tsx";
import Topic from "@pages/Topic.tsx";
import NotFound from "@pages/404Page.tsx";
import AboutPage from "@pages/About.tsx";
import AddResource from "@pages/AddResource.tsx";
import SolomonThemeProvider from "@pages/SolomonThemeProvider.tsx";
import ResourcePage from "@pages/ResourcePage.tsx";
import BibleBook from "@pages/BibleBook.tsx";
import LoadingPage from "@pages/LoadingPage.tsx";
import ErrorPage from "@pages/ErrorPage.tsx";
import { SWRConfig } from "swr";

const RootPage = () => (
  <Suspense fallback={<LoadingPage />}>
    <Outlet />
  </Suspense>
);

const router = createBrowserRouter([
  {
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/apologetics",
        element: <Apologetics />,
      },
      {
        path: "/theology",
        element: <Theology />,
      },
      {
        path: "/commentary",
        element: <BibleCommentary />,
      },
      {
        path: "/glossary",
        element: <Glossary />,
      },
      {
        path: "/topic",
        loader: async () => {
          return redirect("/");
        },
      },
      {
        path: "/topics",
        loader: async () => {
          return redirect("/");
        },
      },
      {
        path: "/topic/:topicName",
        element: <Topic />,
      },
      {
        path: "/bible/:topicName",
        element: <Topic />,
      },
      {
        path: "/resource/:resourceId",
        element: <ResourcePage />,
      },
      {
        path: "/bible/book/:bookId",
        element: <BibleBook />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/add-resource",
        element: <AddResource />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SolomonThemeProvider>
      <SWRConfig value={{ suspense: true }}>
        <RouterProvider router={router} />
      </SWRConfig>
    </SolomonThemeProvider>
  </StrictMode>,
);
