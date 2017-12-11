import React from 'react'

const Card = ({ children, style }) => {
  return (
    <div className='card' style={{ width: '20rem' }}>
      { children }
    </div>
  )
}

const CardImg = ({ src, alt }) => {
  let className = 'card-img-top'
  return (
    <img className={ className } src={ src } alt={ alt } />
  )
}

const CardBody = ({ children }) => {
  return (
    <div className='card-body'>
    { children }
    </div>
  )
}

const CardTitle = ({ children }) => {
  return (
    <h2 className='card-title'>
      { children }
    </h2>
  )
}
const CardSubTitle = ({ children }) => {
  return (
    <h4 className='card-title'>
      { children }
    </h4>
  )
}

const CardText = ({ children }) => {
  return (
    <p className='card-text'>
      { children }
      </p>
  )
}

export { Card, CardImg, CardBody, CardTitle, CardText, CardSubTitle }