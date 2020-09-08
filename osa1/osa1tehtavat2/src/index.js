import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Votes = (props) => {
  const [points, setPoints] = useState(
    Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)
  );
  const copy = [...points][props.selected];
  const max = points.indexOf(Math.max(...points));
  const copydata = update(points, {
    [props.selected]: {
      $apply: function (x) {
        return x + 1;
      },
    },
  });

  return (
    <React.Fragment>
      <div>Has {copy} votes</div>
      <Button handleClick={() => setPoints(copydata)} text="Vote" />

      <div>
        <h2>Anecdote with most votes: </h2>
        {anecdotes[max]} has {Math.max(...points)} votes
      </div>
    </React.Fragment>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  return (
    <React.Fragment>
      <div>
        <h2>Legendary one-liner</h2>
      </div>
      <div> {anecdotes[selected]}</div>
      <p></p>
      <Votes selected={selected} />
      <Button
        handleClick={() =>
          setSelected(Math.floor(Math.random() * Math.floor(6)))
        }
        text="Next anecdote"
      />
    </React.Fragment>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App />, document.getElementById('root'));
