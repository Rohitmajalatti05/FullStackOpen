
// 1.3 courseInfo
// ===================================================================================================================
const Header = (props) => {
  
  return(
    <div>
      <h1>{props.course}</h1>

    </div>

  );
};

// const Part = (props) => {
//   return <p>{props.part} {props.exercises}</p>
// }

const Content = (props) => {
 
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  return(
    <div>
      {/* <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/> */}
      <p>{props.part} {props.exercises}</p>
     


    </div>
  );
};

const Total = (props) => { 
  return(
    <div>
      
      <p>Number of exercises {props.sumOfExercises}</p>
    </div>
  );
};


const App = () => {
  const course = 'Half Stack application development'
  // const exercises1 = 10
  // const exercises2 = 7
  // const exercises3 = 14
  
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const sumOfExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div>
      <Header course={course}/>
      <Content part = {parts[0].name} exercises = {parts[0].exercises} />
      <Content part = {parts[1].name} exercises = {parts[1].exercises} />
      <Content part = {parts[2].name} exercises = {parts[2].exercises} />
      <Total sumOfExercises={sumOfExercises}/>   
      </div>
  )
}

export default App

