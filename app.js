const changeBtn = document.querySelector("#changeBtn");



let head = document.querySelector("#head");


changeBtn.addEventListener("click", () => {

    let randR = Math.floor(Math.random() * 255) + 1;
    let randG = Math.floor(Math.random() * 255) + 1;
    let randB = Math.floor(Math.random() * 255) + 1;
    document.body.style.backgroundColor = `rgb(${randR},${randG},${randB})`;
    head.innerText = `RGB(${randR},    ${randG},  ${randB})`;


}
)
