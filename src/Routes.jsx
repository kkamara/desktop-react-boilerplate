import React from "react"
import { Routes, Route, } from "react-router-dom"

import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"

import Home from "./components/pages/HomeComponent"

import NotFound from "./components/pages/http/NotFoundComponent"

import { url, } from "./utils/config"

export default () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={url("/")} element={<Home />}/>
        <Route path={url("*")} element={<NotFound />}/>
      </Routes>
      <Footer/>
    </>
  )
}
