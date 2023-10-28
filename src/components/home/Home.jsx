import React, { useState } from "react";
import Posts from "../post/Posts";
import Social from "../social/Social";

import "./home.css";

const CustomSelect = () => {

  const [sortBy, setSortBy] = useState();

  const handleSortByChange = (e) => setSortBy(e.target.value); 

  return (
    <div className="custom-select">
      <select id="sort" value={sortBy} onChange={(e) => handleSortByChange(e)}>
        <option value="Popularity">Popularity</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
      <span className="custom-arrow" />
    </div>
  );
};

const Home = () => {
  return (
    <React.Fragment>
      <CustomSelect />
      <h3>Popular Blog Title</h3>
      <main className="container">
        <Posts className="posts" />
        <Social className="social" />
      </main>
    </React.Fragment>
  );
};

export default Home;
