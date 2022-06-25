import React, { useState } from 'react'
import gorillasImage from '../../assets/gorillas.jpg'

function Gorillas() {
  const [copyText, setCopyText] = useState("Copy!");

  function copyCode() {
    var code = document.body.appendChild(document.createElement("input"));
    code.value = document.getElementById("gorillas-code").innerHTML;
    code.focus();
    code.select();
    document.execCommand("copy");
    code.parentNode.removeChild(code);
    document.getElementById("gorillas").scrollIntoView();
    setCopyText("Copied!");
  }

  return (
    <div id="gorillas" class="deal">
      <img class="cover" alt="gorillas" src={gorillasImage} />
      <h1>Gorillas</h1>
      <h2>Gorillas 15€ Discount</h2>
      <p>
        🍔 Apply the referral code, get <b>15€ discount</b>. <br />
        🍕 Completely <b>FREE!</b> <br />
        🍟 CODE: <br />
        <b>
          <span id="gorillas-code">EA550697</span>
          <button onClick={copyCode}> {copyText} </button>
        </b> <br /><br />
        * Discount is valid for orders over 30€.
      </p>
    </div>
  );
}

export default Gorillas;