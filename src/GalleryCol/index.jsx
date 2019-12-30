import React, { Component } from 'react'
import GalleryOneImg from '../GalleryOneImg'
import { NavLink } from 'react-router-dom'

class GalleryCol extends Component {
  render() {
    const { jewelryArr } = this.props

    return (
      <div>
        <NavLink to={`/jewelry/${jewelryArr.id}`} >
          <GalleryOneImg jewelryInf={jewelryArr.id} />
        </NavLink>
      </div>
    )
  }
}

export default GalleryCol

let styles = {
    layout1col: {
      gridTemplateColumns: "1fr",
      gridGap: "2%",
    },
    imgContainer: {
        width: "100%",
        marginBottom: "20px"
    },
    artImg: {
        width: "100%",
    }
  }