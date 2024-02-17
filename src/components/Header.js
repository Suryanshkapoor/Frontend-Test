import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <div>
      <nav className="navBar1">
        <div className="navContent">
          <div className="dashtext space-x-3"> 
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Orders</span>
          </div>
          <button type="button" className="createButton">CREATE NEW</button>
        </div>
      </nav>
    </div>
  )
}
