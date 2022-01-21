import React, { useState } from 'react'
import uberEatsImage from '../assets/asia.png'

function UberEats() {
  const [ copyText, setCopyText ] = useState("Copy!")
  const [ discountStatus, setDiscountStatus ] = useState('Get Your Discount!')

  function copyCode() {
    var code = document.body.appendChild(document.createElement("input"));
    code.value = document.getElementById("uber-eats-code").innerHTML;
    code.focus();
    code.select();
    document.execCommand('copy');
    code.parentNode.removeChild(code);
    // document.getElementById('uber-eats').scrollIntoView();
    setCopyText('Copied!')
  }

  const getDiscount = () => { 
    window.open("https://ubereats.com/feed?promoCode=eats-11rbfn", '_blank');
    setDiscountStatus('Enjoy Your Discount!')
  }

  return (
    <div id="uber-eats" class="deal">
      <img class="cover" alt="Uber Eats" src={uberEatsImage}/>
      <h2>Uber Eats 15€ Discount!</h2>
      <p>
        <b>SAVE 15€</b> for your first order (min. 17€) at Uber Eats <br/>
        and enjoy your <b>DELICIOUS</b> meal almost for <b>FREE!</b> <br/>

        CODE: <b id="uber-eats-code">eats-11rbfn</b> <button onClick={copyCode}>{copyText}</button> <br/><br/>

        How to apply the referral code?
        <ul>
          <li>Either enter referral code at the checkout.</li>
          <li>Or just click the button and it will handle it for you. 🙂 </li>
        </ul>
        <button onClick={getDiscount}>{discountStatus}</button>
      </p>
    </div>
  );
}

export default UberEats;