import React, {Component} from 'react'

class GalleryOneImg extends Component {
  render() {
    const { jewelryInfo } = this.props

    if (jewelryInfo) {
      return (
        <div style={styles.imgContainer}>
          <img style={styles.jewelryImg} 
            src={jewelryInfo} 
            alt={jewelryInfo.owner} />
        </div>
      ) 
    } else return null
  }
}

export default GalleryOneImg

let styles = {
  layout1Col: {
    gridTemplateColumns: '1fr',
    gridGap: '2%',
  },
  imgContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  jewelryImg: {
    width: '100%',
  }
}