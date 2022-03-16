import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import pretty from "pretty";
import Layout from "../../../resources/components/Layout";
import { Route, Routes } from "react-router-dom";
import pageRoutes from "../../../routes";

const scripts = [
  "/assets/js/index.bundle.js",
  "/assets/js/runtime.bundle.js",
  "/assets/js/react.bundle.js",
  "/assets/js/react-dom.bundle.js",
  "/assets/js/react-router-dom.bundle.js",
];

const renderToString = (url: string, title: string = "Document") => {
  return pretty(
    `<!DOCTYPE html>${ReactDOMServer.renderToString(
      <>
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>{title}</title>
            {scripts.map((item, index) => (
              <script key={`script-${index + 1}`} defer src={item}></script>
            ))}
          </head>
          <body>
            <div id="root">
              <StaticRouter location={url}>
                <Layout
                  routes={
                    <Routes>
                      {pageRoutes
                        .filter((item) => item.component != undefined)
                        .map((item, index) => (
                          <Route
                            path={item.path}
                            element={item.component}
                            key={`routes-${index + 1}`}
                          />
                        ))}
                    </Routes>
                  }
                />
              </StaticRouter>
            </div>
          </body>
        </html>
      </>
    )}`
  );
};

export default renderToString;
