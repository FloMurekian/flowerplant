import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./Layout";
import Default from "./views/Default"
import MyPlants from "./views/MyPlants"
import About from "./views/About"
import Update from "./views/Update"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        index: true,
        element: <Default />
      },

      {
        path: "/my-plants",
        element: <MyPlants />
      },

      {
        path: "/update/:id",
        element: <Update />,
      },

      {
        path: "/about",
        element: <About />,
      }
    ],
  },
],

{
  basename: "/flowerplant"
}
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
