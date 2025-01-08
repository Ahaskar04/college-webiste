import React from 'react';
import Banner from '../components/home/Banner';
import NewsTicker from '../components/home/NewsTicker';
import QuickLinks from '../components/home/QuickLinks';
import Events from '../components/home/Events';
import DirectorMessage from '../components/home/Messages/DirectorMessage';
import PrincipalMessage from '../components/home/Messages/PrincipalMessage';
import BoardOfAdvisors from '../components/home/BoardOfAdvisors';

const Home = () => {
  return (
    <>
      <Banner />
      <NewsTicker />
      <QuickLinks />
      <Events />
      <DirectorMessage />
      <PrincipalMessage />
      <BoardOfAdvisors />
    </>
  );
};

export default Home;