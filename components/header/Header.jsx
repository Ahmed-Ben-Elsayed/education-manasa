import React from "react";
import "../header/header.css";
import header_img from "../../src/imges/header-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Advert } from "../advertment/Advert";
import { Properties } from "../properties/Properties";
import { Department } from "../departments/Department";
import { Navbar } from "../navbar/Navbar";
AOS.init();
export const Header = ({ dark , setDark  }) => {
  AOS.init();
  return (
    <>
      <Navbar setDark={setDark}  />
      <header>
        <div className="content">
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            className="header-right"
          >
            <h1 className="name">
              <span className="start-name">م</span> / محمد{" "}
              <span className="salah">صلاح </span>
            </h1>
            <h3>
              لكل ما يتعلق <span className="math">بمنهج الرياضيات </span>
            </h3>
            <h3>
              للثانوية العامة و <span className="secandry">الإعدادية</span>{" "}
            </h3>
          </div>
          <div className="header-left">
            <img
              className="header_img"
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
              srcSet={header_img}
            />
          </div>
        </div>
      </header>
      <Advert />
      <Properties />
      <Department />
    </>
  );
};
