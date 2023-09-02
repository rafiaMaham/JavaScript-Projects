const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomNumber, randomCode);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("colorCode").innerText = randomCode;

  navigator.clipboard.writeText(randomCode); //to copy randomCode automatically
};

//event call = runs while clicking
document.getElementById("btn").addEventListener("click", getColor);

//initial call = runs during page loading
getColor();
