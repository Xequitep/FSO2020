import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  return (
    <React.Fragment>
      <div>
        <Header course={course} />
      </div>
      <>
        <Content course={course} />
      </>
    </React.Fragment>
  );
};

export default Course;
