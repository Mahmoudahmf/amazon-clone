import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="img"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          title="The Lean Startup: How constant innovation 
          Creates Radically Successful Businesses Paperback."
          price={29.99}
          image="https://theinnovationandstrategyblog.com/wp-content/uploads/2020/07/the-lean-startup-eric-ries.jpg"
          rate={5}
        ></Product>
        <Product
          title="2021 HP Stream 14inch HD Display, Intel Celeron N4020 Dual-Core Processor."
          price={359.98}
          image="https://m.media-amazon.com/images/I/81KbZuKUaVL._AC_SL1500_.jpg"
          rate={5}
        ></Product>
      </div>

      <div className="home__row">
        <Product
          title="Apple iPhone 12 Pro Max, 128GB, Gold - Fully Unlocked"
          price={1350.88}
          image="https://m.media-amazon.com/images/I/71u1BzjGJbL._AC_SL1500_.jpg"
          rate={5}
        ></Product>
        <Product
          title="INI Compatible with Apple Watch Band 44mm 42mm Short "
          price={17.99}
          image="https://m.media-amazon.com/images/I/71P83hnt15L._AC_SL1500_.jpg"
          rate={5}
        ></Product>
        <Product
          title="Apple iPad Pro Tablet (32GB, Wi-Fi, 9.7in) Gray"
          price={289.99}
          image="https://m.media-amazon.com/images/I/51ts5gT9xuL._AC_.jpg"
          rate={5}
        ></Product>
      </div>

      <div className="home__row">
        <Product
        title="Samsung C34H890WJN - 34 Inch (3440 x 1440) WQHD UltraWide Professional LED Curved Monitor"
        price={1700.99}
        image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
        rate={5}
        ></Product>
      </div>
    </div>
  );
}

export default Home;
