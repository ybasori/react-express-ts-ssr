import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import Layout from "./components/Layout";

export default () => {
  return (
    <Layout
      routes={
        <Suspense fallback={<>loading</>}>
          <Routes>
            {routes
              .filter((item) => item.Element != undefined)
              .map(({ Element, ...item }, index) => (
                <Route
                  key={`route-${index + 1}`}
                  path={item.path}
                  element={<>{Element && <Element />}</>}
                />
              ))}
          </Routes>
        </Suspense>
      }
    />
  );
};
