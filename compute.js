function compute(){
    var principle = parseInt(document.getElementById("amount").value);
    var ratePercentage = document.getElementById("rateValue").textContent;
    var years = parseInt(document.getElementById("years").value);
    if (principle <= 0){
        alert("Enter positive value for principle");
    }else if (years <= 0){
        alert("Enter positive value for year")
    }else{
        rate = parseFloat(ratePercentage.slice(0, -1));
        var currentYear = new Date().getFullYear();
        var interest = principle * years * rate / 100;
        var amount = principle + interest;
        var finalYear = currentYear + years;
        var output = "If you deposit $ <mark>" + principle + "</mark>,<br>at an interest rate of <mark>" + ratePercentage + "</mark><br>You will receive an amount of $ <mark>" + amount + "</mark>,<br> in the year <mark>" + finalYear + "</mark>";
        document.getElementById("output").innerHTML = output;
    }
}