import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
export default function Hero() {
  return (
    <>
      <section className="vh_100 vh_60_xsm home_bg_image d-flex flex-column">
        <Header />
        <div className="container-fluid ps-lg-5 d-flex flex_grow_1 align-items-end pb-5">
          <div className="ps-lg-5">
            <h1 className="text-white fs_xl fw-bold">Gotham</h1>
            <p className="text-white max_width_431 fs_xsm fw_light pb-2">
              Detective James Gordon is a new recruit assigned to investigate
              the murder of Thomas and Martha Wayne. The case acquaints him with
              the slain couple's son and future crusader, Bruce.
            </p>
            <Link
              className="bg_danger text-white py-2 px-3 fw-bold fs_xsm rounded"
              to="/PlayVideo"
            >
              PLAY NOW{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
