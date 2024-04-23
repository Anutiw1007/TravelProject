import React, { Component } from 'react';
import Routes from './CityRoutes';
// import logo from './Components/Images/Indore.png';

class App extends Component {
  state = { width: 0, height: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () =>
    this.setState({ width: window.innerWidth, height: window.innerHeight });

  render() {
    const { width } = this.state;
    const mobileTablet = width <= 1100;

    if (mobileTablet) {
      return (
        <div className="mobile-tablet">
          <img src="https://previews.123rf.com/images/ratoca/ratoca1902/ratoca190200371/124996392-indore-city-of-india-love-message.jpg" alt="Logo" />
          <p>
            Currently, we're not supporting Mobile & Tablets{' '}
            <span role="img" aria-label="Warn">
              🙏
            </span>
          </p>
        </div>
      );
    } else {
      return <Routes />;
    }
  }
}

export default App;
