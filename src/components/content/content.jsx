import React from 'react'
import { Container } from 'react-bootstrap'
import ScrollableAnchor from 'react-scrollable-anchor'
import dbText from '../../db-text'
import './content.css'

const Content = () => {
  return (
    <>
      {dbText.map((item, key) => {
        return (
          <ScrollableAnchor id={item.id} key={`${key}_${item.text}`}>
            <Container className="vh-85 w-auto">
              <div className="h-100 pt-9 justify-content-end d-flex flex-column">
                <h2>{item.title}</h2>
                {item.text}
              </div>
            </Container>
          </ScrollableAnchor>
        )
      })}
    </>
  )
}
export default Content
