import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdatePost, updatePostById } from "../redux/Action/action";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  let navigate = useNavigate();
  let STATE = useSelector(state => state.PostReducers.ItemId);
  let dispatch = useDispatch();
  let { id } = useParams();
  let [state, setState] = useState({
    id: "",
    title: "",
  });

  let { title } = state;
  useEffect(() => {
    dispatch(updatePostById(id));
    setState({ id: STATE.id, title: STATE.title });
  }, []);

  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    let { title } = state;
    let body = {
      title,
    };
    e.preventDefault();
    try {
      dispatch(UpdatePost(id, body));
      toast.success("successfully post updated");
      window.location.assign("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-4">
      <div className="col-md-4 mx-auto">
        <h2>Update post</h2>
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

export default EditPost;
