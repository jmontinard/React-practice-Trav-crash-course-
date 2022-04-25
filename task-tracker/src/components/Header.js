import React from 'react'
// impt to impt proptype

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = (e) =>{
    console.log(e.target.innerHTML)
    console.log('click')
}

  return (
    <header className='header'>
        <h1>{title}</h1>
       <Button color ="green" text='Add'  onClick= {onClick}/>
    </header>
  )
}

Header.defualtProps = {
  title: 'Task Tracker',
}

Header.prototypes = {
  title : PropTypes.string,
}
export default Header