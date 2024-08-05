import React from "react"
import "./AddItem.css"

export const AddItem = ({
  todays,
  handleToday,
  addNote,
  title,
  content,
  handleContent,
  handleTitle,
  handleLabel,
  addItemModal,
}) => {
  return (
    <form onSubmit={addNote}>
      <div>
        <p onChange={handleToday}>{todays}</p>
        <div>
          <label htmlFor="Memo">
            <input type="radio" name="label" id="Memo" value="Memo" onChange={handleLabel} defaultChecked />
            <span>Memo</span>
          </label>
          <label htmlFor="Home">
            <input type="radio" name="label" id="Home" value="Home" onChange={handleLabel} />
            <span>Home</span>
          </label>
        </div>
        <div className="titleWrap">
          <p>제목</p>
          <input type="text" value={title} onChange={handleTitle} />
        </div>
        <div className="contentWrap">
          <p>내용</p>
          <textarea type="text" value={content} onChange={handleContent} />
        </div>
        <div>
          <button type="submit">추가</button>
          <button onClick={() => addItemModal()}>취소</button>
        </div>
      </div>
    </form>
  )
}
