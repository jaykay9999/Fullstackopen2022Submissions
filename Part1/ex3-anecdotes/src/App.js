import { useState } from 'react'


function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState(new Array(anecdotes.length).fill(0))
   

  const randomHandler = ()=>{
    const rndInt = randomIntFromInterval(0, anecdotes.length-1)
    setSelected(rndInt)
    const copy = [...points]
    copy[rndInt] += 1 
    setPoints([...copy])
    console.log(rndInt)
    console.log(points)
  }

// largest number of votes
  const mostVoted = Math.max(...points)

// index of the largest voted anecdote in the points table
  const indexOfMostVoted = points.indexOf(mostVoted)





  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={randomHandler}>random</button>
      <p>value for this anecdote is : {points[selected]}</p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfMostVoted]}</p>
      <p>has {mostVoted} votes</p>

    </div>
  )
}

export default App