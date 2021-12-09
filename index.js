window.onload = () => {
  const bs = document.querySelector(".bitset");

  for (let i = 0; i < 64; i++) {
    const div = document.createElement("div");
    div.className = `text-4xl font-bold border border-gray-300 bg-red-100 px-0.45`;
    div.innerText = "0";
    bs.appendChild(div);
  }
};
