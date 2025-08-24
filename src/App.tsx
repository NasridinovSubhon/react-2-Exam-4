import { lazy, memo, Suspense } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/layout"
import { ThemeProvider } from "./theme/theme-provider"






import About from "./components/about"

import Login from "./components/login"
import Corzina from "./components/corzina"
import MyAcount from "./components/myAcount"
import Info from "./components/info"
import ErorrPage from "./components/ErorrPage"
const ContactLazy = lazy(() => import("./components/contact"))

const HomeLazy = lazy(() => import("@/components/home"));

const ProductsLazy = lazy(() => import("@/components/products"))

const Wishlist = lazy(() => import("@/components/wishlist"))
const SignUp = lazy(() => import("@/components/signUp"))


const Contact = memo(ContactLazy)
const Home = memo(HomeLazy);
const Products = memo(ProductsLazy)


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Suspense fallback={"Loading..."}>  <Home /></Suspense>} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Suspense fallback={"Loading..."} >    <Contact />  </Suspense>} />
        <Route path="signUp" element={<Suspense fallback={"Loading..."} >     <SignUp /> </Suspense>} />
        <Route path="products" element={<Suspense fallback={"Loading..."} >   <Products />  </Suspense>} />
        <Route path="wishlist" element={<Suspense fallback={"Loading..."}  >  <Wishlist />  </Suspense>} />
        <Route path="byId" element={<Corzina />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="acount" element={<MyAcount />} />
        <Route path="*" element={<ErorrPage />} />

      </Route>
    )
  )

  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>

    </div>
  )
}

export default App
