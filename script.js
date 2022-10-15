"use strict";

//1.Need to retrieve the value of which button is clicked.
// const ratings = document.querySelector(".rating-container");
// const ratingArr = Array.from(ratings.children);
const ratingBtn = document.querySelectorAll(".rating--value");
const submitBtn = document.querySelector(".submit-btn");
const card = document.querySelector(".card-section");
const ratingCard = document.querySelector(".rating--state");
const thankYouCard = document.querySelector(".thank-you--state");
let rating = document.querySelector(".rating");
let ratingVal = 0;

ratingBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = " hsl(217, 12%, 63%)";
    btn.style.color = "#fff";
    ratingVal = index + 1;
    // console.log(ratingVal, "clicked");
  });
});

//2. Using this index modify the number in thank-you--state.

//3. Upon clicking submit button we need to change the state.
submitBtn.addEventListener("click", () => {
  ratingCard.style.display = "none";
  rating.textContent = ratingVal;
});
