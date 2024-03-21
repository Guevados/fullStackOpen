
const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts, exercises}) => {
  return (
    <div>
      <Part parts={parts[0]} exercises={exercises[0]}/>
      <Part parts={parts[1]} exercises={exercises[1]}/>
      <Part parts={parts[2]} exercises={exercises[2]}/>
    </div>
  )
}

const Part = ({parts, exercises}) => {
  return (
    <div>
      <p>{parts} - {exercises}</p>
    </div>
  )
}

const Total = () => {
  return (
    <div>
      <h3>Total</h3>
    </div>
  )
}


const App = () => {
  const course = "Half Stack application development";
  const parts = [
      "Fundamentals of React",
      "Using props to pass data",
      "State of a component",
    ]
  const exercises = [10,7,14]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises}/>
      <Total />
    </div>
  );
};

export default App;
