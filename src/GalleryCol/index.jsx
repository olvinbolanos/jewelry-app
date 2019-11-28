import React, { Component } from 'react'
import GalleryOneImg from './GalleryOneImg'
import { NavLink } from './react-router-dom'

class GalleryCol extends Component {
  render() {
    const { artArr, mod } = this.props

    return (
      <div style = {styles.layout1col} >
        {
          artArr.map((elem, i) => {
            return ((i%3 === mod)?(
              <NavLink key={i} to={`/jewelry/${elem._id}`}>
                <GalleryOneImg key={i} jewelryInfo={elem} />
              </NavLink>
              ) : null)
          })}
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