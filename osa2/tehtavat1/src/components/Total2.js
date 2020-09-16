import React from 'react';

const Total2 = ({ course }) => {
  var totalExercises = course[1].parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return <b>Total of {totalExercises} exercises</b>;
};

export default Total2;
