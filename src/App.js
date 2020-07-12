import React from "react";
import "./App.css";
import Modal1 from "./components/form";
import Modal2 from "./components/auth";
import Modal3 from "./components/message";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal_1: true,
    };
  }

  buttonClickHandler = () => {
    this.setState({
      showModal: true,
    });
  };

  onClose = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ modal_1: true })}>
          Show Modal 1
        </button>
        <button onClick={() => this.setState({ modal_2: true })}>
          Show Modal 2
        </button>
        <button onClick={() => this.setState({ modal_3: true })}>
          Show Modal 3
        </button>

        <Modal1
          isModalVisible={this.state.modal_1}
          onModalClose={() => this.setState({ modal_1: false })}
        />

        <Modal2
          isModalVisible={this.state.modal_2}
          onModalClose={() => this.setState({ modal_2: false })}
        />

        <Modal3
          isModalVisible={this.state.modal_3}
          onModalClose={() => this.setState({ modal_3: false })}
        />
      </div>
    );
  }
}

export default App;
