import React, { useRef } from "react";
import Ralph from "../assets/Image/png/Ralph_movie.png";
import Incredibles from "../assets/Image/png/Incredibles_movie.png";
import Bolt from "../assets/Image/png/Bolt_movie.png";
import jungleBook from "../assets/Image/png/Jungle_book_movie.png";
import Moana from "../assets/Image/png/Moana_movie.png";
import Robin from "../assets/Image/png/Robin_movie.png";
import Bfg from "../assets/Image/png/Bfg_movie.png";
import Panda from "../assets/Image/png/Panda_movie.png";
import insideOut from "../assets/Image/png/Inside_out_movie.png";
import findingDory from "../assets/Image/png/Finding_dory_movie.png";
import Soul from "../assets/Image/png/Soul_movie.png";
import Slider from "react-slick";
import Prev from "../assets/Image/svg/prev_arrow.svg";
import Next from "../assets/Image/svg/next_arrow.svg";

export default function Disney() {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const DisneyMovies = [
    { Name: Ralph },
    { Name: Incredibles },
    { Name: Bolt },
    { Name: jungleBook },
    { Name: Moana },
    { Name: Robin },
    { Name: Bfg },
    { Name: Panda },
    { Name: insideOut },
    { Name: findingDory },
    { Name: Soul },
  ];
  return (
    <>
      <section className="bg_black">
        <div className="container-fluid px-lg-5 py-4">
          <div className="d-flex justify-content-between align-items-center pt-5 px-lg-5">
            <h2 className="text-white fw_md fs_md">Disney</h2>
            <div className="d-md-flex d-none align-items-center">
              <img
                onClick={() => sliderRef.current.slickPrev()}
                className="prev1 arrow_bg_hover cursor_pointer py-3 px_14 rounded-circle"
                src={Prev}
                alt="prev"
              />
              <img
                onClick={() => sliderRef.current.slickNext()}
                className="ms-5 next1 arrow_bg_hover py-3 px_14 cursor_pointer rounded-circle"
                src={Next}
                alt="Next"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid ps-lg-5 pe-0">
          <Slider ref={sliderRef} className="ps-lg-5" {...settings}>
            {DisneyMovies.map((val, index) => {
              return (
                <div className="px-sm-2 px-1" key={index}>
                  <div className="overflow-hidden br_16">
                    <img
                      className="w-100 transition scale_onhover"
                      src={val.Name}
                      alt="Ralph Breaks The Internet"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}
