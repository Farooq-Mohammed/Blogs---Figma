import React, { useEffect, useState } from "react";
import { API } from '../../../service/api.js';

import "./add.css";

const Add = () => {
  const [post, setPost] = useState({
    poster: "",
    title: "",
    tags: [],
    content: "",
  });

  const [file, setFile] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const formData = new FormData();
        formData.append("name", file[0].name);
        formData.append("file", file[0]);
        try {
          // API call
          
          const response = await API.uploadFile(formData);
          post.poster = response.data.imageUrl;
        } catch (error) {
          console.log("Error:", error);
          // toast.error(error.responseMsg);
        }
      }
    };
    getImage();
  }, [file]);

  const handleInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="addpost">
      <h3>Add blog post</h3>
      <div className="form-group">
        <span>Cover Image</span>
        <label htmlFor="file" className="label-cover-img">
          Choose file
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={post.tags}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows={14}
          name="content"
          value={post.content}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className="btn-group">
        <button className="btn btn-primary">
          <i className="fa-regular fa-floppy-disk"></i>Save
        </button>
        <button className="btn btn-primary">
          <i className="fa-solid fa-upload"></i>Publish
        </button>
        <button className="btn btn-danger">
          <i className="fa-solid fa-xmark fa-lg"></i>Cancel
        </button>
      </div>
    </div>
  );
};

export default Add;
