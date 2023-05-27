import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Feature from "./Feature/Feature";
import Testimonials from "./Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Feature />
      <Testimonials />
    </div>
  );
}

export default Home;
