import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../swiperStyles.css";
import LoadingComponent from "./LoadingComponent";
import MoviesGrid from "./MoviesGrid";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";
import photoicon from '../assets/photoicon.png';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("movies"); 
  const myContext = useContext(MyContext);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    document.getElementById("overlay").style.display = isMenuOpen
      ? "block"
      : "none";
  }, [isMenuOpen]);

  const handleButtonClick = (type) => {
    setActiveButton(type); 
    myContext.fetchMoviesForGrid(type); 
  };

  return (
    <div id="homepage" className="flex relative">
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section
        id="main-content"
        className="w-screen max-w-[1600px] p-2 space-y-6 mx-auto md:flex-1 lg:w-4/5 md:px-5 md:space-y-4"
      >
        {/* HEADER */}
        <header className="sticky z-20 top-0 pt-1 md:pt-2 md:z-50 bg-gradient-to-b flex justify-between items-center gap-2 md:gap-2">
          {/* Gradient layer */}
          <div className="absolute top-0 left-0 -z-10 h-[160%] bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-transparent w-full "></div>
          {/* Content */}
          <div className="flex items-center gap-2 md:gap-0">
            <div
              id="hamburgerButton"
              className="cursor-pointer md:hidden text-3xl"
              onClick={() => setIsMenuOpen(true)}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
            {/* Combined search bar and nav */}
            <div className="flex items-center gap-2">
              <input
                className="px-4 py-2.5 bg-zinc-950/50 outline-none border border-zinc-500 rounded-2xl w-full md:w-64 md:py-2 mr-4"
                type="search"
                name="search"
                id="search"
                placeholder="Search"
              />

              <nav className="hidden md:flex gap-2">
                <button
                  className={`${
                    activeButton === "movies" ? "text-green-500" : "text-white hover:text-green-500"
                  }`}
                  onClick={() => handleButtonClick("movies")}
                >
                  Movies
                </button>
                <button
                  className={`${
                    activeButton === "tv" ? "text-green-500" : "text-white hover:text-green-500"
                  } ml-3`}
                  onClick={() => handleButtonClick("tv")}
                >
                  TV Shows
                </button>
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div id="notifications" className="cursor-pointer text-2xl">
              <i className="fa-regular fa-bell"></i>
            </div>

            <Link to="/dev-info-page">
              <div className="cursor-pointer h-10 sm:h-9 aspect-square rounded-full overflow-hidden">
                {/* <img className="h-full" alt="user" /> */}
                <img className="h-full" src={photoicon} alt="user" />
              </div>
            </Link>
          </div>
        </header>

        {/* Image slider for movies */}
        <ImageSlider />
        {/* Movie grid */}
        <MoviesGrid />
      </section>
    </div>
  );
};

export default Homepage;

// IMAGE SLIDER
const ImageSlider = () => {
  const myContext = useContext(MyContext);
  const { isLoadingForSlider, sliderMovies, fetchSliderMovies } = myContext;

  useEffect(() => {
    fetchSliderMovies();
  }, []);

  return (
    <div className="w-auto md:w-[68vw] lg:w-auto mx-auto">
      {isLoadingForSlider ? (
        <div className="border border-zinc-700 rounded-3xl">
          <LoadingComponent />
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          className="mySwiper"
        >
          {sliderMovies.length > 0 ? (
            sliderMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <SliderItem movie={movie} />
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center text-white">No movies available</p>
          )}
        </Swiper>
      )}
    </div>
  );
};

// IMAGE SLIDE ITEM
const SliderItem = ({ movie }) => {
  const handleClick = (movie) => {
    localStorage.setItem("movie", JSON.stringify(movie));
  };

  return (
    <Link to="/movie-details-page" onClick={() => handleClick(movie)}>
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}) no-repeat center center/cover`,
          height: "650px",
        }}
        className="bg-zinc-950 rounded-3xl overflow-hidden relative"
      >
        {/* Linear black gradient from bottom to top */}
        <div
          id="gradient-layer"
          className="absolute h-full w-full bg-gradient-to-t from-black to-transparent md:from-black/90"
        ></div>

        <div className="flex justify-between items-end absolute gap-1 bottom-0 w-full px-1.5 xs:px-3 pb-8 md:px-8">
          <div className="space-y-1 sm:space-y-2 flex-1">
            <h2 className="text-base xs:text-xl font-bold md:text-3xl md:font-semibold">
              {movie.title}
            </h2>
            <p className="text-sm xs:text-base font-light">
              {movie.release_date?.substring(0, 4)}
            </p>
            <p className="text-[10px] xs:text-xs">
              <i className="fa-solid fa-star text-yellow-500"></i>{" "}
              {movie.vote_average?.toFixed(1)}
            </p>
          </div>
          <button className="bg-green-700/75 px-2 py-1 xs:px-6 xs:py-2 h-fit rounded-full text-[10px] xs:text-sm mb-0.5 hover:bg-green-500 duration-300">
            Watch Now
          </button>
        </div>
      </div>
    </Link>
  );
};
