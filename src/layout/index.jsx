import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Overlay from "../components/overlay";
import useScroll from "../hooks/useScroll";

export default function Layout() {
  useScroll();
  return (
    <>
      <Overlay />
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
