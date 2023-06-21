function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rateValue").textContent = rateval + "%";
}

document.getElementById("rate").onchange = updateRate;