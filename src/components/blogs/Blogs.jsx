import React from "react";
import { posts } from "../store/data";

import "./blogs.css";

const Blogs = () => {
  const renderBlog = (post) => (
    <div key={post._id + "_$_"} className="blog-card">
      <div className="util">
        <h4 className="blog-title text-ellipsis-1 ">{post.title}</h4>
        <small>
          <i className="fa-regular fa-clock"></i>
          {" " + post.createdAt}
        </small>
        <section className="tag-group">
          {post.tags.map((tag, idx) => (
            <small key={"&_" + idx + "%"} className="tag">
              # {tag}
            </small>
          ))}
        </section>
        <section className="tool tool-md">
          <span>{post.published ? "Published" : "Draft"}</span>
          <button className="btn-edit">Edit</button>
        </section>
        <section className="tool tool-sm">
          <span>
            {post.published ? (
              <i title="published" className="fa-solid fa-upload"></i>
            ) : (
              <i title="draft" className="fa-regular fa-floppy-disk fa-xl"></i>
            )}
          </span>
          <button title="edit" className="btn-edit">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </section>
      </div>
      <p className="blog-description text-ellipsis-5">{post.description}</p>
    </div>
  );

  return (
    <div>
      <div className="blog-header">
        <h3>Your Blogs</h3>
        <a href="/post/add" className="btn-add">Add blog</a>
      </div>
      <div className="blog-container">
        {posts.map((post) => renderBlog(post))}
      </div>
    </div>
  );
};

export default Blogs;
