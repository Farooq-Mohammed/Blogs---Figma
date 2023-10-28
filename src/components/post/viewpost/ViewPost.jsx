import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../store/data.js";

import "./viewPost.css";

const ViewPost = () => {
  const { id } = useParams();

  const post = posts.filter((post) => post._id === id)[0];

  const PostDetail = (post) => (
    <div className="post-container">
      <div className="post-header">
        <h3>{post.title}</h3>
        <small>
          <i className="fa-regular fa-clock"></i> 16 November 2023
        </small>
        <div className="tag-group">
          <small className="tag"># Tag 1</small>
          <small className="tag"># someTag 1</small>
        </div>
      </div>
      <div className="post-body">
        <p>{post.description}</p>
      </div>
    </div>
  );

  const RelatedPost = () => (
    <div className="related-social-card social ">
      <div className="social-card">
        <p className="heading">Relevant blog posts</p>
      </div>
    </div>
  );

  return (
    <>
      <a href="/" className="link">
        <i className="fa-solid fa-arrow-left"></i><span>{" "}</span>Go back
      </a>
      <div className="container">
        {PostDetail(post)}
        {RelatedPost()}
      </div>
    </>
  );
};

export default ViewPost;
