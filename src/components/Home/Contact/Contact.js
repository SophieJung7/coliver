import React from "react"
import Title from "../../Globals/Title/Title"
import "./Contact.scss"

const Contact = () => {
  return (
    <section className="green-background contact py-5">
      <Title title="contact us" />
      <div className="form-text col-10 col-sm-8 col-md-6 mx-auto">
        <form
          action="https://formspree.io/sophiecheong7@gmail.com"
          method="POST"
        >
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-text-placeholder form-control"
              name="name"
              id="name"
              placeholder="Sophie Jung"
            />
          </div>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-text-placeholder form-control"
              name="email"
              id="email"
              placeholder="email@email.com"
            />
          </div>
          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-text-placeholder form-control"
              rows="5"
              placeholder="Write your message."
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="btn btn-orange btn-block text-capitalize mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
