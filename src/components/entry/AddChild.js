import React, { useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const AddChild = () => {
  const parentId = localStorage.getItem("user_id");

  const [child, setChild] = useState({
    name: "",
    parent_id: parentId
  });
  const [childInfo, setChildInfo] = useState({
    id: null,
    name: ""
  });

  const handleChange = e => {
    setChild({
      ...child,
      [e.target.name]: e.target.value
    });
  };

  const addChild = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/parents/child", child)
      .then(res => {
        console.log(res.data);
        setChildInfo({
          id: res.data.id,
          name: res.data.name
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <section>
        <h1>Add Child</h1>
        <form onSubmit={addChild}>
          <h1>Child's Name:</h1>
          <input
            type="text"
            name="name"
            placeholder="Child's name"
            value={child.name}
            onChange={handleChange}
          />
          <button>Add Child</button>
        </form>
      </section>
      <h1>{childInfo.name}</h1>
      <h1>{childInfo.id}</h1>
    </div>
  );
};

export default AddChild;
