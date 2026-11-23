function acceptDoctorAppointment(button) {
    button.innerText = "Confirmed ✓";
    button.disabled = true;
    button.style.backgroundColor = "#5cb85c";
    alert("Appointment confirmed! Notification sent to the patient and guardian.");
}


function declineDoctorAppointment(button) {
    if (confirm("Are you sure you want to decline this consultation request?")) {
        button.innerText = "Declined";
        button.disabled = true;
        alert("Appointment declined.");
    }
}


function issuePrescription() {
    var patient = document.getElementById("patient_name").value;
    var med = document.getElementById("prescribed_med").value;

    if (patient == "" || med == "") {
        alert("Please enter patient name and prescribed medicine.");
        return false;
    }

    alert("Digital prescription issued for " + patient + "!\nIt has been automatically synced to the patient's daily medicine schedule.");
    return false;
}


function saveHealthNotes() {
    var patient = document.getElementById("note_patient").value;
    if (patient == "") {
        alert("Please specify the patient name.");
        return false;
    }

    alert("Health record and checkup notes saved for " + patient + "!");
    return false;
}
