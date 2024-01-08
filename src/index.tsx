import {createRoot} from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyAbout } from "@/components/about/About.lazy";
import { Suspense } from "react";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading..'} ><LazyAbout/></Suspense>
            }
        ]
    }
])

container.render(
    <RouterProvider router = {router} />
)