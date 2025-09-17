const Base_URL =
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0819132c52df44f6bcdf75cfb2b9eeea";
const dropdown = document.querySelectorAll(".dropdowns select");

for (const select of dropdown) {
  try {
    for (currencyCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currencyCode;
      newOption.value = currencyCode;
      select.appendChild(newOption);
      if (select.name === "from" && currencyCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currencyCode === "PKR") {
        newOption.selected = "selected";
      }
    }
  } catch (error) {
    console.log(error);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    const fromCurr = document.querySelector(".from select");
    const toCurr = document.querySelector(".to select");
    console.log(`From: ${fromCurr.value}, To: ${toCurr.value}`);
  });
}
const updateFlag = (element) => {
  const currencyCode = element.value;
  const countryCode = countryList[currencyCode];
  const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  const img = element.parentElement.querySelector("img");
  if (img) {
    img.src = newSrc;
    //   console.log(countryCode);
  }
};
const msg = document.querySelector(".msg");
const btn = document.querySelector(".btn");
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  // console.log(amountValue);
  if (amountValue === "") {
    alert("Please enter a valid amount! It cannot be empty.");
  } else if (amountValue <= 0) {
    alert("Please enter a valid amount! It must be a positive number.");
  } else if (
    amountValue.includes("+") ||
    amountValue.includes("-") ||
    amountValue.includes("*") ||
    amountValue.includes("/")
  ) {
    alert("Please enter a valid amount! It cannot contain operators.");
  }
  const fromCurr = document.querySelector(".from select").value;
  const toCurr = document.querySelector(".to select").value;
  // console.log(` ${fromCurr}: ${toCurr}`);
  const URL = ` ${Base_URL}&base=${fromCurr}&symbols=${toCurr}`; // Updated URL to include base and symbols

  // const URL = `${Base_URL}/${fromCurr.toLowerCase()}.json`;

  // console.log(URL);
  let response = await fetch(URL);
  let data = await response.json();
  // console.log(data);
  let rate = data.rates[toCurr];
  console.log(rate);
  let convertedAmount = amountValue * rate;
  msg.innerText = `${amountValue} ${fromCurr}  is = ${convertedAmount.toFixed(
    2
  )}${toCurr}`;
  // console.log(msg.innerText);

  // console.log(response);
});
