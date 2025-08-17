import { createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout/layout"
import SignUp from "./layout/SignUp"
import Theme from "./theme"
import { ThemeProvider } from "./theme/theme-provider"
import Home from "./components/home"
import Login from "./components/login"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  )

  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <Theme> <RouterProvider router={router} /></Theme>
      </ThemeProvider>

    </div>
  )
}

export default App
