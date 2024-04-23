import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/top-cities.css';

class TopCities extends Component {
  render() {
    return (
      <div>
        <div className="top-cities-wrapper">
          <h1>Top Places of Indore</h1>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px',
              marginBottom: '20px'
            }}
          />
          <div className="top-cities-carousel-wrap">
            <CitySlider />
          </div>
          <hr
            style={{
              height: '1px',
              color: '#e7e7e7',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          />
        </div>
        <hr className="section-divide-hr" />
      </div>
    );
  }
}

class CitySlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    return (
      <Slider {...settings}>
        {topCitiesData &&
          topCitiesData.map(({ id, city, url, description, route }) => (
            <Link
              to={{ pathname: `/cities/${route}` }}
              key={id}
              className="link"
            >
              <CityCard city={city} url={url} description={description} />
            </Link>
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url
            }}
          />
          <div className="city-details">
            <div id="triangle" />
            <p>{this.props.city}</p>
            <div id="city-hidden">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const topCitiesData = [
  {
    id: 1,
    city: '56 Dukaan',
    route: 'new-york',
    description: 'Take a bite of the Big Apple',
    url:
      'https://feeds.abplive.com/onecms/images/uploaded-images/2022/05/28/e3a789299503026802289a503f5e8126_original.jpg'
  },
  {
    id: 2,
    city: 'Lotus Valley',
    route: 'new-york',
    description: "Lotus Flower park & Lake",
    url:
      'https://bansalnews.com/wp-content/uploads/2023/08/Lotus-Valley-Indore.jpg'
  },
  {
    id: 3,
    city: 'Indore Zoo',
    route: 'new-york',    description: 'All types of animals n birds',
    url:
      'https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2020/06/19/_1592558828.jpg  '
  },
  {
    id: 4,
    city: 'Rajwada Palace',
    route: 'new-york',    description: "Market Shops & center place",
    url:
      'https://www.holidify.com/images/cmsuploads/compressed/3551_20190228103219.jpg'
  },
  {
    id: 5,
    city: 'lalbagh Place',
    route: 'new-york',    description: 'For everything hunky-dory',
    url:
      'https://www.trawell.in/admin/images/upload/183831995Lalbagh.jpg'
  },
  {
    id: 6,
    city: 'Khajrana Temple',
    route: 'new-york',    description: 'An Oasis like no other',
    url:
      'https://shreeganeshkhajrana.com/wp-content/uploads/2023/07/Mask-Group-10.png'
  },
  {
    id: 7,
    city: 'Barcelona',
    route: 'new-york',    description: 'Hacer Peunte a Catalunya',
    url:
      'https://cdn-imgix.Indore.com/cities/barcelona/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 8,
    city: 'Madrid',
    route: 'new-york',    description: 'Discover the hear of Spain',
    url:
      'https://cdn-imgix.Indore.com/cities/madrid/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 9,
    city: 'Singapore',
    route: 'new-york',    description: 'The Lion City',
    url:
      'https://cdn-imgix.Indore.com/cities/singapore/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 10,
    city: 'Venice',
    route: 'new-york',    description: 'Enjoy and have fun in the City',
    url:
      'https://cdn-imgix.Indore.com/cities/venice/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 11,
    city: 'Milan',
    route: 'milan',
    description: 'Enjoy and have fun in the City',
    url:
      'https://cdn-imgix.Indore.com/cities/milan/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 12,
    city: 'Naples',
    route: 'naples',
    description: 'Enjoy and have fun in the City',
    url:
      'https://cdn-imgix.Indore.com/cities/naples/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 13,
    city: 'Budapest',
    route: 'budapest',
    description: 'Enjoy and have fun in the City',
    url:
      'https://cdn-imgix.Indore.com/cities/budapest/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 14,
    city: 'Edinburg',
    route: 'edinburg',
    description: 'Enjoy and have fun in the City',
    url:
      'https://cdn-imgix.Indore.com/cities/edinburgh/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 15,
    city: 'Florence',
    route: 'florence',
    description: 'Enjoy and have fun in the City',
    url:
      'https://cdn-imgix.Indore.com/cities/florence/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  }
];

export default TopCities;
