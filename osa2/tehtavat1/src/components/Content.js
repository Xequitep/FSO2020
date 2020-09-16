import React from 'react';
import Part from './Part';
import Total from './Total';
import Total2 from './Total2';

const Content = ({ course }) => {
  return (
    <>
      <div>
        <h2>{course[0].name}</h2>
        <Part part={course[0].parts[0]} />
        <Part part={course[0].parts[1]} />
        <Part part={course[0].parts[2]} />
        <Part part={course[0].parts[3]} />
        <Total course={course} />
      </div>
      <p></p>
      <h2>{course[1].name}</h2>
      <Part part={course[1].parts[0]} />
      <Part part={course[1].parts[1]} />
      <Total2 course={course} />
    </>
  );
};

export default Content;
