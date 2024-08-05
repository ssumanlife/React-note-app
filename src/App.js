import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import "./App.css"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { AddItem } from "./components/AddItem"
import useSearch from "./hooks/useSearch"

const App = () => {
  const date = new Date()
  const currentDate = date.toISOString().substring(0, 10)
  const [searchNote, setSearchNote] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [todays, setTodays] = useState(currentDate)
  const [addItem, setAddItem] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [label, setLabel] = useState("Memo")
  const [notes, setNotes] = useState([
    {
      id: 1,
      label: "Memo",
      title: "벨로그 내용",
      content: "하루에 공부한 내용 정리하면서 복습하고 업로드하기",
      todays: "2024.07.14",
    },
    {
      id: 2,
      label: "Home",
      title: "배고파",
      content: "비빔면에 삶은 계란 2개 넣고 야무지게 먹고싶다.. 오늘 저녁은 무엇을 먹어야 할까",
      todays: "2024.07.15",
    },
    { id: 3, label: "Memo", title: "결혼식", content: "8월 25일 더베뉴지서울", todays: "2024.07.16" },
  ])
  const delaySearchValue = useSearch(searchTerm, 500)
  useEffect(() => {
    const handleSearchNotes = () => {
      const searchNoteValue = notes.filter(
        (note) =>
          note.label.includes(searchTerm) ||
          note.content.includes(searchTerm) ||
          note.title.includes(searchTerm) ||
          note.todays.includes(searchTerm)
      )
      setSearchNote(searchNoteValue)
    }
    handleSearchNotes()
  }, [delaySearchValue])

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleContent = (e) => {
    setContent(e.target.value)
  }
  const handleLabel = (e) => {
    setLabel(e.target.value)
  }
  const handleToday = () => {
    setTodays(currentDate)
  }

  const deleteItem = (id) => {
    let filteredNotes = notes.filter((item) => item.id !== id)
    setNotes(filteredNotes)
  }

  const addItemModal = () => {
    addItem ? setAddItem(false) : setAddItem(true)
    if (addItem) {
      setTitle("")
      setContent("")
      setLabel("Memo")
    }
  }

  const addNote = (e) => {
    e.preventDefault()
    if (title !== "" && content !== "") {
      const newNote = { id: crypto.randomUUID(), label, title, content, todays }
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
      addItemModal()
    }
  }

  return (
    <>
      <main>
        {addItem ? (
          <AddItem
            addNote={addNote}
            title={title}
            content={content}
            handleContent={handleContent}
            handleTitle={handleTitle}
            handleLabel={handleLabel}
            addItemModal={addItemModal}
            todays={todays}
            handleToday={handleToday}
          />
        ) : null}
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Header addItemModal={addItemModal} handleSearchTerm={handleSearchTerm} searchTerm={searchTerm} />
              }
            >
              <Route
                index
                element={
                  <List
                    notes={notes}
                    deleteItem={deleteItem}
                    addItemModal={addItemModal}
                    searchNote={searchNote}
                    searchTerm={searchTerm}
                  />
                }
              />
              {/* <Route path="/Home" element={} /> */}
            </Route>
          </Routes>
        </Router>
      </main>
    </>
  )
}
export default App
