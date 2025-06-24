import { ArrowDown } from "lucide-react";
import { Link } from "react-router";
import SmoothLink from "@/components/ui/SmoothLinks";
const Section = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-blue-bg"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Innovatsiya</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Ohangaron Yoshlar Texnoparki Davlat muassasasi - g'oyalar zamonaviy
            texnologiya, ta'lim va innovatsiya orqali haqiqatga aylanadigan joy.
          </p>

          <p
            className="text-blue-300 text-lg mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            📍 Toshkent viloyati, Ohangaron shahri, AMIR TEMUR 18
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <SmoothLink href="#our_services" className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-3 text-lg blue-glow">
              Sayohatni boshlash
            </SmoothLink>
            <Link to={"https://www.youtube.com/playlist?list=PL9ujj7vqGHShpkdkADMQNCKvOl6SBnE1p"} target="_blank" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-11 rounded-md border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-3 text-lg">
              Dasturlarni ko'rish
            </Link>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-300">Faol startaplar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-300">O'qitilgan talabalar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-300">Texnologik kurslar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-300">FABLAB kirish</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-blue-300"/>
        </div>
      </div>
    </section>
  );
};

export default Section;
