// import { Component } from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <>
      <label className={s.label} htmlFor="input">
        Find contact by name
      </label>
      <input
        className={s.input}
        id="input"
        value={value}
        onChange={onFilter}
      ></input>
    </>
  );
};

// class Filter extends Component {
//     render() {
//         return (
//             <>
//                 <label className={s.label} htmlFor='input'>Find contact by name</label>
//                 <input className={s.input} value={ } id='input'></input>
//             </>
//         )
//     }
// }

export default Filter;
