import logo from './logo.svg';
import './App.css';
import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function App() {
  return (
    <div className="App">
      <div style={styles}>
       
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2> modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
    </div>
  );
}

export default App;


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


