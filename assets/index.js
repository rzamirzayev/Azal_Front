let toggleButton = document.querySelectorAll(".head_button");
let currencyDiv = document.querySelector(".currencyDiv");
let languageDiv = document.querySelector(".languageDiv");
let accountDiv = document.querySelector(".accountDiv");
let passangerButton = document.querySelectorAll(".passangerDiv button");
let passangerSum = document.querySelectorAll(".passanger_num");
let passangers = document.querySelector(".passangerButton p");
let passangerBtn = document.querySelector(".passangerButton");
let passangerDiv = document.querySelector(".passangerDivs");
let flightBtn = document.querySelector(".flightBtn");
let calendar = document.querySelector(".calendar");
let calendarBtn = document.querySelector(".calendar-controls");
let calendarDay = document.querySelectorAll(".dateNumber");
let calendarMonth = document.querySelector(".calendar-month-label");
let calendarYear = document.querySelector(".calendar-year-label");

toggleButton.forEach((item) => {
  item.addEventListener("click", function () {
    let div = item.nextElementSibling;
    if (div.classList.contains("active")) {
      div.classList.remove("active");
    } else {
      div.classList.add("active");
      let liItem = document.querySelectorAll(".active li");
      liItem.forEach((list) => {
        list.addEventListener("click", function () {
          item.textContent = list.textContent;
          div.classList.remove("active");
        });
      });
    }
    // document.addEventListener("click", (event) => {
    //   console.log(event);
    //   if (item.contains(event.target) && div.contains(event.target)) {
    //     div.classList.remove = "active";
    //   }
    // });
  });
});
passangerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (passangerDiv.style.display === "none") {
    passangerDiv.style.display = "block";
  } else {
    passangerDiv.style.display = "none";
  }
});

passangerButton.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (btn.classList.contains("passanger_minus")) {
      let number = parseInt(btn.nextElementSibling.textContent);

      if (number === 0) {
      } else {
        btn.nextElementSibling.textContent = number - 1;
      }
    }
    if (btn.classList.contains("passanger_plus")) {
      let number = parseInt(btn.previousElementSibling.textContent);
      btn.previousElementSibling.textContent = number + 1;
    }
    const total = Array.from(passangerSum)
      .map((p) => parseInt(p.textContent) || 0)
      .reduce((acc, curr) => acc + curr, 0);
    passangers.textContent = total;
  });
});
flightBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (calendar.style.display === "none") {
    calendar.style.display = "block";
  } else {
    calendar.style.display = "none";
  }
});
calendarBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
calendarDay.forEach((day) => {
  day.addEventListener("click", function (e) {
    e.preventDefault();
    let textMonth = calendarMonth.textContent;
    let textYear = calendarYear.textContent;

    let datetime = day.textContent + "." + textMonth + "." + textYear;
    flightBtn.textContent = datetime;
  });
});
