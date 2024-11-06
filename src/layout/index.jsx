import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Overlay from "../components/overlay";

export default function Layout() {
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
