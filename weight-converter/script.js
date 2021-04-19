document.querySelector("#output").style.visibility = "hidden";
let input = document.querySelector("#lbsInput")
input.addEventListener("input", (e => {
    document.querySelector("#output").style.visibility = "visible";
    let lbs = e.target.value;
    document.querySelector("#gramsOutput").innerHTML = (lbs / 0.0022046).toFixed(2);
    document.querySelector("#kgOutput").innerHTML = (lbs / 2.2046).toFixed(2);
    document.querySelector("#ozOutput").innerHTML = (lbs * 16).toFixed(2);

}));