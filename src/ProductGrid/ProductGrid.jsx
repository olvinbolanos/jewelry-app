import React, { Component } from 'react';
import prodarr from './prodarr';

class ProductGrid extends Component {
    state = {
        products:[]
    }
    componentDidMount() { 
        var art_id = this.props.match.params.id;
        const products = prodarr.filter(ele => ele.art_id === art_id);
        //fetch products from database  //(first get server running)
        this.setState({products})
    }
    
    render() {
        return (
            <div style = {styles.layout3col} >
                { this.state.products.map((elem,i) => {
                    return (<div key = {i} style = {styles.prodContainer}>
                        <div  style = {styles.imgContainer}>
                            <img  style = {styles.prodImg} src = {elem.imageURL} alt = ''/>
                        </div>
                        <div style = {styles.prodText}>
                            <h4  style = {styles.prodName} >{elem.name} </h4> <h4  style = {styles.prodPrice}>${elem.price}</h4>
                        </div>
                    </div>)
                })}
            </div>  
        )
    }
}

export default ProductGrid 
let styles = {
    layout3col: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "2%",
        margin: "20px"
    },
    imgContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },

    h4: {
        margin: "0"
    },
    artImg: {
        width: "100%",
        height: "200px"
    },
    prodContainer: {
        width: "100%",
        marginBottom: "20px",
        border: "grey solid 1px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"

    },
    prodImg: {
        width: "100%",
    },
    prodText: {
        display: "flex",
        justifyContent: "space-between"
    },
    prodName: {
        paddingLeft: "5px",
        margin: "0"
    },
    prodPrice: {
        paddingRight: "5px",
        margin: "0"

    }
}
