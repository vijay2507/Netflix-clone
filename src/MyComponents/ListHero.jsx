import React from "react";
import Header from "./Header";
export default function ListHero() {
  return (
    <>
      <section className="My_list_hero_bg overlay position-relative vh_80 vh_50_xsm">
        <Header />
        <div className="container-fluid">
          <h1 className="text-white position-absolute z_index_1 top-50 start-50 translate-middle fs_xl fw-bold">
            My List
          </h1>
        </div>
      </section>
    </>
  );
}
