import React from "react"
import { Link } from "gatsby"
import "./Info.scss"

import Title from "../../Globals/Title/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="info col-10 col-sm-8 mx-auto text-center">
            <p className="info_text lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              quis alias odit dicta maxime inventore dolores aliquam est ratione
              quas sint, ullam cupiditate? Natus aut, nemo ex corporis
              perferendis facilis laborum itaque temporibus. Aut expedita
              laborum quos esse ea in assumenda rem, laudantium exercitationem
              quae repellendus. Facilis magnam eos ducimus.
            </p>
            <Link to="/about/">
              <button className="btn-orange btn text-uppercase p-3">
                Tell me more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
