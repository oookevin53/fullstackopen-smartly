import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

const Course = ({ course }) => {
  console.log(course)
  return (
    <>
      <h1>Web development cirriculum</h1>
      {course.map(details => [<Header course={details.name} />, <Content parts={details.parts} />, <Total parts={details.parts} />])}
    </>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h2>{course}</h2>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(details => <Part info={details} />)}
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
  const course = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))