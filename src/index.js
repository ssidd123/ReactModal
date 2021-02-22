import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    open: false,
    output:"Jai ho"
  };

  onOpenModal = (e) => {
  e.preventDefault()
    this.setState({ open: true });
    //console.log(e.target['name'])
   // this.setState
  };
  
handleChange =(e) => {
//console.log(e.target.value)
	this.setState({output:e.target.value})
};
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        
        <form>
          <h3>Please enter text here!!</h3>
         <input type="text" name="name" onChange={this.handleChange}/>
        <button onClick={this.onOpenModal}>Open modal</button>
        </form>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Text Box Text</h2>
          <p>
            {this.state.output}
          </p>
        </Modal>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

