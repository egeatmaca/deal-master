import React from 'react'
import Wolt from "./deals/Wolt";
import UberEats from "./deals/UberEats";
import Gorillas from "./deals/Gorillas";
import pizzaHappy from '../assets/eating-happy.jpg'

function Home() {
  return (
    <>
      <h1 id="dealmaster">Deal Master</h1>
      <h2>
        Enjoy your <span class="discount-red">discount</span> now!
      </h2>
      <img
        id="homeImage"
        class="cover"
        alt="eating pizza happy"
        src={pizzaHappy}
      />
      <Wolt />
      <UberEats />
      <Gorillas />
    </>
  );
}

export default Home;