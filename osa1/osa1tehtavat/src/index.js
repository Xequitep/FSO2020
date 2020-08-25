import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Display = (props) => <div>{props.value}</div>;

const App = (props) => {
  // Buttonit ja niiden tila
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <React.Fragment>
      <div>
        <h2>Give feedback</h2>
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      </div>
      <div>
        <h2>Statistics</h2>
        Good: <Display value={good} />
        Neutral: <Display value={neutral} />
        Bad: <Display value={bad} />
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
