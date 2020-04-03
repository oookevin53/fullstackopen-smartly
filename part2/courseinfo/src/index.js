import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part info={props.parts[0]} />
      <Part info={props.parts[1]} />
      <Part info={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.info.name} {props.info.exercises}
      </p>
  </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.parts[0]['exercises'] + props.parts[1]['exercises'] + props.parts[2]['exercises']}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))