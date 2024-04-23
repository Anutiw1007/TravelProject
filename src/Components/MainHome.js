import React, { Component } from 'react';
import Header from './Header';
import TopCities from './TopCities';
import IndorePicks from './Picks';
import Collections from './Collections';
import Download from './Download';
import Media from './Media';
import Footer from './footer';
import './Styles/main-home.css';

class MainHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          navigationData={HeaderNavData}
        />
        <p id="external">
          {' '}
          <span role="img" aria-label="Warn">
            👷
          </span>{' '}
          Currently Building{' '}
          <span role="img" aria-label="Warn">
            🛠💪🔧
          </span>{' '}
          56 Dukaan City{' '}
          <span role="img" aria-label="Warn">
            🌆
          </span>{' '}
          <span role="img" aria-label="Warn">
            🦇
          </span>
        </p>
        <TopCities />
        <IndorePicks pickedData={pickedData} headline={'Indore Picks'} />
        <Collections collectionsData={collectionsData} />
        <Download />
        <Media />
        <Footer />
      </div>
    );
  }
}

// Caraousel Images for Home

const backgroundImagesData = [
  {
    id: 1,
    url:
      'https://www.theredmaple.in/images/about-indore-img.jpg'
  },
  {
    id: 2,
     url:
      'https://i.ytimg.com/vi/LkkYaPbpQkg/maxresdefault.jpg'
  },
  {
    id: 3,
    url:
      'https://i.pinimg.com/originals/0d/e8/44/0de8444bddadba9ac3b0851c5f2666e1.jpg'
  }
];

// Header Navigation Data

const HeaderNavData = [
  {
    id: 1,
    name: 'Indore Picks'
  },
  {
    id: 2,
    name: 'Best Sellers'
  },
  {
    id: 3,
    name: 'Abu Dhabi City Tours'
  },
  {
    id: 4,
    name: 'Amsterdam Attractions'
  },
  {
    id: 5,
    name: 'Burj Khalifa'
  }
];

// Currently using this Data for Indore Top Picks

const pickedData = [
  {
    id: 1,
    currentPrice: 29,
    currency: '$',  
    stars: 4.6,
    ratings: 681,
    city: '56 Dukaan',
    description: 'The Famous Street Food Chowpati',
    url:
      'https://www.mappls.com/place/13254C_1626350235098_1.jpg'
  },
  {
    id: 2,
    currentPrice: 57.5,
    currency: '$',
    stars: 4.6,
    ratings: 564,
    cashback: 10,
    city: 'Rajwada palace',
    description: 'Market, City Palace, Center',
    url:
      'https://www.holidify.com/images/cmsuploads/compressed/3551_20190228103219.jpg'
  },
  {
    id: 3,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: '$',
    discount: 49,
    city: 'Lalbagh Palace',
    description: 'A Meuseum Or Historical Place',
    url:
      'https://indiaongo.in/wp-content/uploads/2017/06/lalbagh-palace-indore.jpg'
  },
  {
    id: 4,
    currentPrice: 141,
    lastPrice: 146,
    currency: 'AED',
    discount: 16,
    stars: 4.6,
    ratings: 2588,
    cashback: 5,
    city: 'Khajrana Temple',
    description: 'Lore Ganesh Temple & Worship',
    url:
      'https://shreeganeshkhajrana.com/wp-content/uploads/2023/07/Mask-Group-10.png'
  },
  {
    id: 5,
    currentPrice: 196,
    lastPrice: 206,
    currency: 'AED',
    discount: 8,
    stars: 4.6,
    ratings: 1240,
    cashback: 5,
    city: 'Pitra Parvat',
    description: 'Lord Hanuman Temple',
    url:
      'https://64.media.tumblr.com/62385f679d76c633253ef30fe13d65ef/baf6ae0d63384995-dc/s1280x1920/b2982643e33c34cdb7d361a5459444925c9185a2.jpg'
  },
  {
    id: 6,
    currentPrice: 20,
    currency: '€',
    stars: 4.6,
    ratings: 437,
    city: 'Lotus Valley Lake',
    description:
      'Lotus Lake & Sunset Point',
    url:
      'https://bansalnews.com/wp-content/uploads/2023/08/Lotus-Valley-Indore.jpg'
  },
  {
    id: 7,
    currentPrice: 31,
    lastPrice: 45,
    currency: '€',
    discount: 31,
    stars: 4.6,
    ratings: 474,
    cashback: 10,
    city: 'Indore Zoo',
    description: 'Lots of types of Animals & Birds',
    url:
      'https://images.news18.com/ibnkhabar/uploads/2023/07/3245899_HYP_0_FEATUREInShot_20230723_012332075.jpg'
  }
];

// Collection Data

const collectionsData = [
  {
    id: 1,
    description: 'City Tours',
    url:
      'https://cdn-imgix.Indore.com/category/349/image/49d50732-f94b-4027-9dfd-58891e960a96-hong-kong-city-tour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 2,
    description: 'Abu Dhabi City Tours',
    url:
      'https://cdn-imgix.Indore.com/category/152/abu-dhabi/image/daytour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 3,
    description: 'Amsterdam Attractions',
    url:
      'https://cdn-imgix.Indore.com/category/177/amsterdam/image/Amsterdam-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 4,
    description: 'Burj Khalifa',
    url:
      'https://cdn-imgix.Indore.com/category/158/dubai/image/Dubai-Khalifa.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 5,
    description: 'Museums & Art Galleries',
    url:
      'https://cdn-imgix.Indore.com/category/510/image/a2c6da57-3994-4910-97ad-abe2b9b31a65-uffizi-gallery-hallway.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 6,
    description: 'Alhambra',
    url:
      'https://cdn-imgix.Indore.com/category/1449/image/f1b8a5ab-ffa6-47a4-a50e-e96bd92b64a5-willian-justen-de-vasconcellos-499722-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 7,
    description: 'Hong Kong Attractions',
    url:
      'https://cdn-imgix.Indore.com/category/348/image/7a5e9926-9f14-45aa-b915-23c5bc9e1a17-hong-kong-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 8,
    description: 'Entrainment Shows',
    url:
      'https://cdn-imgix.Indore.com/category/49/image/9bf7c5aa-9012-4687-9ada-ecf7ba26048a-49-las-vegas-aerial-01.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 9,
    description: 'London Attractions',
    url:
      'https://cdn-imgix.Indore.com/category/168/london/image/london-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 10,
    description: 'Madrid Attractions',
    url:
      'https://cdn-imgix.Indore.com/category/201/madrid/image/Madrid-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 11,
    description: 'Last Supper',
    url:
      'https://cdn-imgix.Indore.com/category/1178/image/61c6d18d-36c0-4537-863f-efc8a0a1b24c-the-last-supper.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 12,
    description: 'Neuschwanstein',
    url:
      'https://cdn-imgix.Indore.com/category/1520/image/206de694-146f-4bc9-8fa1-d77074da8b7e-nikita-semerenko-776957-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 13,
    description: 'Pompeii',
    url:
      'https://cdn-imgix.Indore.com/category/1223/image/3f77a082-970d-43df-bc5d-7e6e301925c6-pompeii.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 14,
    description: 'Broadway Show Tickets',
    url:
      'https://cdn-imgix.Indore.com/category/24/image/66000036-0523-4859-87b7-83d628b8843c-BroadwayShowTickets.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 15,
    description: 'Weekend in Prague',
    url:
      'https://cdn-imgix.Indore.com/category/1219/image/a49bbc22-258b-48c0-93fe-c7fdf9a8c65a-city.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 16,
    description: 'Vatican',
    url:
      'https://cdn-imgix.Indore.com/category/189/image/e16239ea-0531-4a95-9c18-ced64eb08d54-nicolas-hoizey-408661-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  }
];

export default MainHome;
