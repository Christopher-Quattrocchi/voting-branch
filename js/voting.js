window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let over21msg = document.getElementById("ofAge");
    over21msg.setAttribute("class", "hidden");
    let under21msg = document.getElementById("notOfAge");
    under21msg.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 21) {
      over21msg.removeAttribute("class");
    } else {
      under21msg.removeAttribute("class");
    }
  }
}