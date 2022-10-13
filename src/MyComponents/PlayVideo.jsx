import React from "react";

import Play from "../MyComponents/Play";
import About from "../MyComponents/AboutMovie";
import ViewSimilar from "../MyComponents/ViewSimilar";
import Footer from "../MyComponents/Footer";
export default function PlayVideo() {
  return (
    <>
      <Play />
      <About />
      <ViewSimilar />
      <Footer />
    </>
  );
}
