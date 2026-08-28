import React from "react"
import { Helmet, } from "react-helmet"

export default function HomeComponent() {
  const openChildWindow = () => {
    window.api.send("openChildWindow");
  }

  return (
    <div className="container home-container">
      <Helmet>
        <title>Home - {import.meta.env.VITE_APP_NAME || "Desktop React Boilerplate"}</title>
      </Helmet>
      <div className="text-center">
        <button
          className="btn btn-primary home-button"
          onClick={openChildWindow}
        >
          Open Child Window
        </button>
      </div>
    </div>
  )
}
