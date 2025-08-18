import { lazy, memo, Suspense } from "react"
import { createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout/layout"
import SignUp from "./layout/SignUp"
import Theme from "./theme"
import { ThemeProvider } from "./theme/theme-provider"






import Login from "./components/login"
import About from "./components/about"
const ContactLazy = lazy(() => import("./components/contact"))
const Contact = memo(ContactLazy)

const HomeLazy = lazy(() => import("@/components/home"));
const Home = memo(HomeLazy);

const ProductsLazy = lazy(() => import("@/components/products"))
const Products = memo(ProductsLazy)

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<SignUp />} />
        <Route path="home" element={
          <Suspense fallback={"Loading..."}>
            <Home />
          </Suspense>
        } />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={
          <Suspense fallback={"Loading..."} >
            <Contact />
          </Suspense>
        } />
        <Route path="products" element={
          <Suspense fallback={"Loading..."} >
            <Products />
          </Suspense>
        }
        />
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
