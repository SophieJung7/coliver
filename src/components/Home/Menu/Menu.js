import React, { Component } from "react"
import Title from "../../Globals/Title/Title"
import Img from "gatsby-image"
import "./Menu.scss"

const getCategories = items => {
  let menuItems = items.map(item => {
    return item.node.category
  })
  let objectMenuItems = new Set(menuItems)
  let arrayMenuItems = Array.from(objectMenuItems)
  // Get rid of "null" from the menu
  let finalMenuItems = arrayMenuItems.filter(item => item !== null)
  let categories = ["all", ...finalMenuItems]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      selectedItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleItems = category => {
    let allItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { selectedItems: allItems }
      })
    } else {
      let selectedItems = this.state.items.filter(
        ({ node }) => node.category === category
      )
      this.setState(() => {
        return { selectedItems: selectedItems }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            {/* { Categories } */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn menu-btn-green text-capitalize m-3"
                      onClick={() => {
                        this.handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* { Items } */}
            <div className="row">
              {this.state.selectedItems.map(({ node }) => {
                return (
                  <div key={node.id} className="col-11 col-md-6 my-3 d-flex">
                    <div>
                      <Img className="menu-photo" fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="menu-text d-flex justify-content-between">
                        <h6 className="menu-text-title mb-0">{node.title}</h6>
                        <h6 className="menu-text-price mb-0">${node.price}</h6>
                      </div>
                      <p>
                        <small className="menu-text-description">
                          {node.description.description}
                        </small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are many items to display. </h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
