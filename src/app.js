/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generateExcuse() {
    let excuse = [];
    let who = ["El alien", "Mi conejo", "Su amigo", "Mi jirafa"];
    let action = ["se comió", "se orinó", "aplastó", "desintegró"];
    let what = ["mi tarea", "las llaves", "mi bolso"];
    let when = [
      "antes de la clase",
      "mientras comía",
      "al llegar a casa",
      "mientras estaba rezando",
      "cuando salía de casa"
    ];
    excuse =
      who[Math.floor(Math.random() * who.length)] +
      ` ` +
      action[Math.floor(Math.random() * action.length)] +
      ` ` +
      what[Math.floor(Math.random() * what.length)] +
      ` ` +
      when[Math.floor(Math.random() * when.length)];
    return excuse;
  }
  let html = (document.getElementById("excuse").innerHTML = generateExcuse());
};
