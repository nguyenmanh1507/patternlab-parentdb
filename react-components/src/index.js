import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import LandingPageForm from './LandingPageForm';
import SelectMario from './SelectMario';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <LandingPageForm />,
  document.getElementById('landing-page-form')
);
// ReactDOM.render(
//   <SelectMario
//     name="fakeSelect"
//     options={[
//       {
//         value: 'a',
//         title: 'A'
//       },
//       {
//         value: 'b',
//         title: 'B'
//       },
//       {
//         value: 'c',
//         title: 'C'
//       }
//     ]}
//   />,
//   document.getElementById('select-mario')
);
// registerServiceWorker();
