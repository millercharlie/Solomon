import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
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

const router = createBrowserRouter([
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
    element: <App />,
    loader: async () => {
      return redirect("/");
    },
  },
  {
    path: "/topics",
    element: <App />,
    loader: async () => {
      return redirect("/");
    },
  },
  {
    path: "/topic/:topicName",
    element: <Topic />,
  },
  {
    path: "/resource/:resourceId",
    element: <ResourcePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  { path: "/add-resource", element: <AddResource /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SolomonThemeProvider>
      <RouterProvider router={router} />
    </SolomonThemeProvider>
  </StrictMode>,
);
