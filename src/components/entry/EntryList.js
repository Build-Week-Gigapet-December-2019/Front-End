import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchEntry, putEntry, deleteEntry } from "../../actions/entryActions"

import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";

const { Content } = Layout;

function EntryList() {

  const state = useSelector(state => {
    return {
      entryData: state.entryData,
      isFetching: state.isFetching,
      error: state.error
    };
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  console.log("state of entry list", state)

  const entryEdit = (id) => {
    dispatch(putEntry(id))
  }

  const entryDelete = (id) => {
    console.log(id)
    dispatch(deleteEntry(id))
  }

  return (
    <Layout className="layout">
      <Content className="home-desktop-content" style={{ padding: "0 20px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: "80vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="App">
          <h1>My Kids' Food Entries: </h1>

          {state.entryData && state.entryData.map(({ id, date, dairy, fruits, grains, proteins, vegetables, treats }, index) => {
          return  <div key={index}>
                    <p>{date}</p>
                    <p>{dairy}</p>
                    <p>{fruits}</p>
                    <p>{grains}</p>
                    <p>{proteins}</p>
                    <p>{vegetables}</p>
                    <p>{treats}</p>
                    <button type='submit' onClick={()=> {entryEdit(state.entryData)}}>Edit Food Entry</button>
                    <button type='submit' onClick={()=> {entryDelete(id)}}>Delete Food Entry</button>
                  </div>
          })}

          </div>
      </Content>
    </Layout>
  );
}
export default EntryList