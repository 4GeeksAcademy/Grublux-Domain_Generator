/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["a", "our", "my"];
  let adj = ["fancy", "big", "descriptive"];
  let noun = ["story", "jungle", "crackhouse"];
  let domain = [".com", ".io", ".net"];
  let bumble = 0;

  for (let x of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let d of domain) {
          bumble = bumble += 1;
          var temp = x + a + n + d;
          document.getElementById(
            "domains"
          ).innerHTML += `<li class="inner">${bumble}) ${temp}</li>`;
        }
      }
    }
  }
};
