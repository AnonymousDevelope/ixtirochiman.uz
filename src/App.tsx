import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@components/shared/Header";
import { Footer } from "./components/sections";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Startup Platforma - Innovatsion G‘oyalar Uchun Makon</title>
        <meta
          name="description"
          content="Bizning startup platformamiz orqali innovatsion g‘oyalaringizni rivojlantiring. Missiyamiz, jamoamiz va bloglarimiz bilan tanishing."
        />
        <meta
          name="keywords"
          content="startup, platforma, innovatsiya, jamoa, blog, aloqa"
        />
        <meta name="author" content="Sultonov Hayotjon Bahodir o'g'li" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Startup Platforma - Innovatsion G‘oyalar Uchun Makon"
        />
        <meta
          property="og:description"
          content="Innovatsion g‘oyalar uchun eng yaxshi joy! Missiyamiz, jamoamiz va startup maktabimiz bilan tanishing."
        />
        <meta
          property="og:image"
          content="https://ixtirochiman-uz.vercel.app/face.jpg"
        />
        <meta
          property="og:url"
          content="https://ixtirochiman-uz.vercel.app/"
        />
        <meta property="og:site_name" content="Startup Platforma" />
        <meta property="og:locale" content="uz_UZ" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Startup Platforma - Innovatsion G‘oyalar Uchun Makon"
        />
        <meta
          name="twitter:description"
          content="Innovatsion g‘oyalar, kuchli jamoa, va startup maktabi bilan tanishing."
        />
        <meta
          name="twitter:image"
          content="https://ixtirochiman-uz.vercel.app/face.jpg"
        />
        <meta name="twitter:site" content="@StartupUz" />
      </Helmet>

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
