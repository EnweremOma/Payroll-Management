import React from "react";
import { LayoutTypes } from "../interfaces/General";
import Sidebar from "../components/Sidebar";

const Layout: React.FC<LayoutTypes> = ({ className, children }) => {
  return (
    <>
      <div className="bg-payroll-lilac relative scroll-smooth bg-cover flex z-10 min-h-screen w-full p-4  grid-cols-[auto_1fr] gap-4 overflow-hidden">
        <div className="">
          <Sidebar />
        </div>
        <div className="min-h-screen w-full">
          <div className={className}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
