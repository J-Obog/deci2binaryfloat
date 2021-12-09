const b = document.querySelector(".bitset");

for (let i = 0; i < 64; i++) {
  const div = document.createElement("div");
  div.className = `bit ${
    i == 0 ? "sign" : i >= 1 && i <= 38 ? "exponent" : "mantissa"
  }`;
  div.innerText = "1";
  b.appendChild(div);
}
