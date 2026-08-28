import React from "react"

export default function HomeComponent() {
  const openChildWindow = () => {
    window.api.send("openChildWindow");
  }

  return (
    <div className="container home-container">
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
