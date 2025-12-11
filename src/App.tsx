import { useState } from 'react'
import './App.css'
import MenuBar from './components/MenuBar'
import ButtonDisplay from './components/ButtonDisplay'

function App() {
  const [menuSelection, setMenuSelection] = useState("family")
  /*
  This is the state hook. It's essentially the same thing as saying this:
  const menuSelection = "family"
  Except, normally you couln't change what's in a const. the state hook uses the second variable name as a function call to say whatever
  we put in this function call (setMenuSelection) is what menuSelection will become.
  */

  const familyItems = [
    { label: "Family doctor", href: "/family" },
    { label: "Facilities", href: "/facilities" }
  ]

  const individualItems = [
    { label: "Personal doctor", href: "/personal" },
    { label: "Facilities", href: "/facilities" }
  ]
  /*
  These two above are pretty self explanatory. They're holding what your menu items are.
  */

  const currentItems = menuSelection === "family" ? familyItems : individualItems
  /*
  This is a short hand if statement to say if menuSelection is currently set as "family" than currentItems is set to the familyItems array.
  Else, set currentItems to individualItems array
  */

  return (
    <div>
      <ButtonDisplay handleSelection={setMenuSelection} />
      <MenuBar items={currentItems} />
      {/*These are my two components that we're passing the function from the state hook to, as well as the currentItems to.*/}
    </div>
  )
}

export default App
