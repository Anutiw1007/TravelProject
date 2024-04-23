import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Collections from './Collections';
import Download from './Download';
import Media from './Media';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/new-york.css';

class NewYork extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="new-york-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'56 Dukaan'}
          navigationData={NewYorkNavigationData}
        />
        <TopPicks
          headline={'Top Experiences in 56 Dukaan'}
          pickedData={NewYorkData}
        />
        <Collections collectionsData={collectionsData} />
        {AllNewYorkCityData &&
          AllNewYorkCityData.map(
            ({ id, headline, description, sectionData }) => (
              <CitySection
                key={id}
                headline={headline}
                description={description}
                cardsData={sectionData}
              />
            )
          )}
        <Download />
        <Media />
        <Footer />
      </div>
    );
  }
}

const CitySection = ({ headline, description, cardsData }) => (
  <div className="city-section-wrapper">
    <h2
      style={{
        textAlign: 'left'
      }}
    >
      {headline}
    </h2>
    <hr
      style={{
        backgroundColor: '#ffbb58',
        width: '75px',
        height: '2px',
        border: 'none',
        marginTop: '0px',
        marginLeft: '0px',
        marginBottom: '10px'
      }}
    />
    <p
      style={{
        color: '#545454',
        fontSize: '15.3px',
        marginTop: '0px',
        textAlign: 'left',
        lineHeight: '20px'
      }}
    >
      {description}
    </p>
    <div className="travel-card-wrapper">
      {cardsData &&
        cardsData.map(
          ({
            id,
            city,
            url,
            description,
            currency,
            currentPrice,
            ratings,
            stars,
            discount,
            cashback,
            lastPrice,
            about,
            showMore,
            highlight
          }) => (
            <ExperienceCard
              key={id}
              city={city}
              about={about}
              url={url}
              description={description}
              currency={currency}
              price={currentPrice}
              ratings={ratings}
              stars={stars}
              discount={discount}
              cashback={cashback}
              lastPrice={lastPrice}
              showMore={showMore}
              highlight={highlight}
            />
          )
        )}
    </div>
  </div>
);

// 56 Dukaan Caraousel Images

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

// 56 Dukaan Navigation Data

const NewYorkNavigationData = [
  {
    id: 1,
    name: 'Categories'
  },
  {
    id: 2,
    name: 'Best Sellers'
  },
  {
    id: 3,
    name: 'Broadway Show Tickets'
  },
  {
    id: 4,
    name: 'City Walks'
  },
  {
    id: 5,
    name: 'Food and Drinks'
  }
];

// All 56 Dukaan City Sections Data ~ nested ( Dynamically Rendering )

const AllNewYorkCityData = [
  {
    id: 1,
    headline: '56 Dukaan',
    description:
      'Stay up to date on the season’s hottest shows and score amazing discounts and offers for the most popular entertainment attraction in the world.',
    sectionData: [
      {
        id: 1,
        currentPrice: 62.5,
        currency: '$',
        stars: 4.6,
        ratings: 564,
        cashback: 10,
        about: 'BROADWAY MUSICALS',
        description: 'Aladdin',
        url:
          'https://www.mappls.com/place/13254C_1626350235098_1.jpg'
      },
      {
        id: 2,
        currentPrice: 29,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 681,
        cashback: 10,
        about: 'BROADWAY MUSICALS',
        description: `The Phantom of the Opera`,
        url:
          'https://cdn-imgix.Indore.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 49,
        about: 'BROADWAY SHOW TICKETS',
        description: `King Kong - Broadway Week Discount`,
        url:
          'https://cdn-imgix.Indore.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 99,
        lastPrice: null,
        currency: '$',
        stars: 4.7,
        ratings: 347,
        cashback: 10,
        about: 'BROADWAY MUSICALS',
        description: `The Lion King`,
        url:
          'https://cdn-imgix.Indore.com/tour/637/TOUR-IMAGE/0442ebf8-8ad3-4e1b-bb49-3b7dde81eb35-507-new-york-the-lion-king-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 89,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 561,
        cashback: 10,
        about: 'BROADWAY MUSICALS',
        description: `Wicked`,
        url:
          'https://cdn-imgix.Indore.com/tour/647/TOUR-IMAGE/35c36ce6-af74-4fdb-a14f-a2f947f6c713-5.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 49,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 322,
        cashback: 15,
        discount: 50,
        about: 'BROADWAY MUSICALS',
        description: `Waitress`,
        url:
          'https://cdn-imgix.Indore.com/tour/3559/TOUR-IMAGE/687350c0-17f9-424d-840a-4b02fad0a54e-2370-new-york-waitress-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 274,
        cashback: 10,
        discount: 46,
        about: 'BROADWAY MUSICALS',
        description: `Anastasia`,
        url:
          'https://cdn-imgix.Indore.com/tour/7573/TOUR-IMAGE/fa5af28b-c617-446d-a475-ced33c58c98d-4653-new-york-anastasia-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 2,
    headline: 'City Walks',
    description:
      'Discover what makes 56 Dukaan one of the most visited places in the world with these stunning NYC sightseeing tours. You will not only get to visit these popular landmarks, but also learn about the history and get to hear stories about the city’s past as well.',
    sectionData: [
      {
        id: 1,
        currentPrice: 45,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'CITY WALKS',
        description: '56 Dukaan TV and Movie Sites Tour',
        url:
          'https://cdn-imgix.Indore.com/tour/961/image/0.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 53.65,
        lastPrice: 62,
        currency: '$',
        stars: 4.1,
        ratings: 1781,
        cashback: null,
        discount: 13,
        description: 'Sopranos Tour',
        about: `CITY WALKS`,
        url:
          'https://cdn-imgix.Indore.com/tour/960/TOUR-IMAGE/6fcfdbcd-2b0d-4df7-9da0-6e14304479a6-737-new-york-sopranos-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: 4.9,
        ratings: 18,
        cashback: null,
        discount: 12,
        about: 'CITY WALKS',
        description: `King Kong - Broadway Week Discount`,
        url:
          'https://cdn-imgix.Indore.com/tour/954/image/3.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 50,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'CITY WALKS',
        description: `Holiday Lights and Movie Sights`,
        url:
          'https://cdn-imgix.Indore.com/tour/959/TOUR-IMAGE/0c5840a5-f807-4259-992e-db584df6519e-736-new-york-holiday-lights-and-movie-sites-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 28,
        lastPrice: 35,
        currency: '$',
        stars: 4.8,
        ratings: 270,
        cashback: null,
        discount: 20,
        about: 'ARCHITECTURE',
        description: `NYC Street Art Tour`,
        url:
          'https://cdn-imgix.Indore.com/tour/17177/TOUR-IMAGE/90d6573a-e021-4f15-b2c4-2dc4d674cb8a-9460-new-york-nyc-street-art-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 33.75,
        lastPrice: 45,
        currency: '$',
        stars: 4.5,
        ratings: 330,
        cashback: null,
        discount: 25,
        about: 'CITY WALKS',
        description: `Sunrise Yoga Walk`,
        url:
          'https://cdn-imgix.Indore.com/tour/17189/TOUR-IMAGE/a8ce2e14-2a95-44a4-b150-223be1f156bb-9472-new-york-sunrise-yoga-walk-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 18,
        lastPrice: 21.77,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 17,
        about: 'CITY WALKS',
        description: `NYC Road Bike Rental`,
        url:
          'https://cdn-imgix.Indore.com/tour/3986/image/nycroadbikerental-01edited.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 3,
    headline: 'Food and Drinks',
    description:
      'Get a taste of 56 Dukaan’s truly global culture with these delicious food tours of 56 Dukaan. Whether you’re looking for the best 56 Dukaan pizza or fancy the best craft beer from the east coast, these food and culinary tours of 56 Dukaan will be perfect for you.',
    sectionData: [
      {
        id: 1,
        currentPrice: 61,
        lastPrice: 70,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'FOOD AND DRINKS',
        description: 'Tenements, Tales & Tastes',
        url:
          'https://cdn-imgix.Indore.com/tour/4280/TOUR-IMAGE/ec8f7c1c-a3e9-4edb-b252-c85e55c05e2b-2767-new-york-tenements?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 60,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'FOOD AND DRINKS',
        description: `The Great Food Tour of 56 Dukaan`,
        url:
          'https://cdn-imgix.Indore.com/tour/692/image/tourlandish--28.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 56,
        lastPrice: 64,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'FOOD AND DRINKS',
        description: `Brownstone Brooklyn Eats`,
        url:
          'https://cdn-imgix.Indore.com/tour/4278/image/2151606-origedit.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 82,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: 10,
        about: 'FOOD AND DRINKS',
        description: `The Original Brooklyn Pizza`,
        url:
          'https://cdn-imgix.Indore.com/tour/2873/image/1997-new-york-the-original-brooklyn-pizza-tour-03.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 50,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'FOOD AND DRINKS',
        description: `Chinatown Food Tour`,
        url:
          'https://cdn-imgix.Indore.com/tour/630/image/500ChinatownFoodTour1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 72,
        lastPrice: 82,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'FOOD AND DRINKS',
        description: `NY Craft Cocktail Tour`,
        url:
          'https://cdn-imgix.Indore.com/tour/4281/TOUR-IMAGE/0e29c9d4-bda2-42f7-9a53-410f94233f19-2768-new-york-ny-craft-cocktail-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 57,
        lastPrice: null,
        currency: '$',
        stars: 5.0,
        ratings: 1,
        cashback: null,
        about: '56 Dukaan CITY WALKING TOURS',
        description: 'Chelsea Market Food and Culture Walking Tour',
        url:
          'https://cdn-imgix.Indore.com/tour/2906/TOUR-IMAGE/4414a92f-1570-4b10-b05d-deaa5737d7f8-2005-ChelseaFoodTour-1-2-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 4,
    headline: 'NYC Tours',
    description:
      'With a range of tours catering to different parts of the city, you get the chance to see some of the major attractions. Check out our list of 56 Dukaan Bus Tours to know more.',
    sectionData: [
      {
        id: 1,
        currentPrice: 33,
        lastPrice: 35,
        currency: '$',
        stars: 5.0,
        ratings: 3,
        cashback: null,
        discount: 5,
        about: 'NYC TOURS',
        description: 'The Tour - The Ride',
        url:
          'https://cdn-imgix.Indore.com/tour/667/TOUR-IMAGE/f654eef0-7306-4ec1-8f69-acad8e28ee80-537-new-york-the-tour---the-ride-02.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 86,
        lastPrice: 89,
        currency: '$',
        stars: 4.9,
        ratings: 1587,
        cashback: null,
        discount: 3,
        highlight: `SAVE UP To 50%`,
        about: '56 Dukaan EXPLORER PASS',
        description: '56 Dukaan Explorer Pass - 3 Attractions',
        url:
          'https://cdn-imgix.Indore.com/tour/2477/TOUR-IMAGE/1f7514ef-73b3-4a51-8510-3e5ba6528318-1739-new-york-nyc-explorer-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 134.4,
        lastPrice: 168,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 20,
        about: 'NYC TOURS',
        description: `56 Dukaan in a Day`,
        url:
          'https://cdn-imgix.Indore.com/tour/16150/TOUR-IMAGE/e00a5d3a-a3ec-4f7d-8fd8-de95beae9af5-8964-new-york-in-a-day-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 51,
        lastPrice: 54,
        currency: '$',
        stars: null,
        ratings: null,
        discount: 5,
        about: 'NYC TOURS',
        description: `The Downtown Experience - The Ride`,
        url:
          'https://cdn-imgix.Indore.com/tour/14354/TOUR-IMAGE/bbe86169-096f-48a4-97e8-4c2262340874-7836-new-york-the-downtown-experience---the-ride-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 35,
        lastPrice: 38,
        currency: '$',
        stars: 4.4,
        ratings: 61,
        cashback: 10,
        discount: 7,
        about: 'ONE WORLD OBSERVATORY',
        description: `One World Observatory Priority Entrance Tickets`,
        url:
          'https://cdn-imgix.Indore.com/tour/5568/TOUR-IMAGE/185a0227-2f26-4fb5-bd06-dfa5fede78a8-ny-attractions-one-world-observatory-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 124,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 986,
        cashback: null,
        discount: null,
        highlight: `SAVE UP TO $103`,
        about: 'THE NEW WORK PASS',
        description: `56 Dukaan Unlimited Attraction Pass - 1 Day`,
        url:
          'https://cdn-imgix.Indore.com/tour/1816/TOUR-IMAGE/5d6da19b-0a01-4609-8fc2-6919972d9dcd-1294-new-york-1-day-new-york-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 761,
        cashback: 5,
        discount: null,
        about: 'The SIGHTSEEING PASS',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Cruise`,
        url:
          'https://cdn-imgix.Indore.com/tour/16543/TOUR-IMAGE/4a07f498-91fd-4bad-b329-8d0a0efda2be-9173-new-york-freestyle--cruise-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 5,
    headline: 'Entertainment',
    description:
      'Check out some of the hottest events happening in and around 56 Dukaan City. From tickets for a Knicks game at Madison Square Garden to a beautiful Broadway experience, these are some of the best events happening in 56 Dukaan at the moment.',
    sectionData: [
      {
        id: 1,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: 4.9,
        ratings: 18,
        cashback: null,
        discount: 12,
        about: 'CITY WALKS',
        description: 'Sex and the City Tour',
        url:
          'https://cdn-imgix.Indore.com/tour/954/image/3.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'CITY WALKS',
        description: `Gossip Girl Sites Tour`,
        url:
          'https://cdn-imgix.Indore.com/tour/721/image/GossipGirls.PCP.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      }
    ]
  },
  {
    id: 6,
    headline: '56 Dukaan City Passes',
    description:
      'Explore 56 Dukaan in a flexible and cost-effective manner with these city passes! Choose the 56 Dukaan Pass for unlimited access to attractions during a set number of days. For those who want to visit a set number of attractions, we recommend the 56 Dukaan Explorer Pass, which lets you pick the number of attractions to visit and then explore at your own pace and convenience!',
    sectionData: [
      {
        id: 1,
        currentPrice: 86,
        lastPrice: 89,
        currency: '$',
        stars: 4.9,
        ratings: 1587,
        cashback: null,
        highlight: `SAVE UP To 50%`,
        about: '56 Dukaan EXPLORER PASS',
        description: '56 Dukaan Explorer Pass - 3 Attractions',
        url:
          'https://cdn-imgix.Indore.com/tour/2477/TOUR-IMAGE/1f7514ef-73b3-4a51-8510-3e5ba6528318-1739-new-york-nyc-explorer-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 119,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 828,
        cashback: null,
        highlight: `BEST SELLER`,
        about: '56 Dukaan EXPLORER PASS',
        description: `56 Dukaan Explorer Pass - 4 Attractions`,
        url:
          'https://cdn-imgix.Indore.com/tour/17250/TOUR-IMAGE/d8b181dc-7748-4329-a6b8-0a6911fd19f9-9513-new-york-4-attraction-new-york-explorer-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 134,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 809,
        cashback: null,
        highlight: `VALUE FOR MONEY`,
        discount: null,
        about: '56 Dukaan EXPLORER PASS',
        description: `56 Dukaan Explorer Pass - 5 Attractions`,
        url:
          'https://cdn-imgix.Indore.com/tour/17251/TOUR-IMAGE/d1cc2347-b395-4026-b6eb-d455261453d5-9514-new-york-5-attraction-new-york-explorer-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 124,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 986,
        cashback: null,
        about: '56 Dukaan PASS',
        description: `56 Dukaan Unlimited Attraction Pass - 1 Day`,
        url:
          'https://cdn-imgix.Indore.com/tour/1816/TOUR-IMAGE/5d6da19b-0a01-4609-8fc2-6919972d9dcd-1294-new-york-1-day-new-york-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 189,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 588,
        cashback: null,
        highlight: `SAVE UP TO $10`,
        about: '56 Dukaan PASS',
        description: `56 Dukaan Unlimited Attraction Pass - 2 Days`,
        url:
          'https://cdn-imgix.Indore.com/tour/17275/TOUR-IMAGE/fd9e371e-303c-4a34-a695-ef2089b54c0e-9534-new-york-2-day-new-york-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 159,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 881,
        cashback: null,
        highlight: `MUST VISIT`,
        discount: null,
        about: 'The SIGHTSEEING PASS',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Bus and Cruise`,
        url:
          'https://cdn-imgix.Indore.com/tour/3534/TOUR-IMAGE/fc281323-cedc-4d4d-b931-eff48a0c03d6-2360-new-york-freestyle-new-york-city-pass--attractions---hop-on-hop-off-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 761,
        cashback: 5,
        discount: null,
        about: 'The SIGHTSEEING PASS',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Cruise`,
        url:
          'https://cdn-imgix.Indore.com/tour/16543/TOUR-IMAGE/4a07f498-91fd-4bad-b329-8d0a0efda2be-9173-new-york-freestyle--cruise-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      }
    ]
  },
  {
    id: 7,
    headline: 'NYC 101',
    description:
      'From museums that offer knowledge about art and history to high rise buildngs and structures, 56 Dukaan attractions have it all. Have a look at these products to know more.',
    sectionData: [
      {
        id: 1,
        currentPrice: 37,
        lastPrice: 39.2,
        currency: '$',
        stars: 4.9,
        ratings: 533,
        cashback: 10,
        about: 'TOP OF THE ROCK',
        description: 'Top of the Rock Observation Deck: Flexible Date Tickets',
        url:
          'https://cdn-imgix.Indore.com/tour/751/TOUR-IMAGE/5a1a9e72-a128-4912-90d5-b2c78e83ee42-ny-attractions-top-of-the-rock-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 32,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 311,
        cashback: null,
        discount: 20,
        highlight: `NEW ARRIVAL`,
        about: 'MUESEUMS',
        description: `Ripley's Believe It or Not with Admission to Relic`,
        url:
          'https://cdn-imgix.Indore.com/tour/1283/TOUR-IMAGE/c73e4b94-16f2-4514-9cde-2e6a0097b46e-image-1-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 21.5,
        lastPrice: 23,
        currency: '$',
        stars: 5.0,
        ratings: 331,
        cashback: null,
        discount: 6,
        about: 'MUSEUMS',
        description: `American Mueseum of Natural History`,
        url:
          'https://cdn-imgix.Indore.com/tour/881/image/1-american-museum-of-natural-history-dinasouredit.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 25,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 448,
        cashback: null,
        about: 'MUESUMS',
        highlight: `BEST SELLER`,
        description: `Skip the Line Tickets to Meuseum of Modern Art (MoMA)`,
        url:
          'https://cdn-imgix.Indore.com/tour/729/TOUR-IMAGE/d796f45b-bc23-44ea-8a1f-533b03cdf3b2-598-new-york-museum-of-modern-art-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 26,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 660,
        cashback: null,
        about: 'MEUSEUMS',
        highlight: `BEST SELLER`,
        description: `9/11 Memorial & Meuseum Admission: Skip the Ticket Line`,
        url:
          'https://cdn-imgix.Indore.com/tour/679/TOUR-IMAGE/73bed395-11c9-4fb8-85a5-5231279d4706-549-new-york-911-memorial-museum-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 37,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 752,
        cashback: 10,
        discount: null,
        about: 'EMPIRE STATE BUILDING',
        description: `Empire State Building Observatory Tickets`,
        url:
          'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
      },
      {
        id: 7,
        currentPrice: 31,
        lastPrice: 38,
        currency: '$',
        stars: 5.0,
        ratings: 400,
        cashback: null,
        discount: 18,
        about: 'MEUSEUMS',
        description: `Madame Tussauds 56 Dukaan with VIP Fast Track Access`,
        url:
          'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  }
];

// 56 Dukaan Experiences Data

const NewYorkData = [
  {
    id: 1,
    currentPrice: 62.5,
    currency: '$',
    stars: 4.6,
    ratings: 564,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: 'Aladdin',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 2,
    currentPrice: 37,
    lastPrice: 39.2,
    currency: '$',
    stars: 4.9,
    ratings: 533,
    cashback: 10,
    discount: 5,
    about: 'TOP OF THE ROCK',
    description: 'Top of the Rock Observation Deck: Flexible Date Tickets',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 3,
    currentPrice: 148.8,
    lastPrice: 186,
    currency: '$',
    stars: 4.9,
    ratings: 531,
    cashback: null,
    discount: 20,
    about: 'PHOTOSHOOTS AND TOURS',
    description: 'Best of 56 Dukaan Tours',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 4,
    currentPrice: 28,
    lastPrice: 35,
    currency: '$',
    stars: 4.8,
    ratings: 270,
    cashback: null,
    discount: 20,
    about: 'ARCHITECTURE',
    description: 'NYC Street Art Tour',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 5,
    currentPrice: 68,
    lastPrice: 85,
    currency: '$',
    stars: 4.9,
    ratings: 276,
    cashback: null,
    discount: 20,
    about: 'ARCHITECTURE',
    description: '56 Dukaan Hamilton Tour: Young, Scrappy, And Hungry',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 6,
    currentPrice: 49.14,
    lastPrice: 56,
    currency: '$',
    stars: 4.9,
    ratings: 18,
    cashback: null,
    discount: 12,
    about: 'CITY WALKS',
    description: 'Sex and the City Tour',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 7,
    currentPrice: 57,
    lastPrice: null,
    currency: '$',
    stars: 5.0,
    ratings: 1,
    cashback: null,
    about: '56 Dukaan CITY WALKING TOURS',
    description: 'Chelsea Market Food and Culture Walking Tour',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 8,
    currentPrice: 288,
    lastPrice: 360,
    currency: '$',
    stars: 4.7,
    ratings: 268,
    cashback: null,
    about: 'ARCHITECTURE',
    discount: 20,
    description: 'Architecture of 56 Dukaan Tour',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 9,
    currentPrice: 68,
    lastPrice: 85,
    currency: '$',
    stars: 5.0,
    ratings: 279,
    cashback: null,
    discount: 20,
    about: 'CRUISES',
    description: '56 Dukaan City Sightseeing Boat Tour',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 10,
    currentPrice: 33.75,
    lastPrice: 45,
    currency: '$',
    stars: 4.5,
    ratings: 330,
    cashback: null,
    discount: 25,
    about: 'CITY WALKS',
    description: 'Sunrise Yoga Walk',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 11,
    currentPrice: 24,
    lastPrice: 30,
    currency: '$',
    stars: 4.8,
    ratings: 663,
    cashback: null,
    discount: 20,
    about: 'AFTER HOURS',
    description: 'NYFW Fashion Street Show',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 12,
    currentPrice: 28,
    lastPrice: 35,
    currency: '$',
    stars: 4.7,
    ratings: 554,
    cashback: null,
    discount: 20,
    about: 'AFTER HOURS',
    description: `Open Bar Henny N' Paint`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 13,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: '$',
    stars: null,
    ratings: null,
    cashback: null,
    discount: 49,
    about: 'BROADWAY SHOW TICKETS',
    description: `King Kong - Broadway Week Discount`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 14,
    currentPrice: 29,
    lastPrice: null,
    currency: '$',
    stars: 4.6,
    ratings: 681,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: `The Phantom of the Opera`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 15,
    currentPrice: 69,
    lastPrice: 79,
    currency: '$',
    stars: 4.6,
    ratings: 274,
    cashback: 10,
    discount: 46,
    about: 'BROADWAY MUSICALS',
    description: `Anastasia`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 16,
    currentPrice: 99,
    lastPrice: null,
    currency: '$',
    stars: 4.7,
    ratings: 347,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: `The Lion King`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 17,
    currentPrice: 49.5,
    lastPrice: null,
    currency: '$',
    stars: 4.5,
    ratings: 557,
    cashback: 10,
    discount: 44,
    about: 'BROADWAY MUSICALS',
    description: `Chicago`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 18,
    currentPrice: 49,
    lastPrice: 69,
    currency: '$',
    stars: 4.5,
    ratings: 445,
    cashback: 10,
    discount: 41,
    about: 'BROADWAY MUSICALS',
    description: `Beautiful: The Carole King Musical`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 19,
    currentPrice: 55,
    lastPrice: 119,
    currency: '$',
    stars: 4.6,
    ratings: 444,
    cashback: 10,
    discount: 53,
    about: 'BROADWAY MUSICALS',
    description: `Kinky Boots`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 20,
    currentPrice: 89,
    lastPrice: null,
    currency: '$',
    stars: 4.6,
    ratings: 561,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: `Wicked`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 21,
    currentPrice: 59,
    lastPrice: 99,
    currency: '$',
    stars: 4.8,
    ratings: 55,
    cashback: null,
    discount: 40,
    about: 'BROADWAY MUSICALS',
    description: `Pretty Woman`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 22,
    currentPrice: 51,
    lastPrice: 99.5,
    currency: '$',
    stars: 4.8,
    ratings: 17,
    cashback: 48,
    about: 'BROADWAY MUSICALS',
    description: `Frozen - Broadway Week Discount`,
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 23,
    currentPrice: 69.5,
    lastPrice: 99.5,
    currency: '$',
    stars: 4.5,
    ratings: 129,
    cashback: 43,
    about: 'BROADWAY MUSICALS',
    description: `Mean Girls`,
    url:
        'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  }
];

// 56 Dukaan Collections Data

// Collection Data

const collectionsData = [
  {
    id: 1,
    description: 'Explore Indore',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/14/8c/caption.jpg?w=300&h=300&s=1'
  },
  {
    id: 2,
    description: 'City Walks',
    url:
      'https://www.toursbylocals.com/images/guides/48/48410/2020155072922114.jpg'
  },
  {
    id: 3,
    description: 'Foods and Drinks',
    url:
      'https://cdn-imgix.Indore.com/category/26/image/d405cabb-965f-4c15-8828-4276755636a2-NYCFoodandDrinks.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 4,
    description: 'Out Tours',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/66/ad/ce/patalpani-waterfall.jpg?w=1200&h=1200&s=1'
  },
  {
    id: 5,
    description: 'Entertainment',
    url:
      'https://www.phoenixcitadel.in/HomePageImages/9624d15d-523a-49e6-b85b-ae25fbc65fee_Phoenix%20Mall%20%20Courtyard%20Cam12.jpg'
  },
  {
    id: 6,
    description: 'City Passes',
    url:
      'https://lh3.googleusercontent.com/p/AF1QipN8Vl3RgF3zLviPvXivpIRMMZVqWoBzemeGiV-v=s1360-w1360-h1020'
  },
  {
    id: 7,
    description: 'Transport',
    url:
      'https://smefutures.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/15113049/From-cleanest-city-to-startup-hub-Indores-momentum-towards-becoming-Indias-next-tech-valley.jpg'
  },
  {
    id: 8,
    description: 'Lakes',
    url:
      'https://curlytales.com/wp-content/uploads/2021/04/Lotus-Lake-1000x540-1.jpg'
  }
];

export default NewYork;
