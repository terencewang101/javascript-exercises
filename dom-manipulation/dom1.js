/*
const container = document.querySelector("#container");

const redPara = document.createElement("p");
redPara.setAttribute("id","redPara")
redPara.textContent = "Hey I'm red!";
redPara.style.color = "red";
container.appendChild(redPara);

const blueSubheader = document.createElement("h3");
blueSubheader.setAttribute("id","blueSubheader")
blueSubheader.textContent = "I'm a blue h3!";
blueSubheader.style.color = "blue";
container.appendChild(blueSubheader);

const extra = document.createElement("div");
extra.setAttribute("style", "background-color: pink; border-style: solid; border-color: black")
extra.setAttribute("id","extra");
container.appendChild(extra);
const extraSelect = document.querySelector("extra");
const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"
extra.appendChild(h1);
const newPara = document.createElement("p")
newPara.textContent = "ME TOO!"
extra.appendChild(newPara);


const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
*/

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);
const text = document.createTextNode(
    " — the premier source for web development knowledge.",
  );
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
sect.appendChild(linkPara);