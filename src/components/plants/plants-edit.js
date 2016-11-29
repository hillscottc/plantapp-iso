import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './plants-view.css'


class PlantsEdit extends Component {

  constructor(props) {
    super(props);
    this.doQuery = this.doQuery.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.loadPlants({});
  }


  loadPlants({common, family, symbol, sci, offset}) {
    // searchPlants({common, family, symbol, sci, offset}).then((searchResults) => {
    // });
  }


  doQuery({common, family, symbol, sci}) {
    // this.loadPlants({common, family, symbol, sci});
  }

  render() {
    // const { plants, pageNum } = this.state;
    // const {resetQuery, doQuery, handlePageClick} = this;

    return (
      <div>
    Edit!!!!!!
      </div>
    );
  }
}

export default withStyles(s)(PlantsEdit);

