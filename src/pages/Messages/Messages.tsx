import React from "react";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

export default function Messages() {
  return (
    <div className="bg-paint-bg bg-no-repeat bg-cover flex bg-gray-900/10 z-10">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 flex-1">
        <div>
          <h1 className="">Messages</h1>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
