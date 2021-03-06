import React, { Component } from "react";

import "./Nav.css";

import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button,
  Glyphicon,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Badge
} from "react-bootstrap";

class NavMain extends Component {
  state = {
    term: "",
    open: false
  };

  onBtnClick = e => {
    this.setState(prevState => {
      return {
        open: !prevState.open
      };
    });
  };

  onInputChange = e => {
    let event = e.target.value;
    this.setState({ term: event });
  };

  buttonFormSubmitClicked = e => {
    // call back function that will run when called from parent component
    this.props.onTermSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    // console.log(this.props);
    const style = {
      brand: {
        fontSize: "25px"
      },
      items: {
        fontSize: "20px"
      },
      search: {
        marginTop: "-12px",
        padding: "0px"
      }
    };

    const badge = (
      <Badge className="cart-badge">{this.props.countOfCartItems}</Badge>
    );

    const tooltipEmpty = (
      <Tooltip id="tooltip">
        <p>Your cart is empty.</p>
      </Tooltip>
    );

    const tooltipItemInCart = (
      <Tooltip id="tooltip">
        <p>Proceed to checkout.</p>
      </Tooltip>
    );

    return (
      <Navbar inverse collapseOnSelect id="navbar" fixedTop>
        <Navbar.Header>
          <Navbar.Brand id="brand">
            <a style={style.brand} href="#brand">
              <strong>Watch</strong>This.com
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem className="social" eventKey={1} href="#" id="facebook">
              <i className="fab fa-facebook " />
            </NavItem>
            <NavItem className="social" eventKey={2} href="#" id="twitter">
              <i className="fab fa-twitter-square " />
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/" className="nav-item">
              Home
            </NavItem>

            <NavDropdown
              eventKey={3}
              title="Watches"
              id="basic-nav-dropdown"
              onClick={this.onBtnClick}
            >
              <Row className="show-grid">
                <Col xs={6}>
                  <MenuItem eventKey={3.1} className="nav-item">
                    <img src="https://via.placeholder.com/30" alt="" /> Brand 1
                  </MenuItem>
                  <MenuItem eventKey={3.2} className="nav-item">
                    <img src="https://via.placeholder.com/30" alt="" /> Brand 2
                  </MenuItem>
                  <MenuItem eventKey={3.3} className="nav-item">
                    <img src="https://via.placeholder.com/30" alt="" /> Brand 3
                  </MenuItem>
                </Col>
                <Col xs={6}>
                  <MenuItem eventKey={3.4} className="nav-item">
                    <img src="https://via.placeholder.com/30" alt="" /> Brand 4
                  </MenuItem>
                  <MenuItem eventKey={3.5} className="nav-item">
                    <img src="https://via.placeholder.com/30" alt="" /> Brand 5
                  </MenuItem>
                  <MenuItem eventKey={3.6} className="nav-item">
                    <img src="https://via.placeholder.com/30" alt="" /> Brand 6
                  </MenuItem>
                </Col>
              </Row>
            </NavDropdown>

            <NavItem
              className="hidden-md hidden-sm"
              eventKey={4}
              style={style.search}
            >
              <Navbar.Form pullLeft role="form" onSubmit={this.onFormSubmit}>
                <FormGroup bsSize="small">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    value={this.state.term}
                    onChange={this.onInputChange}
                  />
                </FormGroup>

                <Button
                  className="submit-btn"
                  type="submit"
                  bsSize="small"
                  onClick={this.buttonFormSubmitClicked}
                >
                  <Glyphicon glyph="glyphicon glyphicon-search" />
                </Button>
              </Navbar.Form>
            </NavItem>
            <OverlayTrigger
              placement="bottom"
              overlay={
                !this.props.itemsInCartBoolean
                  ? tooltipEmpty
                  : tooltipItemInCart
              }
            >
              <NavItem eventKey={2} href="/checkout" className="nav-item">
                {!this.props.itemsInCartBoolean ? `Cart` : ` Checkout`}
                <i
                  style={{
                    fontSize: "17px",
                    paddingLeft: "7px",
                    paddingRight: "5px"
                  }}
                  className="fas fa-shopping-cart "
                />
                {!this.props.itemsInCartBoolean ? null : badge}
              </NavItem>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavMain;
