import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Drawingboard from "./components/Drawingboard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

class App extends Component {
  state = {
    content: "Drawingboard"
  }

  componentDidMount() {
    document.getElementById("galleryButton").addEventListener("click", e => {
      e.preventDefault();

      if (this.state.content === "Drawingboard") {
        this.setState({
          content: "Gallery"
        })
      } else {
        this.setState({
          content: "Drawingboard"
        })
      }
    })
  }

  render() {
    let content = null;

    if (this.state.content === "Drawingboard") {
      content = (
        <Drawingboard />
      )
    } else {
      content = (
        <Gallery />
      )
    }

    return (
      <div className="App">
        <Navbar home={this.state.content}/>
        {content} 
        <Footer />
      </div>
    );
  }
}

export default App;