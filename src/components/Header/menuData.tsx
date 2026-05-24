import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Web Development",
        path: "/services/web-development",
        newTab: false,
      },

      {
        id: 33,
        title: "Analytics & Reporting",
        path: "/services/analytics-reporting",
        newTab: false,
      },
      {
        id: 34,
        title: "Custom Software",
        path: "/services/custom-software",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
