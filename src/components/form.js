import React, { Component } from "react";
import Modal from "./../modal/index";

export default class Modal2 extends Component {
  render() {
    return (
      <>
        {this.props.isModalVisible && (
          <Modal onModalClose={this.props.onModalClose}>
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Body>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 15,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>
                      First Name <sup style={{ color: "#ff0000" }}>*</sup>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="first name"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 30,
                    }}
                  >
                    <label>
                      Last Name <sup style={{ color: "#ff0000" }}>*</sup>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 15,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>
                      Age <sup style={{ color: "#ff0000" }}>*</sup>
                    </label>
                    <input type="number" name="age" placeholder="age" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 30,
                    }}
                  >
                    <label>
                      Gender <sup style={{ color: "#ff0000" }}>*</sup>
                    </label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <input type="radio" name="gender" value="male" />
                      <label for="male">Male</label>
                      <input type="radio" name="gender" value="female" />
                      <label for="male">Female</label>
                      <input type="radio" name="gender" value="other" />
                      <label for="male">Other</label>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 15,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>
                      Email <sup style={{ color: "#ff0000" }}>*</sup>
                    </label>
                    <input type="text" placeholder="email" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 30,
                    }}
                  >
                    <label>
                      Password <sup style={{ color: "#ff0000" }}>*</sup>
                    </label>
                    <input type="password" placeholder="password" />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
              <Modal.Footer.PositiveBtn>Sign Up</Modal.Footer.PositiveBtn>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}
