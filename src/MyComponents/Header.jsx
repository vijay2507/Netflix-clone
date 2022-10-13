import React, { useState } from "react";
import Logo from "../assets/Image/svg/netflix-logo-png.svg";
import userIcon from "../assets/Image/svg/user_icon.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
const Header = () => {
  const [show, setShow] = useState(true);
  function changeImage() {
    setShow(!show);
  }
  const [asideBar, setasideBar] = useState(false);
  var navBar = document.querySelector("#navbar");
  if (asideBar) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <header>
        <section className="nav_bg_linear py-3 px-sm-4">
          <div className="container-fluid">
            <nav className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Link to="/Home" className="z_index_1">
                  {" "}
                  <img className="w_100px" src={Logo} alt="Netflix Logo" />
                </Link>
                <ul className=" ms-5 ps-5 mb-0 z_index_1 d-none d-lg-flex">
                  <li>
                    <Link className="fs_xsm text-white" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ms-5 fs_xsm text-white opacity_07"
                      to="/MyList"
                    >
                      My list
                    </Link>
                  </li>
                </ul>
              </div>
              <Dropdown className="z_index_1 d-none d-lg-block">
                <Dropdown.Toggle
                  className="bg-transparent border-0 d-flex align-items-center"
                  id="dropdown-basic"
                >
                  <img src={userIcon} alt="Icon" />
                  <span className="mx-3 fs_xsm">Jane Doe</span>
                  <span className="arrow down"></span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-black">
                  <Dropdown.Item className="bg_black_hover">
                    {" "}
                    <Link to="/" className="text-white  fs_xsm">
                      LOG OUT{" "}
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div
                onClick={() => setasideBar(true)}
                className=" z_index_1 menubar d-lg-none d-flex flex-column 
                justify-content-between"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                id="navbar"
                className={`${
                  asideBar
                    ? "transition position-absolute d-lg-none z_index_2 top-0 w_320px bg-black end-0 min-vh-100"
                    : "transition position-absolute d-lg-none z_index_2 top-0 w_320px bg-black end-0 min-vh-100 d-none"
                }`}
              >
                <div className="d-flex justify-content-between align-items-center p-3">
                  <div className="d-flex align-items-center">
                    <img src={userIcon} alt="Icon" />
                    <span className="mx-3 fs_xsm text-white">Jane Doe</span>
                  </div>

                  <button
                    onClick={() => setasideBar(false)}
                    className="fs-2 bg-transparent text-white border-0"
                  >
                    <HiOutlineX />
                  </button>
                </div>

                <ul className="mt-5 ps-0 text-center">
                  <li>
                    <Link className="fs_xsm text-white" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className=" fs_xsm text-white " to="/MyList">
                      My list
                    </Link>
                    <li className="mt-3">
                      {" "}
                      <Link to="/" className="text-white  fs_xsm">
                        LOG OUT{" "}
                      </Link>
                    </li>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
