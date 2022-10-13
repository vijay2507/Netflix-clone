import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="py-md-5 footer_bg">
        <div className="container py-5">
          <div className="bg_danger max_width_350_xsm footer_shadow d-flex  max_width_700 mx-auto p-sm-3 p-2 flex-column flex-sm-row align-items-center justify-content-between rounded">
            <p className="text-white fs_lg fw-bold mb-0">Upgrade to premium</p>
            <Link to="/UpgradePlan">
              <button className="py-2 mt-2 mt-sm-0 rounded border_white upgrade_btn bg-transparent fs_xsm fw-bold text-white px-4">
                UPGRADE NOW
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
