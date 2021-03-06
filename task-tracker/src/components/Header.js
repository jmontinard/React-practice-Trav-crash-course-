import React from 'react'
// impt to impt proptype

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd,showAdd}) => {
//   const onClick = (e) =>{
//     console.log(e.target.innerHTML)
//     console.log('click')
// }

  return (
    <header className='header'>
        <h1>{title}</h1>
       <Button color ={showAdd ? 'red': 'green'} text={showAdd ? 'Close': 'Add'}  onClick= {onAdd}/>
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