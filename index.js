const bs = document.querySelector('.bitset');

window.onload = () => {
    for (let i = 0; i < 64; i++) {
        const div = document.createElement('div');
        let clr = i == 0 ? 'blue' : i >= 1 && i <= 11 ? 'green' : 'red';
        div.className = `text-4xl font-bold border-black bg-${clr}-200 px-1`;
        div.innerText = '0';
        bs.appendChild(div);
    }
};
