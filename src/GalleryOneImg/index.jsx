import React, {Component} from 'react'

class GalleryOneImg extends Component {
  constructor(props) {
    super(props)
      this.state = {
        images: [],
        errorState: null,
        loading: false
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.reviewScript !== prevProps.reviewScript) {
      this.setState({
        images: [],
      }, () => this.getImagesFromApi(this.props.reviewScript))
    }
  }

  componentDidMount() {
    // this.getImagesFromApi()
    console.log(`component mounted! 1`)
  }

  getImagesFromApi = (id) => {
    const reviewId = this.props.match.params.id
    console.log('inside getImagesMod', reviewId)
  }

  render() {
    const { jewelryInfo } = this.props

    if ( jewelryInfo ) {
      return (
        <div style= { styles.imgContainer }>
          <img style= { styles.jewelryImg } 
            src= {jewelryInfo} 
            alt= {jewelryInfo.owner} />
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