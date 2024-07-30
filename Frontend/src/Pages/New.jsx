import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Footer";
import AddNewForm from "../components/Form";
import Header from "../components/Header";


const New = () => {
  return (
    <>
    <Header />
    <Layout>
        <AddNewForm/>
    </Layout>
    </>
  )
}

export default New