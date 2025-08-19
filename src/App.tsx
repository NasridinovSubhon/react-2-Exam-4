import { lazy, memo, Suspense, useState } from "react"
import { createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout/layout"
import { ThemeProvider } from "./theme/theme-provider"






import Login from "./components/login"
import About from "./components/about"
import GetById from "./components/GetById"
const ContactLazy = lazy(() => import("./components/contact"))

const HomeLazy = lazy(() => import("@/components/home"));

const ProductsLazy = lazy(() => import("@/components/products"))

const Wishlist = lazy(() => import("@/components/wishlist"))
const SignUp = lazy(() => import("@/components/signUp"))


const Contact = memo(ContactLazy)
const Home = memo(HomeLazy);
const Products = memo(ProductsLazy)


const App = () => {

  const [wish, setWish] = useState(() => {
    try {
      const stored = localStorage.getItem("wish");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Invalid wish data in localStorage:", e);
      return [];
    }
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout wish={wish} />} >
        <Route index element={<Suspense fallback={"Loading..."}>  <Home setWish={setWish} wish={wish} /></Suspense>} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Suspense fallback={"Loading..."} >    <Contact />  </Suspense>} />
        <Route path="signUp" element={<Suspense fallback={"Loading..."} >     <SignUp /> </Suspense>} />
        <Route path="products" element={<Suspense fallback={"Loading..."} >   <Products />  </Suspense>} />
        <Route path="wishlist" element={<Suspense fallback={"Loading..."}  >  <Wishlist setWish={setWish} wish={wish} />  </Suspense>} />
        <Route path="getId" element={<GetById />} />
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
