import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  return (
    <React.Fragment>
      <div>
        <Header course={course} />
      </div>
      <>
        <Content course={course} />
        <Total course={course} />
      </>
    </React.Fragment>
  );
};

export default Course;
