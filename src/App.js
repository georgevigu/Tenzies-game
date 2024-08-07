import React from "react"
import Die from "./Die"
import Confetti from "react-confetti"
import { nanoid } from "nanoid"

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [rolls, setRolls] = React.useState(0)
  const [tenzies, setTenzies] = React.useState(false)
  
  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const allSameValue = dice.every(die => die.value === dice[0].value)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
    }
  }, [dice])

  function allNewDice() {
    let newDice = []
    for(let i = 0; i < 10; i++) {
      const rand = Math.floor(Math.random() * 6) + 1; 
      const die = { id:nanoid(), value:rand, isHeld:false }
      newDice.push(die)
    }
    return newDice
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(allNewDice())
      setRolls(0)
    }
    else {
      setDice(prevDice =>
        prevDice.map(
          die => die.isHeld ? 
            die
            :
            {
              id:nanoid(),
              value:Math.floor(Math.random() * 6) + 1,
              isHeld:false
            }
        )
      )
      setRolls(prevRolls => prevRolls + 1)
    }
  }

  function holdDice(id) {
    setDice(prevDice => 
      prevDice.map(
        die => die.id === id ?
          {
            ...die,
            isHeld : !die.isHeld
          }
          :
          die
      )
    )
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {dice.map(die => <Die 
          key={die.id} 
          value={die.value} 
          isHeld={die.isHeld}
          hold={() => holdDice(die.id)}
          />) }
      </div>
      <button className="roll-dice" onClick={rollDice}>{tenzies ? "New game" : "Roll"}</button>
      <h3>Rolls: {rolls}</h3>
    </main>
  )
}