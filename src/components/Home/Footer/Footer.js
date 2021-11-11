import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div
        className="text-primary text-center p-5"
        style={{ backgroundColor: "#000" }}
      >
        <h2>Stay Updated</h2>
        <input className="w-50 me-1" type="" placeholder="Enter you Email" />
        <button className="btn btn-primary">Subscribe</button>
      </div>
      <p
        className="text-center text-white  mb-0 p-3"
        style={{ backgroundColor: "#000" }}
      >
        Sam Motors © 2021. All Rights Reserved. Terms of Use and Privacy Policy
      </p>
    </div>
  );
};

export default Footer;
