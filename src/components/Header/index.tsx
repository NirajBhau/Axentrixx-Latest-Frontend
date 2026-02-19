"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";
import { useModal } from "@/context/ModalContext";

const Header = () => {
  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Close mobile nav on route change
  useEffect(() => {
    setNavbarOpen(false);
  }, [pathUrl]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navbarOpen]);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();
  const { openModal } = useModal();

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${sticky
          ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
          : "absolute bg-transparent"
          }`}
      >
        {/* ===== LOGO (Absolute Left Edge) ===== */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
          <Link href="/" className="navbar-logo block group">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/images/logo/logo.png"
                alt="Axentrixx Logo"
                width={60}
                height={60}
                className="header-logo w-auto h-[40px] sm:h-[50px] dark:hidden"
              />
              <Image
                src="/images/logo/logo.png"
                alt="Axentrixx Logo"
                width={60}
                height={60}
                className="header-logo hidden w-auto h-[40px] sm:h-[50px] dark:block"
              />
              <span className="text-lg sm:text-xl font-bold text-dark group-hover:text-primary transition-colors duration-300 dark:text-white">
                Axentrixx
              </span>
            </div>
          </Link>
        </div>

        <div className="container">
          <div className="relative flex items-center justify-end py-2">

            {/* ===== DESKTOP NAV (Absolute Center) ===== */}
            <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <ul className="flex gap-x-8 xl:gap-x-12">
                {menuData.map((menuItem, index) =>
                  menuItem.path ? (
                    <li key={index} className="group relative">
                      <Link
                        scroll={false}
                        href={menuItem.path}
                        className={`ud-menu-scroll flex py-6 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary ${pathUrl === menuItem?.path && "text-primary"
                          }`}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  ) : (
                    <li className="submenu-item group relative" key={index}>
                      <button
                        onClick={() => handleSubmenu(index)}
                        className="ud-menu-scroll flex items-center justify-between py-6 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                      >
                        {menuItem.title}
                        <span className="pl-1">
                          <svg
                            className="duration-300 lg:group-hover:rotate-180"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "!-left-[25px]" : "hidden"
                          }`}
                      >
                        {menuItem?.submenu?.map((submenuItem: any, i) => (
                          <Link
                            href={submenuItem.path || "#"}
                            key={i}
                            className={`block rounded px-4 py-[10px] text-sm ${pathUrl === submenuItem.path
                              ? "text-primary"
                              : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                              }`}
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            {/* ===== RIGHT SIDE: Hamburger (mobile) + CTA (desktop) ===== */}
            <div className="flex items-center gap-4 z-10">
              {/* Desktop CTA Button */}
              <button
                onClick={openModal}
                className="hidden sm:flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-primary/90 hover:shadow-signUp md:px-9 lg:px-6 xl:px-9"
              >
                Book a Consultation
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Hamburger Toggle - Mobile Only */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="block rounded-lg p-2 ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-[6px] block h-[3px] w-[28px] rounded-sm transition-all duration-300 bg-dark dark:bg-white ${navbarOpen ? "top-[9px] rotate-45" : ""
                    }`}
                />
                <span
                  className={`relative my-[6px] block h-[3px] w-[28px] rounded-sm transition-all duration-300 bg-dark dark:bg-white ${navbarOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`relative my-[6px] block h-[3px] w-[28px] rounded-sm transition-all duration-300 bg-dark dark:bg-white ${navbarOpen ? "top-[-9px] -rotate-45" : ""
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE NAV OVERLAY ===== */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      {/* ===== MOBILE NAVIGATION DRAWER ===== */}
      <nav
        className={`fixed top-0 right-0 z-[999] h-full w-[280px] bg-white shadow-xl dark:bg-dark-2 transform transition-transform duration-300 ease-in-out lg:hidden ${navbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-dark-3">
          <span className="text-lg font-bold text-dark dark:text-white">Menu</span>
          <button
            onClick={() => setNavbarOpen(false)}
            className="rounded-lg p-2 text-body-color hover:text-primary dark:text-gray-300"
            aria-label="Close Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="overflow-y-auto h-[calc(100%-140px)] px-6 py-4">
          <ul className="space-y-1">
            {menuData.map((menuItem, index) =>
              menuItem.path ? (
                <li key={index}>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    scroll={false}
                    href={menuItem.path}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${pathUrl === menuItem?.path
                      ? "bg-primary/10 text-primary"
                      : "text-dark hover:bg-gray-50 hover:text-primary dark:text-white dark:hover:bg-dark-3"
                      }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ) : (
                <li key={index}>
                  <button
                    onClick={() => handleSubmenu(index)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-dark transition-colors hover:bg-gray-50 hover:text-primary dark:text-white dark:hover:bg-dark-3"
                  >
                    {menuItem.title}
                    <svg
                      className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96 py-1" : "max-h-0"}`}>
                    <div className="ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                      {menuItem?.submenu?.map((submenuItem: any, i) => (
                        <Link
                          href={submenuItem.path || "#"}
                          key={i}
                          onClick={() => setNavbarOpen(false)}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${pathUrl === submenuItem.path
                            ? "text-primary font-medium"
                            : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                            }`}
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Mobile CTA Button */}
        <div className="border-t border-gray-100 px-6 py-4 dark:border-dark-3">
          <button
            onClick={() => {
              setNavbarOpen(false);
              openModal();
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
          >
            Book a Consultation
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
