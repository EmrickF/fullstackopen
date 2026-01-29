import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const vote = () => {
    const votes2= [...votes]
    votes2[selected] += 1
    setVotes(votes2)
  }
  const next = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const maxVotes = Math.max(...votes)
  const bestIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]} votes</p>

      <button onClick={vote}>vote</button>
      <button onClick={next}>next anecdote</button>

      <h2>Anecdote with the most votes</h2>

      <p>{anecdotes[bestIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App
