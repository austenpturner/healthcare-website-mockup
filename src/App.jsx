import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact";
import BillingPage from "./pages/billing";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/billing" element={<BillingPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
