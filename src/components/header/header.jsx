import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

const Header = () => {
  const navItem = useSelector((state) => state.navItem)
  const dispatch = useDispatch()

  const buttGroup = navItem.map((item, key) => {
    const { title, active } = item
    return (
      <Fragment key={key}>
        <Nav.Item>
          <Button
            active={active}
            className="btn-style"
            onClick={() => dispatch(actions.OpenMenu(item))}
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
                    onClick={() =>
                      dispatch(actions.OpenUnderMenu(title, item.id))
                    }
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
                              onClick={() => dispatch(actions.FalseUnderNav())}
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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => dispatch(actions.FalseNav())}
        />
        <Navbar.Collapse id="basic-navbar-nav">{buttGroup}</Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Header