const addH1 = () => {
  // create a new div element
  const h1 = document.createElement("h1");

  // set the h1's id
  h1.setAttribute("class", "name");

  // and give it some content
  const h1Text = document.createTextNode("Peter Nguyen");

  // add the text node to the newly created div
  h1.appendChild(h1Text);

  // add the newly created element and its content into the DOM
  document.body.appendChild(h1);
}

// Create and append new ul element
const addList = () => {
  const myDetailsList = document.createElement("ul");
  myDetailsList.setAttribute("id", "details");
  myDetailsList.setAttribute("class", "my-details");
  document.body.appendChild(myDetailsList);

  const myDetailsArr = [
    "<li class='detail'>&#127918;<b>Gaming</b> aficionado. OW2, DBD, and LoL are currently my main games to play with friends.</li>",
    "<li class='detail'>I love food; <b>asian food</b> is probably my favorite cuisine. Not biased at all. &#127836</li>",
    "<li class='detail'>My favorite animals are &#128008<b>cats</b> and <b>alpacas</b>.</li>",
    "<li class='detail'>I am turning <b>30</b> in 2 months &#129313;</li>"
  ]
  const liString = myDetailsArr.join(" ");
  const listElement = document.getElementById("details");
  listElement.innerHTML = liString;
}

// add clock with date object
const addClock = () => {
  const clockDiv = document.createElement("div");
  clockDiv.setAttribute("id", "clock");
  document.body.appendChild(clockDiv);
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() % 12  || 12;

    clockDiv.innerHTML = `I live in <b>Riverside</b>, California, and it's currently ${hours}:${minutes}:${seconds} here.`
  };
  setInterval(time, 500);
}

window.onload = () => {
  addH1(),
  addList(),
  addClock()
}
