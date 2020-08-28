import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>
              <StatisticLine value={props.good} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Neutral: </td>
            <td>
              <StatisticLine value={props.neutral} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Bad: </td>
            <td>
              <StatisticLine value={props.bad} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>All: </td>
            <td>
              <StatisticLine value={props.all} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Average: </td>
            <td>
              <StatisticLine
                value={(props.good + props.bad * -1) / props.all}
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Positive (%): </td>
            <td>
              <StatisticLine value={(props.good / props.all) * 100} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = (props) => <div>{props.value}</div>;

const App = (props) => {
  // Buttonit ja niiden tila
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  return (
    <React.Fragment>
      <div>
        <h2>Give feedback</h2>
        <Button
          handleClick={() => setGood(good + 1) & setAll(all + 1)}
          text="Good"
        />
        <Button
          handleClick={() => setNeutral(neutral + 1) & setAll(all + 1)}
          text="Neutral"
        />
        <Button
          handleClick={() => setBad(bad + 1) & setAll(all + 1)}
          text="Bad"
        />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
