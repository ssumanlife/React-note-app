// import React from "react"

import "./Item.css"
import { ReactComponent as DeleteIcon } from "../assets/delete-icon.svg"
import { ReactComponent as EditIcon } from "../assets/edit-icon.svg"

export const Item = ({ item, deleteItem, addItemModal }) => {
  return (
    <li>
      <div>
        <span className={item.label}>{item.label}</span>
        <div>
          <button>
            <EditIcon onClick={() => addItemModal()} />
          </button>
          <button>
            <DeleteIcon onClick={() => deleteItem(item.id)} />
          </button>
        </div>
      </div>
      <p>{item.title}</p>
      <p>{item.content}</p>
      <span className="today">{item.todays}</span>
    </li>
  )
}
