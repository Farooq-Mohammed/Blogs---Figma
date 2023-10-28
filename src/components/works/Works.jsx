import React, { useState } from "react";
import { posts } from "../store/data";

import "./works.css";

const Works = () => {


  const CustomSelect = () => {
    const [sortBy, setSortBy] = useState();

    const handleSortByChange = (e) => setSortBy(e.target.value);

    return (
      <div className="custom-select">
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => handleSortByChange(e)}
        >
          <option value="Popularity">Popularity</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
        <span className="custom-arrow" />
      </div>
    );
  };

  const renderPublishedPost = (post) => (
    <div key={post._id + "$_$"} className="work-blog-card">
      <img src={post.poster} alt="poster" />
      <div className="text-content">
        <section>
          <h6 className="post-title">{post.title}</h6>
          <section className="post-card-tools">
            <span title="Github repo">
              <i className="fa-brands fa-github fa-lg"></i>
            </span>
            <span title="Live demo">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
          </section>
        </section>
        <p className="post-description">{post.description}</p>
        <div className="tags">
          {post.tags.map((tag, idx) => (
            <p key={"%34_" + idx} className="tag">
              {tag}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <CustomSelect />
      <main className="works-container">
        {posts.map((post) => renderPublishedPost(post))}
      </main>
    </React.Fragment>
  );
};

export default Works;
