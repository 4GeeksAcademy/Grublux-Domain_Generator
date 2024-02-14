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
  let finalDomain = [];

  for (let x of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let d of domain) {
          var temp = x + a + n + d;
          document.getElementById("domains").innerHTML += `<li>${temp}</li>`;
        }
      }
    }
  }
  // document.getElementById("domains").innerHTML = "<p>Hello</p>";
};
