import React from "react";
import Logo from "../assets/Image/svg/netflix-logo-png.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function UpgradePlan() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expDate, setexpDate] = useState("");
  const [securityCode, setsecurityCode] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
    // console.log(firstName);
    // console.log(lastName);
    // console.log(cardNumber);
    // console.log(expDate);
    // console.log(securityCode);
    if (
      firstName != "" &&
      lastName != "" &&
      cardNumber != "" &&
      expDate != "" &&
      securityCode != ""
    ) {
      alert("Form Submit Successfully");
      setfirstName("");
      setlastName("");
      setcardNumber("");
      setexpDate("");
      setsecurityCode("");
    } else {
      alert("Please Fill All Inputs");
    }
  };
  return (
    <>
      <section>
        <div className="container-fluid py-3 px-4">
          <nav className="d-flex justify-content-between align-items-center">
            <Link to="/Home" className="z_index_1">
              <img className="w_100px" src={Logo} alt="Netflix Logo" />
            </Link>
            <Link to="/" className="z_index_1 text-black fw-bold fs_md">
              Sign Out
            </Link>
          </nav>
        </div>
      </section>
      {/* choose plan */}
      <section>
        <div className="container-fluid px-4 pt-5">
          <div className="d-flex justify-content-center">
            <div className="max_width_440">
              <h2 className="fw-bold fs_md_2">
                Set up your credit or debit card
              </h2>
              <form onSubmit={formsubmit}>
                <input
                  className="col-12 py-2 py-sm-3 mt-3 px-3"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
                <input
                  className="col-12 py-2 py-sm-3 mt-3 px-3"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
                <input
                  className="col-12 py-2 py-sm-3 mt-3 px-3"
                  type="number"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setcardNumber(e.target.value)}
                />
                <input
                  className="col-12 py-2 py-sm-3 mt-3 px-3"
                  type="text"
                  placeholder="Expiration Date (MM/YY)"
                  value={expDate}
                  onChange={(e) => setexpDate(e.target.value)}
                />
                <input
                  className="col-12 py-2 py-sm-3 mt-3 mb-5   px-3"
                  type="Password"
                  placeholder="Security Code (CVV)"
                  value={securityCode}
                  onChange={(e) => setsecurityCode(e.target.value)}
                />
                <button
                  type="submit"
                  className="border-0 py-3 rounded fs_md_2  bg_danger text-white col-12"
                >
                  Start Membership
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
