
// 1.4 courseInfo
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
      
      <p>{props.parts[0].name} {props.parts[0].exercises }</p>
      <p>{props.parts[1].name} {props.parts[1].exercises }</p>
      <p>{props.parts[2].name} {props.parts[2].exercises }</p>
     


    </div>
  );
};

const Total = (props) => { 
  return(
    <div>
      
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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

  

  return (
    <div>
      <Header course={course}/>
      <Content parts = {parts} />
      <Total parts = {parts} />   
      </div>
  )
}

export default App

