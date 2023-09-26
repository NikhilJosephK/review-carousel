import { animate } from "/node_modules/motion";

let btnIncrease = document.querySelector(".btn-increase");
let btnDecrease = document.querySelector(".btn-decrease");

let array = [
  {
    id: 1,
    name: "john",
    age: "30",
    job: "IT",
  },
  {
    id: 2,
    name: "jacob",
    age: "35",
    job: "railways",
  },
  {
    id: 3,
    name: "jason",
    age: "40",
    job: "pilot",
  },
  {
    id: 4,
    name: "rebecca",
    age: "34",
    job: "content creator",
  },
];

let number = 0;

window.addEventListener("load", function () {
  if (number === 0) {
    number = 1;
  }

  render([array[0]]);

  btnDecrease.style.left = `${window.innerWidth - 250}px`;
});

window.addEventListener("resize", function () {
  btnDecrease.style.left = `${window.innerWidth - 250}px`;
});

// increase function or move slider to the right

btnIncrease.addEventListener("click", function () {
  number += 1;

  if (number === 5) {
    number = 1;
  }
  console.log(number);

  let information = array.filter((item) => {
    return number.toString().includes(item.id.toString());
  });

  render(information);
});

// decrease function or move slider to the left

btnDecrease.addEventListener("click", function () {
  number -= 1;
  if (number === -1 || number === 0) {
    number = 4;
  }

  console.log(number);

  let information = array.filter((item) => {
    return number.toString().includes(item.id.toString());
  });

  render(information);
});

// render function

function render(data) {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  data.map((item) => {
    container.innerHTML = `
       <div id="wrapper" class="wrapper">
       <h3 class="name">${item.name}</h3>
       <h4 class="age">${item.age}</h4>
       <h5 class="job">${item.job}</h5>    
        </div>
       `;
  });
}

const btns = document.querySelectorAll("button");

animate(
  btns,
  {  
    opacity : ["0","1"],
     y : ["300px", "350px"]
   }, 
   {
    duration : '3'
   }
)


animate(
  '.container',
  {
    opacity : ["0" , "1"],
    scale : [".8" , "1"]
  },
  {
    duration : "1"
  }
)




