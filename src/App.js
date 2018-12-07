import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Drawingboard from "./components/Drawingboard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

class App extends Component {
  state = {
    content: "drawingboard"
  }

  componentDidMount() {
    document.getElementById("galleryButton").addEventListener("click", e => {
      e.preventDefault();

      if (this.state.content === "drawingboard") {
        this.setState({
          content: "gallery"
        })
      } else {
        this.setState({
          content: "drawingboard"
        })
      }
    })
  }

  render() {
    let content = null;

    if (this.state.content === "drawingboard") {
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
        <Navbar />
        {content} 
        <Footer />
      </div>
    );
  }
}

export default App;