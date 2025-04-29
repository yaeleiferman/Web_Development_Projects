const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cute-dolphin.jpg") {
    myImage.setAttribute("src", "images/corgi-puppy.jpg");
  } else {
    myImage.setAttribute("src", "images/cute-dolphin.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `I hope you like dolphins and corgis, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Now I know you like dolphins and corgis, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  