const moveElements = () => {
  let screenH = window.innerHeight;
  let screenW = window.innerWidth;

  for (let i = 1; i <= 5; i++) {
    document.getElementById("char" + i).style.position = "relative";
    document.getElementById("char" + i).style.margin = "auto";

    //localStorage.setItem("char" + i, characterH + character);

    $("#char" + i).animate(
      {
        left: Math.floor(Math.random() * screenW) * 0.1 + "px",
        top: Math.floor(Math.random() * (screenH - screenH * 0.1)) * 0.3 + "px",
      },
      1000,
      function () {
        $("#countdown").text(countDown());
      }
    );
  }
};

const countDown = () => {
  var counter = 5;
  var interval = setInterval(function () {
    $("#countdown").text(counter);

    if (counter == 0) {
      clearInterval(interval);
      location.reload();
    }
    counter--;
  }, 1000);
};

const gameCheck = (obj) => {
  let character = $("#" + obj.id).text();
  let characterH = localStorage.getItem("text");
  if (characterH === null) {
    characterH = "";
  }
  let check = characterSortiment(characterH, character);
  if (check) {
    localStorage.setItem("text", characterH + character);
    $("#" + obj.id).css("background-color", "green");
    if (localStorage.getItem("text") === "POSAO") {
      alert("You Won a Game, letters are perfectly matched !");
      localStorage.clear();
      location.reload();
    }
  } else {
    $("#" + obj.id).css("background-color", "red");
    alert("You lose a game, letters are not in correct order!");
    localStorage.clear();
    location.reload();
  }
};

const characterSortiment = (characterH, character) => {
  if (
    (characterH.length === 0 || characterH.length === 1) &&
    (characterH == "" || characterH == "P") &&
    character == "P"
  ) {
    return true;
  } else if (characterH.length === 1 && characterH == "P" && character == "O") {
    return true;
  } else if (
    characterH.length === 2 &&
    characterH == "PO" &&
    character == "S"
  ) {
    return true;
  } else if (
    characterH.length === 3 &&
    characterH == "POS" &&
    character == "A"
  ) {
    return true;
  } else if (
    characterH.length === 4 &&
    characterH == "POSA" &&
    character == "O"
  ) {
    return true;
  } else if (
    characterH.length === 5 &&
    characterH == "POSAO" &&
    character == "O"
  ) {
    return true;
  } else {
    return false;
  }
};

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};
