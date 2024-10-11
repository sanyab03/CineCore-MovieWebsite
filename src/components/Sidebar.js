import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";

const Sidebar = (props) => {
  const myContext = useContext(MyContext);
  const { fetchMoviesForGrid } = myContext;
  const { isMenuOpen, setIsMenuOpen } = props;

  const categories = [
    {
      name: "Explore Genres",
      id: "all",
      isHeading: true,
    },
    {
      name: "Action",
      id: "28",
    },
    {
      name: "Comedy",
      id: "35",
    },
    {
      name: "Adventure",
      id: "12",
    },
    {
      name: "Mystery",
      id: "9648",
    },
    {
      name: "Horror",
      id: "27",
    },
    {
      name: "Drama",
      id: "18",
    },
    {
      name: "History",
      id: "36",
    },
  ];

  const highlightTab = (tabId = "tab1") => {
    const selectedTab = document.getElementById(tabId);
    selectedTab.style = `
      background-color: rgb(128, 128, 128,0.2);
      padding: 10px 6px 10px 6px;
      border-radius: 20px;
      color: #fff;
      font-weight: 500;
      font-size: 21px;
      margin-left: 24px;
      margin-right: 24px;
      text-align: center;
    `;

    let tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].id !== tabId) {
        tabs[i].style = `
          background-color: none;
          padding: 0;
          margin-left: 24px;
          text-align: center;
          margin-right: 24px;
        `;
      }
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    highlightTab();
  }, []);

  return (
    <>
      <div
        id="sidebar"
        className={
          isMenuOpen
            ? "h-screen min-w-[220px] xs:min-w-[250px] md:min-w-[200px] max-w-sm w-1/6 border-r border-white/10 overflow-y-auto bg-black/25 backdrop-blur-md fixed z-50 top-0 left-0 py-9 space-y-16 md:sticky md:block duration-300 -translate-x-0 opacity-100"
            : "h-screen min-w-[220px] xs:min-w-[250px] md:min-w-[200px] max-w-sm w-1/6 border-r border-white/10 overflow-y-auto backdrop-blur-md fixed z-50 top-0 left-0 py-9 space-y-16 md:sticky md:block -translate-x-full md:-translate-x-0 duration-300 opacity-0 md:opacity-100"
        }
      >
            <Link to={"/"}>
        <div id="logo" className="flex gap-2 items-center px-10">
          <h1 className="text-2xl sm:text-xl xl:text-2xl font ">
            CineCore
          </h1>
        </div>
      </Link>

        <ul id="tabs" className="space-y-6 text-lg text-white/50 md:text-base">
          {categories.map((category, index) => (
            <li
              id={"tab" + index}
              key={index}
              className={`tab px-12 py-0.5 duration-300 cursor-pointer ${
                category.isHeading
                  ? "font-bold text-[25px] text-[#4ec174] cursor-default font-[500]"
                  : ""
              }`}
              onClick={() => {
                if (!category.isHeading) {
                  setIsMenuOpen(false);
                  fetchMoviesForGrid(category.id);
                  highlightTab("tab" + index);
                }
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Close menu button */}
      <button
        id="close-menu-button"
        className={
          isMenuOpen
            ? "text-xl opacity-100 backdrop-blur-sm bg-white/25 scale-100 delay-300 duration-300 h-12 w-12 rounded-full fixed top-7 z-30 left-[80%] xs:left-[70%] sm:left-[40%]"
            : "opacity-0 h-12 w-12 scale-0 duration-300 rounded-full fixed top-7 z-20 left-[80%] xs:left-[70%] sm:left-[40%]"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </>
  );
};

export default Sidebar;


