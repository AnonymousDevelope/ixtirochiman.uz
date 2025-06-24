// App.tsx
import { Outlet } from "react-router-dom";
import Header from "@components/shared/Header";
import { Footer } from "./components/sections";
import "./App.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
