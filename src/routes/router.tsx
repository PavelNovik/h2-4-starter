import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import React from "react";
import {Error404} from "../components/pages/Error404";
import {Page} from "../components/pages/Page";
import {dataState} from "../data/dataState";
import {Site} from "../components/Site";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        // element: <Site/>,
        // errorElement: <Error404/>,
        errorElement: <Navigate to={'/page/error'}/>,
        children: [
            {
                path: "/page/:id",
                element: (
                    <Page pages={dataState.pages}/>
                ),
            },
            {
                path: "/page/protected",
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                ),
            },
            {
                path: "/page/error",
                element: (
                    <Error404/>
                ),
            },
        ],
    },
]);