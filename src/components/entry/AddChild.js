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
        <form onSubmit={addChild}>
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
    </div>
  );
};

export default AddChild;
