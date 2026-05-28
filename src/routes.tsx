import React from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { Contacto } from "./pages/Contacto";
import { Nosotros } from "./pages/Nosotros";
import { Clientes } from "./pages/Clientes";
import { Equipo } from "./pages/Equipo";
import { Maximas } from "./pages/Maximas";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "nosotros", Component: Nosotros },
      { path: "servicios", Component: Servicios },
      { path: "clientes", Component: Clientes },
      { path: "equipo", Component: Equipo },
      { path: "maximas", Component: Maximas },
      { path: "blog", element: <Navigate to="/maximas" replace /> },
      { path: "contacto", Component: Contacto },
      { path: "*", Component: NotFound },
    ],
  },
]);
