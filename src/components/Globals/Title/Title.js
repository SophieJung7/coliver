import React from "react"

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1
          style={{ color: "#006400" }}
          className="display-4 text-uppercase font-weight-bold"
        >
          {title}
        </h1>
      </div>
    </div>
  )
}

export default Title
