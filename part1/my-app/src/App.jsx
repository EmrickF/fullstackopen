const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => (
  <div>
    <p>{parts[0].name} {parts[0].exercises}</p>
    <p>{parts[1].name} {parts[1].exercises}</p>
    <p>{parts[2].name} {parts[2].exercises}</p>
  </div>
)

const Total = ({ parts }) => (
  <p>exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
)

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App

// first code

// const Header = (props) => {
//   return <h1>{props.course}</h1>
// }

// const Content = (props) => {
//   return (
//     <div>
//       <p>{props.part1.name} {props.part1.exercises}</p>
//       <p>{props.part2.name} {props.part2.exercises}</p>
//       <p>{props.part3.name} {props.part3.exercises}</p>
//     </div>
//   )
// }


// const Total = (props) => {
//   return (
//     <p>exercises: {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'

//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }

//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }

//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Content part1={part1} part2={part2} part3={part3} />
//        <Header course={course} />
//       <Total part1={part1} part2={part2} part3={part3} />
//     </div>
//   )
// }

// export default App
