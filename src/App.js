import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import LoggedInNavbar from "./components/LoggedInNav";

function App() {
  return (
    <div>
      <Nav />

      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
