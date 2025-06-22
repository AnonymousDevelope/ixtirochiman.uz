// App.tsx
import { Outlet } from "react-router-dom";
import Header from "@components/shared/Header";
import { Footer } from "./components/sections";
import "./App.css"
function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
