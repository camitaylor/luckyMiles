function toFeet() {
    document.getElementById("feetValue").value = document.getElementById("milesValue").value * 5280;
}
function toMiles() {
    document.getElementById("milesValue").value = document.getElementById("feetValue").value / 5280;
    if (document.getElementById("feetValue").value =="777") {
        document.getElementById("message").innerHTML = "LUCKY!"
    }
    //keeps LUCKY frpom continuous display
    else {
        document.getElementById("message").innerHTML = ""
    }
}