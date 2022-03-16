import React, { ComponentType, lazy, LazyExoticComponent } from "react";

import Home from "./resources/pages/Home";
import About from "./resources/pages/About";
import HomeController from "./app/controllers/HomeController";
import { NextFunction, Request, Response } from "express";

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

const routes: {
  path: string;
  method: "get";
  Element?: LazyExoticComponent<ComponentType<any>>;
  component?: React.ReactChild;
  controller?: (req: Request, res: Response) => void;
  middleware: Middleware[];
}[] = [
  {
    path: "/about",
    method: "get",
    Element: lazy(() => import("./resources/pages/About")),
    component: <About />,
    controller: HomeController.about,
    middleware: [],
  },
  {
    path: "/",
    method: "get",
    Element: lazy(() => import("./resources/pages/Home")),
    component: <Home />,
    controller: HomeController.index,
    middleware: [],
  },
];

export default routes;
