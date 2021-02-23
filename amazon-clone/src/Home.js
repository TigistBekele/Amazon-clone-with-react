import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Movie/SYLV_2020_GWBleedingHero_1500x600_POST_Final_noLocale_PVD6240_SylviesLove._CB416257388_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple Watch Series 6 (GPS, 40mm) - (PRODUCT)RED - Aluminum Case with (PRODUCT)RED﻿ - Sport Band"
            price={339}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81ww7fpkNHL._AC_SX522_.jpg"
          />
          <Product
            id="49538094"
            title="Easehold Juicer Machines Extractor 600W Centrifugal Juicers Electric Anti-Drip Dual Speed BPA-Free with Juice Jug and Pulp Container for Fruit Vegetable"
            price={47.59}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71meaaMcT-L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="16.9 Quart Large Air Fryers,Air Fryer Oven Airfryer Toaster Oven Combo,Convection Toaster Oven with Rotisserie Dehydrator,1800W (Claret-Red B)"
            price={152.89}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61EyZkCdlGL._AC_SX569_.jpg"
          />

          <Product
            id="99903850"
            title="COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear, Comfortable Protein Earpads, 30 Hours Playtime for Travel/Work, Purple"
            price={69.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61W5XipljYL._AC_SX466_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={1039}
            rating={4}
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung C49J890DKN, CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty"
            price={999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="Parlux 385 PowerLight Ionic & Ceramic Hair Dryer Fuchsia/Pink"
            price={203.89}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61XD7GAXVgL._AC_SX522_.jpg"
          />
          <Product
            id="8903851"
            title="Samsung Galaxy S20 5G Factory Unlocked New Android Cell Phone US Version, 128GB of Storage, Fingerprint ID and Facial Recognition, Long-Lasting Battery, Cosmic Gray"
            price={799.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61nSb8Jn7oL._AC_SY550_.jpg"
          />
          <Product
            id="23445930"
            title="SAMSUNG 65-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN65Q70TAFXZA, 2020 Model)"
            price={1097.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
