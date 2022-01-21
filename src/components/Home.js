import React from 'react'
import Wolt from './Wolt';
import UberEats from './UberEats';
import pizzaHappy from '../assets/eating-happy.jpg'

function Home() {
  return (
    <>
      <h1 id='dealmaster'>Deal Master</h1>
      <h2>Enjoy your <span class="discount-red">discount</span> now!</h2>
      <img id="homeImage" class="cover" alt="eating pizza happy" src={pizzaHappy} />
      <Wolt />
      <UberEats />
    </>
  );
}

export default Home;