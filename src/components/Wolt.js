import React, { useState } from 'react'
import woltImage from "../assets/wolt.jpg"

function Wolt() {
  const [ copyText, setCopyText ]  = useState('Copy!');
  
  function copyCode() {
    var code = document.body.appendChild(document.createElement("input"));
    code.value = document.getElementById("wolt-code").innerHTML;
    code.focus();
    code.select();
    document.execCommand('copy');
    code.parentNode.removeChild(code);
    document.getElementById('wolt').scrollIntoView();
    setCopyText('Copied!')
  }
  
  return (
      <div id="wolt" class="deal">
        <img class="cover" alt="wolt" src={woltImage}/>
        <h2>Wolt 15€ Discount</h2>
        <p>
        🍔 Get <b>5€ discount</b> for your <b>first three orders (x3)</b>, after applying the referral code.  <br/>
        🍕 Completely <b>FREE!</b> <br/>
        🍟 CODE: 
        <b>
            <span id="wolt-code">6R86GNR</span> 
            <button onClick={copyCode}> {copyText} </button>
        </b> 
        <br/><br/>
        How to apply the referral code? 
        <ul>
        <li> During registration: <a href="https://www.wolt.com" target="_blank" rel="noopener noreferrer">wolt.com</a> -> Sign up -> Referral Code </li>
        <li> After registration: <a href="https://www.wolt.com" target="_blank" rel="noopener noreferrer">wolt.com</a> -> Log in -> Profile -> Redeem Code </li>
        </ul>
        </p>
    </div>
  );
}

export default Wolt;