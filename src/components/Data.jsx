import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../redux/todoSlicer";

const Data = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  console.log(data);
  return (
    <div>
      {data.isLoading ? (
        <center>
          <h1>Loading....</h1>
        </center>
      ) : (
        data.data.map((item, idx) => {
          return <p key={idx}>{item.name}</p>;
        })
      )}
    </div>
  );
};

export default Data;
