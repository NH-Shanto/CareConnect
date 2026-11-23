// accept volunteer task
function acceptTask(button) {
    button.innerText = "Accepted ✓";
    button.disabled = true;
    button.style.backgroundColor = "#5cb85c";
    alert("Task accepted! The care seeker and family guardian have been notified.");
}

// decline volunteer task
function declineTask(button) {
    if (confirm("Decline this request? It will be offered to other nearby volunteers.")) {
        alert("Request declined.");
    }
}

// submit visit note and complete task
function submitVisitNote() {
    alert("Task updated! Visit note saved and forwarded to Care Seeker and Family Guardian.");
    return false;
}

// save volunteer skills and hours
function saveVolunteerSkills() {
    alert("Skills profile and available hours updated successfully!");
    return false;
}
