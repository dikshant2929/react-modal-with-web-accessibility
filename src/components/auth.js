import React, { Component } from "react";
import Modal from "./../modal/index";

export default class Modal2 extends Component {
  render() {
    return (
      <>
        {this.props.isModalVisible && (
          <Modal onModalClose={this.props.onModalClose}>
            <Modal.Header>Login</Modal.Header>
            <Modal.Body>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div
                  id="join"
                  // className="login-wrapper"
                  style={{
                    width: 400,
                    height: 250,
                    // backgroundColor: "#d9d9ff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // borderBlockColor: "#7373ff",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label>
                        Username <sup style={{ color: "#ff0000" }}>*</sup>
                      </label>
                      <input
                        type="text"
                        name="Username"
                        placeholder="Username"
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label>
                        Password <sup style={{ color: "#ff0000" }}>*</sup>
                      </label>
                      <input
                        type="password"
                        name="Password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
              <Modal.Footer.PositiveBtn>Login</Modal.Footer.PositiveBtn>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}
