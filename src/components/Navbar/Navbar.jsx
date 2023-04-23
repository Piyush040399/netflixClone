import React, { useEffect, useState } from "react";
import "./navbar.css";

export const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      <img
        className="nav-user"
        src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1805/tuktukdesign180500195/101755741-avatar-icon-vector-male-person-symbol-circle-user-profile-avatar-sign-in-flat-color-glyph-pictogram.jpg"
        alt="avatar"
      />
    </div>
  );
};
