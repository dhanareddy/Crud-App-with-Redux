import Axios from "../../Axios";

export let fetchPosts = () => {
  return async dispatch => {
    let getPosts = await Axios.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: getPosts.data,
    });
  };
};

export let AddPost = post => {
  return async dispatch => {
    let CREATEPOST = await Axios.post("/posts", post);
    dispatch({
      type: "CREATE_POST",
      payload: CREATEPOST,
    });
  };
};

export let updatePostById = id => {
  return async dispatch => {
    let updateId = await Axios.get(`/posts/${id}`);
    dispatch({
      type: "UPDATE_ID",
      payload: updateId.data,
    });
  };
};

export let UpdatePost = (id, post) => {
  return async dispatch => {
    let updatedPost = await Axios.put(`/posts/${id}`, post);
    dispatch({
      type: "UPDATE_POST",
      payload: updatedPost,
    });
  };
};

export let DeletePost = id => {
  return async dispatch => {
    let deletedPost = await Axios.delete(`/posts/${id}`);
    dispatch({
      type: "DELETE_POST",
      payload: deletedPost.data,
    });
  };
};
