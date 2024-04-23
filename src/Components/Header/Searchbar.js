import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Pitra parvat', label: 'Pitra parvat' },
  { value: '56 Dukan', label: '56 Dukan' },
  { value: 'Lalbagh', label: 'Lalbagh' },
  { value: 'Krishpura Chhatris', label: 'Krishpura Chhatris' },
  { value: 'Sarafa Chopati', label: 'Sarafa Chopati' },
  { value: 'Meghdoot Upvan', label: 'Meghdoot Upvan' },
  { value: 'Lotus Valley', label: 'Lotus Valley' },
  { value: 'Rajwada palace', label: 'Rajwada palace' },
  { value: 'Khajrana Ganesh Temple', label: 'Khajrana Ganesh Temple' },
  { value: 'Annapurna Temple', label: 'Annapurna Temple' },
  { value: 'Vijay Nagar', label: 'Vijay Nagar' },
  { value: 'Bilawali Lake', label: 'Bilawali Lakes' },
  { value: 'MG Road', label: 'MG Road' },
  { value: 'Gandhi Hall', label: 'Gandhi Hall' },
  { value: 'Residency Area', label: 'Residency Area' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    marginTop: '10px',
    marginLeft: '30px',
    fontSize: '14px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

class Searchbar extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="search-bar">
        <div className="select-city-large">
          <div className="select-div">
            <Select
              styles={customStyles}
              placeholder="Select City"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="select-experience-large" />
        <button id="go">Let's Go</button>
      </div>
    );
  }
}

export default Searchbar;
