import React from 'react';

const Total = ({ course }) => {
  var totalExercises = course[0].parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return <b>Total of {totalExercises} exercises</b>;
};

export default Total;
