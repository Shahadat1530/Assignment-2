import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto mt-2">
      <NavBar />
      <div className="min-h-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
