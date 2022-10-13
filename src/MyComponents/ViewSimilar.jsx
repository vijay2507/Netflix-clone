import React, { useRef } from "react";
import Slider from "react-slick";
import Transformer from "../assets/Image/png/Transformers_movie.png";
import WonderWoman from "../assets/Image/png/Wonder_woman_movie.png";
import SpiderMan from "../assets/Image/png/Spider_man_movie.png";
import Qismat from "../assets/Image/png/Qismat_movie.png";
import Prev from "../assets/Image/svg/prev_arrow.svg";
import Next from "../assets/Image/svg/next_arrow.svg";
import LikeBtn from "./LikeBtn";
export default function ViewSimilar() {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const SimilarMovies = [
    { Name: Transformer },
    { Name: WonderWoman },
    { Name: SpiderMan },
    { Name: Qismat },
  ];
  return (
    <>
      <section className="bg_black pb-5">
        <div className="container-fluid px-lg-5 py-4">
          <div className="d-flex justify-content-between align-items-center pt-5 px-lg-5">
            <h2 className="text-white fw_md fs_md">View similar</h2>
            <div className="d-md-flex d-none align-items-center">
              <img
                onClick={() => sliderRef.current.slickPrev()}
                className="prev arrow_bg_hover cursor_pointer py-3 px_14 rounded-circle"
                src={Prev}
                alt="prev"
              />
              <img
                onClick={() => sliderRef.current.slickNext()}
                className="ms-5 next arrow_bg_hover py-3 px_14 cursor_pointer rounded-circle"
                src={Next}
                alt="Next"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid ps-lg-5 pe-0">
          <Slider ref={sliderRef} className="ps-lg-5" {...settings}>
            {SimilarMovies.map((val, index) => {
              return (
                <div
                  className="px-sm-2 px-1 like_viwer position-relative overflow-hidden"
                  key={index}
                >
                  <div className="overflow-hidden br_16">
                    <div className="position-absolute z_index_1 top_50 right_50 unlike transition">
                      <LikeBtn />
                    </div>
                    <img
                      className="w-100 transition scale_onhover"
                      src={val.Name}
                      alt="Transformer"
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
