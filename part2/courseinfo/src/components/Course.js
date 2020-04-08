import React from 'react'

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

const Course = ({ course }) => {
  return (
    <>
      <h1>Web development cirriculum</h1>
      {course.map(details => [<Header course={details.name} />, <Content parts={details.parts} />, <Total parts={details.parts} />])}
    </>
  )
}

export default Course