// import React from "react"
import "./List.css"
import { Item } from "./Item"

export const List = ({ notes, deleteItem, addItemModal, searchNote, searchTerm }) => {
  return (
    <ul>
      {searchTerm === ""
        ? notes.map((item) => {
            return <Item item={item} key={item.id} deleteItem={deleteItem} addItemModal={addItemModal} />
          })
        : searchNote.map((item) => {
            return <Item item={item} key={item.id} deleteItem={deleteItem} addItemModal={addItemModal} />
          })}
    </ul>
  )
}
