import Navbar from "@/components/Navbar";
import React from "react";

const MainLayoutPage = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayoutPage;
