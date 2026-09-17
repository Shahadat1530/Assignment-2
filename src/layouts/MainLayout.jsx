import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
