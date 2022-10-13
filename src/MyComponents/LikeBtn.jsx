import React from "react";
import { useState } from "react";
import UnlikeImage from "../assets/Image/svg/Unlike.svg";
import LikedImage from "../assets/Image/svg/Liked.svg";

const LikeBtn = () => {
  const [like, unLike] = useState(true);
  return (
    <div>
      {" "}
      {like ? (
        <img
          onClick={() => unLike(false)}
          className="crusor_pointer scale_05 d-none d-sm-block"
          src={UnlikeImage}
          alt="unLike"
        />
      ) : (
        <img
          onClick={() => unLike(true)}
          className="crusor_pointer scale_05 d-none d-sm-block"
          src={LikedImage}
          alt="Liked"
        />
      )}
    </div>
  );
};

export default LikeBtn;
