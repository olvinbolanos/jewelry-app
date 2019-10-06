import React from 'react'
import {  Header } from 'semantic-ui-react'
import '../App.css'

const Banner = () => {
    return (
        <Header>
            <div className="App-banner">
            </div>
            <header>
            <div id="topnav" className="navbar navbar-fixed-top">
                <div className="navbar-inner">
                    <div className="container">
                    <div className="logo">
                    </div>
                    </div>
                </div>
            </div>
            </header>
            <section id="intro">
                <div className="slogan">
                <div className="icon">
                    <i className="icon-beaker icon-10x"></i>
                </div>
                <h1>Welcome to <span>JewelryFinder</span></h1>
                <h2>We are your one stop shop for buying jewelry online.</h2>
                </div>
            </section>
        </Header>
    )
}

export default Banner