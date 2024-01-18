import React from "react";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text-5xl font-bold text-blue-500 mb-4 mt-16 ">
          Quote Generator
        </div>
      </div>

      <Card />
    </>
  );
}

export default App;
