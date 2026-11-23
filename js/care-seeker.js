// emergency sos alert
function sendEmergencyAlert() {
    alert("🚨 EMERGENCY ALERT ACTIVATED!\n\nYour location and urgent SOS signal have been sent\n\nStay calm, assistance is on the way.");
}

// help request
function submitHelpRequest() {
    var title = document.getElementById("task_title").value;
    var details = document.getElementById("details").value;

    if (title == "" || details == "") {
        alert("Please fill in the title and instructions.");
        return false;
    }

    alert("Help request posted successfully! Nearby volunteers have been notified.");
    return false;
}

function toggleMedication(button) {
    if (button.innerText == "Mark Taken") {
        button.innerText = "Taken ✓";
        button.style.backgroundColor = "#5cb85c";
        alert("Medicine marked as taken!");
    } else {
        button.innerText = "Mark Taken";
        button.style.backgroundColor = "#337ab7";
        alert("Marked as pending.");
    }
}

// add medicine to schedule
function addMedication() {
    var med = document.getElementById("med_name").value;
    var dose = document.getElementById("dosage").value;

    if (med == "" || dose == "") {
        alert("Please enter medicine name and dosage.");
        return false;
    }

    alert("Medicine '" + med + "' added to your schedule!");
    return false;
}

// book doctor appointment
function bookAppointment() {
    var doc = document.getElementById("doctor").value;
    var date = document.getElementById("appointment_date").value;

    if (doc == "" || date == "") {
        alert("Please select a doctor and date.");
        return false;
    }

    alert("Appointment request sent to doctor! Status: Pending Confirmation.");
    return false;
}

// cart counter
var cartCount = 0;
function addToCart(itemName) {
    cartCount = cartCount + 1;
    var cartBadge = document.getElementById("cart-count");
    if (cartBadge) {
        cartBadge.innerText = cartCount;
    }
    alert("Added '" + itemName + "' to cart! Total items: " + cartCount);
}

// checkout meal order
function placeOrder() {
    alert("Order placed successfully! The food provider is preparing your package.");
    cartCount = 0;
    var cartBadge = document.getElementById("cart-count");
    if (cartBadge) {
        cartBadge.innerText = "0";
    }
    return false;
}
