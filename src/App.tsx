import { createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout/layout"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >

      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
