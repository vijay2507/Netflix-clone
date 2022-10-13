import React from "react";
import LikeBtn from "./LikeBtn";
export default function AboutMovie() {
  return (
    <>
      <section className="bg-black text-white pt-5">
        <div className="container-fluid px-sm-3 px-md-5">
          <div className="px-sm-3 px-md-5">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fs_md_2 fw-bold mb-2">Gotham</h1>
              <LikeBtn />
            </div>
            <span className="fs_xsm fw_light opacity-75">Views: 837334</span>
            <span className="fs_xsm fw_light opacity-75 ms-3">
              Cast: Netflix
            </span>
            <p className="fs_xsm fw_light opacity-75 mt-3 mb-0">
              Detective James Gordon is a new recruit assigned to investigate
              the murder of Thomas and Martha Wayne. The case acquaints him with
              the slain couple's son and future crusader, Bruce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
