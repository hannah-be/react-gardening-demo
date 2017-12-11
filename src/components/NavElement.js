import React from 'react'

function NavElement({ onCategorySelect, category, children }) {
  return (
    <button className='btn btn-primary' onClick={() => {
      // console.log('button click ', category)
      onCategorySelect({ searchQuery: category })

    }
    } 
    >
      { children }
    </button>
  )
}

export default NavElement