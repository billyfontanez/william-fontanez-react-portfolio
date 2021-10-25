import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        {title: "Military Spouses Market", category: "eCommerce"}, 
        {title: "Manage My Stuff", category: "Scheduling"},
        {title: "Fontanez Inc.", category: "Enterprise"}, 
        {title: "The Virtual Fitness Master", category: "Fitness"}
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>
        <button onClick={() => this.handleFilter("Fitness")}>
          Fitness
        </button>
        <button onClick={() => this.handleFilter("eCommerce", "Scheduling", "Enterprise", "Fitness")}>
          View
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}



