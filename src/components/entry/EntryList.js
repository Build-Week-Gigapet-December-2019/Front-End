import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntry, putEntry, deleteEntry } from "../../actions/entryActions";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import Form from "antd/es/form";
import "antd/es/form/style/css";
import Input from "antd/es/input";
import "antd/es/input/style/css";

const { Content } = Layout;

function EntryList(props) {
  const [span, setSpan] = useState("month")
  const [visible, setVisible] = useState(false);
  const [entryToEdit, setEntryToEdit] = useState(null);
  const [foodEntry, setFoodEntry] = useState({
    dairy: null,
    fruits: null,
    grains: null,
    proteins: null,
    vegetables: null,
    treats: null
  });

  const handleChange = e => {
    setFoodEntry({
      ...foodEntry,
      [e.target.name]: e.target.value
    });
  };

  const state = useSelector(state => {
    return {
      entryData: state.entryData,
      isFetching: state.isFetching,
      error: state.error
    };
  });

// localStorage.getItem('child_id')

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry(props.match.params.id, span));
  }, [state.entryData.length, span]);


  const entryEdit = (e) => {
    e.preventDefault()
    dispatch(putEntry(entryToEdit, foodEntry));
  };

  const entryDelete = id => {
    console.log(id);
    dispatch(deleteEntry(id));
  };

  const showModal = id => {
    setVisible(true);
    setEntryToEdit(id);
  };

  const handleOk = e => {
    e.preventDefault()
    dispatch(putEntry(entryToEdit, foodEntry));
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const timespanDay = () => {
    console.log("I can haz fun today?")
    setSpan('day')
  }

  const timespanWeek = () => {
    console.log("I can haz fun last week?")
    setSpan('week')
  }

  const timespanMonth = () => {
    console.log("I can haz fun last month?")
    setSpan('month')
  }

  console.log('Homies be frontin all', span)

  return (
    <Layout className="layout">
      <Content className="home-desktop-content" style={{ padding: "0 20px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
          className="App"
        >
          <h1>My Kids' Food Entries: </h1>

          <button onClick={timespanDay}>Today</button>
          <button onClick={timespanWeek}>Last 7 Days</button>
          <button onClick={timespanMonth}>Last 30 Days</button>

          {state.entryData.length > 0 &&
            state.entryData.map(
              (
                {
                  id,
                  date,
                  dairy,
                  fruits,
                  grains,
                  proteins,
                  vegetables,
                  treats,
                  child_id
                },
                index
              ) => {
                return (
                  <div key={index}>
                    <p>{date}</p>
                    <p>{dairy}</p>
                    <p>{fruits}</p>
                    <p>{grains}</p>
                    <p>{proteins}</p>
                    <p>{vegetables}</p>
                    <p>{treats}</p>
                    {console.log("HEY LOOK AT ME", child_id)}
                    <Button type="primary" onClick={() => showModal(id)}>
                      Edit Food Entry
                    </Button>
                    <Modal
                      title="Edit Your Entry"
                      visible={visible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <Form
                        style={{ width: "20%" }}
                        onSubmit={entryEdit}
                        className="foodentry-form"
                      >
                        <Form.Item>
                          <Input
                            placeholder="Dairy"
                            name="dairy"
                            value={foodEntry.dairy}
                            onChange={handleChange}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Input
                            placeholder="Fruits"
                            name="fruits"
                            value={foodEntry.fruits}
                            onChange={handleChange}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Input
                            placeholder="Grains"
                            name="grains"
                            value={foodEntry.grains}
                            onChange={handleChange}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Input
                            placeholder="Proteins"
                            name="proteins"
                            value={foodEntry.proteins}
                            onChange={handleChange}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Input
                            placeholder="Vegetables"
                            name="vegetables"
                            value={foodEntry.vegetables}
                            onChange={handleChange}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Input
                            placeholder="Treats"
                            name="treats"
                            value={foodEntry.treats}
                            onChange={handleChange}
                          />
                        </Form.Item>
                        <Form.Item>
                        </Form.Item>
                      </Form>
                    </Modal>
                    <Button
                    
                      onClick={() => {
                        entryDelete(id);
                      }}
                    >
                      Delete Food Entry
                    </Button>
                  </div>
                );
              }
            )}
        </div>
      </Content>
    </Layout>
  );
}
export default EntryList
