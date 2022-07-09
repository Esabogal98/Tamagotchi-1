// Create a Tamagotchi

// Set pet name

const petName = prompt(`Pet's name`);
const h2 = document.querySelector("#name");
h2.innerText = petName;



    alert(`If you want to upgrade ${petName} you have to take care of him.`)
    

 

petDie = () => {
  alert(`Your pet over sleep and went to Heaven!`);
};

needMorePlay = () => {
  alert(`Your pet wants to play more`);
};

// Create a class
class pet {
  constructor(name, hunger, play, sleepiness, age) {
    this.name = name;
    this.hunger = hunger;
    this.play = play;
    this.sleepiness = sleepiness;
    this.age = age;
  }
}

class Tamagotchi extends pet {
  constructor(name, hunger, sleepiness, play, age) {
    super(name, hunger, sleepiness, play, age);
    this.name = name;
    this.hunger = 10;
    this.sleepiness = 0;
    this.play = 0;
    this.age = 0;
  }

  // finished constructor

  // function to eat
  feedPet() {
    this.hunger += 1;
    if (this.hunger === 2) {
      petHunger();
    }
  }

  // function to play
  playTime() {
    this.play += 2;
    if (this.play === 10) {
      needMorePlay();
    }
  }

  //   function to sleep
  sleepTime() {
    this.sleepiness += 1;
    if (this.sleepiness === 14) {
      petDie();
    }
  }

  ageUp() {
    this.age += 1;
  }
}

console.log(Tamagotchi);

// create variables  and link the value to HTML

const tamaPet = new Tamagotchi("");
const feedButton = document.querySelector("#feedMe");
const playButton = document.querySelector("#play");
const ageButton = document.querySelector("#age");
const sleepButton = document.querySelector("#sleep");
const lightButton = document.querySelector("#lights");

// feed button

feedButton.addEventListener(
  "click",
  () => {
    console.log("");
    tamaPet.feedPet();
    const feedStats = document.querySelector("#feed1");
    feedStats.innerHTML = tamaPet.hunger;

    if (this.hunger <= 2) {
      alert(`Feed your pet or he will go to heaven`);
    }
  },
  1000
);

playButton.addEventListener(
  "click",
  () => {
    console.log("");
    tamaPet.playTime();
    const playStats = document.querySelector("#play2");
    playStats.innerHTML = tamaPet.play += 2;

    if (this.play <= 12) {
      // alert(`You need to play more to upgrade your pet`);
    }
  },
  20000
);

ageButton.addEventListener(
  "click",
  () => {
    console.log("");
    tamaPet.ageUp();
    const ageStatus = document.querySelector("#age4");
    ageStatus.innerHTML = tamaPet.age;

    if (tamaPet.age > 3 && tamaPet.age <= 7) {
      console.log("change image test");
      document.querySelector("#img_to_flip").src = "moster.png";
    } else if (tamaPet.age >= 7) {
      console.log("change image test");
      alert(`I'm getting old`);
      document.querySelector("#img_to_flip").src = "Monster1.webp";
    }
  },
  10000
);

sleepButton.addEventListener(
  "click",
  () => {
    console.log("");
    tamaPet.sleepTime();
    const sleepStats = document.querySelector("#sleep3");
    sleepStats.innerHTML = tamaPet.sleepiness;

    if (tamaPet.sleepiness > 0 && tamaPet.sleepiness <= 7) {
      document.querySelector("#img_to_flip").src = "sleepMonster.png";


    } else if (tamaPet.sleepiness >= 7) {
      console.log("change image");
      document.querySelector("#img_to_flip").src="haven1.png";
    }
  },
  3000
);

// Function Lights on/off
// function darkMode () {  //get the element

//     // set the color
//     // document.body.style.backgroundImage ="NigthHouse.jpeg";

// }

// Lights On/Off

let lightsOn = true;
// let darkImage= document.body.style.backgroundImage = "url('darkMood.jpeg')";
// let lightImage= document.body.style.backgroundImage = "url('pet_house1.jpg')";
document.getElementById("lights").addEventListener("click", (event) => {
  lightsOn = !lightsOn;
  console.log("ligthsOn", lightsOn);

  if (lightsOn) {
    // document.style.backgroundImage = "url('pet_house1.jpeg')"
    document.body.style.backgroundImage = "url('pet_house1.jpg')";
    console.log(document.body.style.backgroundImage);
    // lightImage.body.style.backgroundImage  = "url('darkMood.jpeg')";
    // lightImage = darkImage
  } else {
    // darkImage.body.style.backgroundImage = "url('pet_house1.jpg')";
    // darkImage = lightImage

    document.body.style.backgroundImage = "url('darkMood.jpeg')";
    console.log(document.body.style.backgroundImage);

    // document.style.backgroundImage= "url('darkMood.jpeg')"
  }

  console.log(event);
});

// document.getElementById
// const lightOn = document.querySelector("#lights")
// lightOn.addEventListener("click", () => {
//     console.log("Is working");
//     darkMode();

// })

document.getElementById("lights").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('darkMood.jpeg')";
});
