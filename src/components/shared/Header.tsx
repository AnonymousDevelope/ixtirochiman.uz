import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { languageList } from "@/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@components/ui/select";
import type { LangList } from "@/types/language";
import SmoothLink from "../ui/SmoothLinks";
import { Link } from "react-router";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleMode = () => {
    const html = document.documentElement;
    const currentlyDark = html.classList.contains("dark");

    if (currentlyDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  const navItems = [
    { href: "/#team", label: "Bizning jamoa" },
    { href: "/#mission", label: "Missiya" },
    { href: "/#contact", label: "Aloqa" },
    { href: "/#startup-school", label: "Startup maktabi" },
    { href: "/#blog", label: "Blog" },
  ];
  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">
              <Link to={"/"}>Ixtirochiman.uz</Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <SmoothLink
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </SmoothLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              onClick={toggleMode} 
              variant="outline" 
              size="sm" 
              className="outline-none bg-transparent border-none focus:ring-0 ring-0 shadow-none hover:bg-[#3b82f61a]"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            
            <Select defaultValue={languageList[0].slogan}>
              <SelectTrigger className="outline-none border-none focus:ring-0 ring-0 shadow-none hover:bg-[#3b82f61a]">
                <Globe size={"20px"} className="mr-2"/>
                <SelectValue /> {" ".repeat(4)}
              </SelectTrigger>
              <SelectContent>
                {languageList.map((lang: LangList) => (
                  <SelectItem key={lang.slogan} value={lang.slogan}>
                    {lang.lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 blue-glow ml-2">
              Qo'shilish
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              onClick={toggleMode} 
              variant="outline" 
              size="sm" 
              className="outline-none bg-transparent border-none focus:ring-0 ring-0 shadow-none hover:bg-[#3b82f61a]"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background pb-4">
            <nav className="flex flex-col space-y-2 px-4 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 px-3 rounded-md hover:bg-accent text-muted-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="px-4 pt-2">
              <Select defaultValue={languageList[0].slogan}>
                <SelectTrigger className="w-full">
                  <Globe size={"20px"} className="mr-2"/>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languageList.map((lang: LangList) => (
                    <SelectItem key={lang.slogan} value={lang.slogan}>
                      {lang.lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="px-4 pt-3">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold blue-glow">
                Qo'shilish
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;