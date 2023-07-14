let billAmount = document.querySelector("#bill-amount");
//console.log(billAmount);

let nextButton = document.querySelector("#next");
// console.log(nextButton);

let errorBill = document.getElementsByClassName("error-bill");
//console.log(errorBill[0].innerHTML);

let cashGiven = document.querySelector("#cash-given");
// console.log(cashGiven);

let cashGivenDiv = document.getElementsByClassName("fordoingCenter");
//console.log(cashGivenDiv[0].innerHTML);

let btn_2Div = document.getElementsByClassName("btn--2");
//console.log(btn_2Div);

let checkButton1 = document.getElementsByClassName("btn-modifire-1");
//console.log(checkButton1);

let clearButton2 = document.getElementsByClassName("btn-modifire-2");
//console.log(clearButton);

let errorCash = document.getElementsByClassName("error-cash");
//console.log(errorCash[0].innerHTML);

let showTwoFunc = document.querySelector(".show");
//console.log(showTwoFunc);

let showTable = document.querySelector(".show-table");
//console.log(showTable);

let notesAll = document.querySelectorAll(".notes");
//console.log(notesAll);

let cashArray = [2000, 1000, 500, 100, 50, 10, 5, 1];

nextButton.addEventListener("click", nextbuttonHandler);

function nextbuttonHandler() {
  //   console.log(billAmount.value);
  if (billAmount.value <= 0) {
    console.log("Bill less than 0");
    errorBill[0].innerText = "Bill Amount Should be greater than Zero";
    errorBill.style.marginBottom = "1.7rem";
  } else {
    cashGivenDiv[0].style.display = "block";
    btn_2Div[0].style.display = "block";
  }
}
checkButton1[0].addEventListener("click", checkButtonHandler);
function checkButtonHandler() {
  // console.log("clicked");
  if (Number(billAmount.value) > 0 && Number(cashGiven.value) > 0) {
    if (Number(cashGiven.value) > Number(billAmount.value)) {
      let remainingCash = cashGiven.value - billAmount.value;
      console.log(remainingCash);
      calculateRemainingCash(remainingCash);
      showTable.style.display = "block";
    }

    if (Number(billAmount.value) === Number(cashGiven.value)) {
      errorCash[0].innerText = "No need to be returned any amount.🥰";
    }
    if (Number(cashGiven.value) < Number(billAmount.value)) {
      console.log(typeof cashGiven);
      // console.log("Do you wanna wash plate.");
      errorCash[0].innerText = "Do you want to pay with G Pay.🥰";
    }
  } else {
    errorCash[0].innerText = "Invalid Cash given 😥";
  }
}

function calculateRemainingCash(remainingCash) {
  for (let index = 0; index < cashArray.length; index++) {
    let reminder = Math.trunc(remainingCash / cashArray[index]);
    remainingCash = remainingCash % cashArray[index];
    notesAll[index].innerText = reminder;
    // console.log("compl");
  }
}

clearButton2[0].addEventListener("click", clearHandler);

function clearHandler() {
  billAmount.value = "";
  cashGiven.value = "";
  showTwoFunc.style.display = "none";
  showTable.style.display = "none";
}
