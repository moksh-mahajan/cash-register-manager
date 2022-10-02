const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const messageBox = document.querySelector("#message-box");

checkButton.addEventListener("click", checkHandler);

function checkHandler() {
  hideMessage();

  const bill = Number(billAmount.value);
  const cash = Number(cashGiven.value);

  if (!bill || !cash) {
    showMessage("Please enter both the fields!");
  } else if (bill < 0 || cash < 0) {
    showMessage("Bill or cash values cannot be negative");
  } else if (bill > cash) {
    showMessage("Do you wanna wash plates?");
  } else {
    const amountToBeReturned = cash - bill;
    calculateChange(amountToBeReturned);
  }
}

function calculateChange(amountToBeReturned) {
  const notes = [2000, 500, 100, 20, 10, 5, 1];

  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
    noOfNotes[i].innerText = numberOfNotes;
    amountToBeReturned = amountToBeReturned - numberOfNotes * notes[i];
  }
}

function showMessage(message) {
  messageBox.innerText = message;
}

function hideMessage() {
  messageBox.innerText = "";
}
