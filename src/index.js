import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

/*
  Make sure you have setup semantic-ui-react properly:
  https://react.semantic-ui.com/usage
*/

import './styles.css';

function App() {
  const [date, setDate] = useState(null);
  const [dates, setDates] = useState([]);
  const handleDateChange = (event, data) => setDate(data.value);
  const handleDatesChange = (event, data) => setDates(data.value);

  return (
    <div className="App">
      <h1>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/arthurdenner/react-semantic-ui-datepickers"
        >
          <span role="img" aria-label="calendar">
            📅
          </span>{' '}
          react-semantic-ui-datepickers
        </a>
      </h1>
      <h2>Basic datepicker</h2>
      <SemanticDatepicker onChange={handleDateChange} />

      <pre>
        Selected date:
        <br />
        {date ? date.toString() : 'None'}
      </pre>

      <h2>Range datepicker</h2>
      <SemanticDatepicker onChange={handleDatesChange} type="range" />

      <pre>
        Selected range:
        <br />
        {dates
          ? dates.map((date, index) => (
              <span key={index}>
                {date.toString()}
                <br />
              </span>
            ))
          : 'None'}
      </pre>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
