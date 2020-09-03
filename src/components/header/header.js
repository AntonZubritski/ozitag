import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import './header.css'
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  Row,
  Dropdown,
  Col,
  ListGroup,
} from 'react-bootstrap'
import * as actions from '../../redux/actions'

const Header = (props) => {
  const { navItem } = props
  const { OpenMenu, OpenUnderMenu, FalseNav, FalseUnderNav } = props

  const buttGroup = navItem.map((item, key) => {
    const { title, active } = item
    return (
      <Fragment key={key}>
        <Nav.Item>
          <Button
            active={active}
            className="btn-style"
            onClick={() => OpenMenu(item)}
            aria-controls="menu"
          >
            {title}
          </Button>
        </Nav.Item>
        <Collapse in={item.active} id="menu" key={key}>
          <Row className="text-center">
            {item.menu.map((title, key) => {
              return (
                <Col sm={12} md={6} lg xl key={key}>
                  <Dropdown.Divider />

                  <Button
                    className="btn-style"
                    onClick={() => OpenUnderMenu(title, item.id)}
                    aria-controls="example-collapse-text"
                    aria-expanded={title.activeUnderMenu}
                  >
                    {title.title}
                  </Button>

                  <Dropdown.Divider />
                  <Collapse in={title.activeUnderMenu}>
                    <ListGroup variant="flush" className="my-2">
                      {title.undermenu.map((li, key) => {
                        return (
                          <ListGroup.Item className="text-left" key={key}>
                            <a
                              href={`#${item.section}`}
                              onClick={() => FalseUnderNav()}
                            >
                              {li}
                            </a>
                          </ListGroup.Item>
                        )
                      })}
                    </ListGroup>
                  </Collapse>
                </Col>
              )
            })}
          </Row>
        </Collapse>
      </Fragment>
    )
  })

  return (
    <>
      <Navbar bg="light" expand="lg sm">
        <Navbar.Brand href="https://github.com/AntonZubritski">
          Anton Zubritski
          <Dropdown.Divider />
        </Navbar.Brand>
      </Navbar>

      <Navbar bg="light" expand="lg" className="sticky-top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={FalseNav} />
        <Navbar.Collapse id="basic-navbar-nav">{buttGroup}</Navbar.Collapse>
      </Navbar>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    navItem: state.navInfo.navItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    OpenMenu: (item) => dispatch(actions.OpenMenu(item)),
    OpenUnderMenu: (item, menuId) =>
      dispatch(actions.OpenUnderMenu(item, menuId)),
    FalseNav: () => dispatch(actions.FalseNav()),
    FalseUnderNav: () => dispatch(actions.FalseUnderNav()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
