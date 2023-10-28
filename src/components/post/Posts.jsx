import React from "react";
import { posts } from "../store/data";

import "./posts.css";

const Posts = () => {

  const postsar = posts;

  const renderPost = (post) => (
    <div key={post._id + "_$"} className="post-card">
      <img src={post.poster} alt="poster" />
      <div className="text-content">
        <div className="post-title">{post.title}</div>
        <div className="post-description">{post.description}</div>
        <a href={`/post/${post._id}`} className="mt-auto link">
          Read Full Article{" "}
          <span>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
  );

  return <div className="posts">{postsar.map((post) => renderPost(post))}</div>;
};

export default Posts;
