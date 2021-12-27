import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddPost } from "../redux/Action/action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePost = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [state, setState] = useState({
    title: "",
  });
  let { title } = state;

  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      let body = {
        title,
      };
      dispatch(AddPost(body));
      toast.success("successfully post created");
      window.location.assign("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container my-4">
      <div className="col-md-4 mx-auto">
        <h2>Create post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <button className="btn btn-success">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
