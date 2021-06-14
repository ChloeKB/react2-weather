import React from "react";
import axio from "axios";

import "./App.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert("Hello test")
  }
  let apiURL = ""
  axios.get(apiURL).then(handleResponse);
  return("Hello from Weather app")
}