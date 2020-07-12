import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './modal';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: true
    }
  }

  buttonClickHandler = () => {
    this.setState({
      showModal: true
    });
  }

  onClose = () => {
    this.setState({
      showModal: false
    });
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.buttonClickHandler}> Show Modal</button>
        
        <input type='text'></input>
        <input type='text'></input>
        <input type='text'></input>
        <input type='text'></input>
        
        {this.state.showModal && (
        <Modal onModalClose={this.onClose}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>

            <>
              <input type='text'></input>
              <input type='text'></input>
              <input type='text'></input>
              <input type='text'></input>
            </>

          </Modal.Body>
          <Modal.Footer>
            <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
          </Modal.Footer>
        </Modal>
      )}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    )
  };
}

export default App;
