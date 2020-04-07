import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part info={parts[0]} />
      <Part info={parts[1]} />
      <Part info={parts[2]} />
      <Part info={parts[3]} />
    </div>
  )
}

const Part = ({ info }) => {
  return (
    <div>
      <p>
        {info.name} {info.exercises}
      </p>
  </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((d, x) => d + x.exercises, 0)
  return (
    <div>
      <p>
        <strong>total of {total} exercises</strong>
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
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
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