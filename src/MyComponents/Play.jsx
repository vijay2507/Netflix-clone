import React from "react";
import Gathom from "../assets/Video/Gotham Season 5 Movie Trailer (HD) Final Season.mp4";
import Thumnail from "../assets/Image/png/Thumnail.png";
import { Link } from "react-router-dom";
import Back from "../assets/Image/svg/Back_icon.svg";
export default function Play() {
  return (
    <>
      <section className="bg-black">
        <div className="container-fluid px-0 position-relative">
          <Link
            className="position-absolute d-none d-sm-block mt-sm-4 ms-sm-4 z_index_1"
            to="/Home"
          >
            <img src={Back} alt="Back" />
          </Link>
          <video controls poster={Thumnail} src={Gathom}></video>
        </div>
      </section>
    </>
  );
}
