import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import ComingSoon from "./pages/comingSoon";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<ComingSoon />} />
      <Route path="/services" element={<ComingSoon />} />
      <Route path="/team" element={<ComingSoon />} />
      <Route path="/contact" element={<ComingSoon />} />
      <Route path="/billing" element={<ComingSoon />} />
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
