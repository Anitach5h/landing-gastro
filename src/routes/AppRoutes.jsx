import React from "react";
import { Catalogo } from "../pages/Catalog";
import { useRoutes } from 'react-router-dom';
import { Home } from "../pages/Home";
import { Contacto } from "../pages/Contact";

export const AppRoutes = () => {
	const routes = [
				{
					path: '/carta',
					element: <Catalogo />,
				},
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/contacto',
					element: <Contacto />,
				},
            ]
        return useRoutes(routes) 
        }
 