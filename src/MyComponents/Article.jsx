import React from "react";
import Jumanji from "../assets/Image/png/Jumanji_movie.png";
import StarWar from "../assets/Image/png/Star_wars_movie.png";
import Transformer from "../assets/Image/png/Transformers_movie.png";
import WonderWoman from "../assets/Image/png/Wonder_woman_movie.png";
import SpiderMan from "../assets/Image/png/Spider_man_movie.png";
import Qismat from "../assets/Image/png/Qismat_movie.png";
import Weekned from "../assets/Image/png/The_weekned_way_movie.png";
import LikeBtn from "./LikeBtn";
import { getValue } from "@testing-library/user-event/dist/utils";

export default function Article() {
  // var Liked = [
  //   Jumanji,
  //   StarWar,
  //   Transformer,
  //   WonderWoman,
  //   SpiderMan,
  //   Qismat,
  //   Weekned,
  // ];
  // const LikedMovies = new Map();
  const LikedMovies = [
    { Name: Jumanji },
    { Name: StarWar },
    { Name: Transformer },
    { Name: WonderWoman },
    { Name: SpiderMan },
    { Name: Qismat },
    { Name: Weekned },
  ];

  // for (var i = 0; i < Liked.length; i++) {
  //   LikedMovies.set("Name", Liked[i]);
  // }
  // console.log(LikedMovies);
  // console.log();
  return (
    <>
      <section className="bg_black py-5">
        <div className="container py-md-5 ">
          <div className="row">
            {LikedMovies.map((val, index) => {
              return (
                <div
                  className="p-2 like_viwer position-relative overflow-hidden mt-2 mt-lg-0 col-md-4  col-6"
                  key={index}
                >
                  <div className="overflow-hidden br_16">
                    <div className="position-absolute z_index_1 top_50 right_50 unlike transition">
                      <LikeBtn />
                    </div>
                    <img
                      className="w-100 transition scale_onhover"
                      src={val.Name}
                      alt="StarWar"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
