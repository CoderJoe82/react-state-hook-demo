import { useState } from 'react'
import './App.css'
import MenuBar from './components/MenuBar'
import ButtonDisplay from './components/ButtonDisplay'

function App() {
  const [menuSelection, setMenuSelection] = useState("family")

  const familyItems = [
    { label: "Family doctor", href: "/family" },
    { label: "Facilities", href: "/facilities" }
  ]

  const individualItems = [
    { label: "Personal doctor", href: "/personal" },
    { label: "Facilities", href: "/facilities" }
  ]

  const currentItems = menuSelection === "family" ? familyItems : individualItems

  return (
    <div>
      <ButtonDisplay handleSelection={setMenuSelection} />
      <MenuBar items={currentItems} />
    </div>
  )
}

export default App