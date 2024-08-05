// import React from "react"
import { ReactComponent as AddIcons } from "../assets/add-icon.svg"
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg"
import { Outlet } from "react-router-dom"
import "./Header.css"

export const Header = ({ addItemModal, handleSearchTerm, searchTerm }) => {
  return (
    <>
      <header>
        <div>
          <SearchIcon />
          <input type="text" value={searchTerm} onChange={handleSearchTerm} placeholder="Search" />
        </div>
        <button onClick={() => addItemModal()}>
          <AddIcons />
          <span>Add</span>
        </button>
      </header>
      <h1>Your notes</h1>
      <Outlet />
    </>
  )
}
