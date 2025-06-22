const billAmount = document.getElementById("bill-amount");
const tipPercentage = document.getElementById("tip-percentage");
const calculateButton = document.getElementById("calculate-button");
const peopleNumber = document.getElementById("people-count");
const result = document.getElementById("result");


calculateButton.addEventListener("click", () => {
  const bill = parseFloat(billAmount.value);
  const tip = parseFloat(tipPercentage.value);
  const people = parseInt(peopleNumber.value);

  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }

  if (isNaN(tip) || tip < 0) {
    alert("Please select a valid tip percentage.");
    return;
  }

  if (isNaN(people) || people < 1) {
    alert("Number of people should be at least 1.");
    return;
  }

  const tipAmountPerPerson = ((bill * tip) / people).toFixed(2);
  const totalAmountPerPerson =( (bill + bill * tip) / people).toFixed(2);
  const totalTipAmount = (bill * tip).toFixed(2); // total tip amount for the whole bill


  // Display results inside the result div
  result.innerHTML = `
    <h2>Results:</h2>
    <p>Total Tip Amount: Rs ${totalTipAmount}</p>
    <p>Tip Amount per Person: Rs ${tipAmountPerPerson}</p>
    <p>Total Amount per Person: Rs ${totalAmountPerPerson}</p>
  `;


});