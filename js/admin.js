function approveVerification(button) {
    button.innerText = "Approved ✓";
    button.disabled = true;
    button.style.backgroundColor = "#5cb85c";
    alert("User application verified and approved! The user has now been granted full platform access.");
}

function rejectVerification(button) {
    if (confirm("Are you sure you want to reject this verification?")) {
        button.innerText = "Rejected";
        button.disabled = true;
        alert("Application marked as rejected. Notice sent to applicant.");
    }
}

function toggleUserStatus(button) {
    if (confirm("Change status for this user account?")) {
        alert("User account status updated.");
    }
}

function resolveComplaint(button) {
    button.innerText = "Resolved ✓";
    button.disabled = true;
    alert("Complaint marked as resolved after review.");
}

function generateReport() {
    alert("Summary report generated for selected period!");
    return false;
}
