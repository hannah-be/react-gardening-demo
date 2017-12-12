import React from "react"

function NavElement({ onCategorySelect, category, children }) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        onCategorySelect({ searchQuery: category })
        console.log('button click ', category)
        // console.log({ searchQuery })
      }}>
      {children}
    </button>
  )
}

export default NavElement
