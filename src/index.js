import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';

import options from './data';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import './styles.css';

const TypeaheadExample = () => {
  const [selected, setSelected] = useState([]);

  return (
    <Typeahead
      id="basic-example"
      onChange={setSelected}
      options={options}
      placeholder="Choose a state..."
      selected={selected}
    />
  );
};

ReactDOM.render(<TypeaheadExample />, document.getElementById('root'));
