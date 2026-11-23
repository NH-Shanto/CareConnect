// login validation
function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    if (email == "" || password == "") {
        alert("Please enter both email and password.");
        return false;
    }

    if (role == "") {
        alert("Please select your role.");
        return false;
    }

    if (role == "care-seeker") {
        window.location.href = "pages/care-seeker/dashboard.html";
    } else if (role == "volunteer") {
        window.location.href = "pages/volunteer/dashboard.html";
    } else if (role == "doctor") {
        window.location.href = "pages/doctor/dashboard.html";
    } else if (role == "guardian") {
        window.location.href = "pages/guardian/dashboard.html";
    } else if (role == "provider") {
        window.location.href = "pages/provider/dashboard.html";
    } else if (role == "admin") {
        window.location.href = "pages/admin/dashboard.html";
    }

    return false;
}

// registration form validation
function validateRegister() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm_password").value;

    if (name == "" || email == "" || phone == "" || pass == "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (pass != confirmPass) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";
    return false;
}

// password reset
function resetPassword() {
    var email = document.getElementById("email").value;
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }
    alert("Password reset instructions sent to " + email);
    window.location.href = "login.html";
    return false;
}

// save profile changes
function saveProfile() {
    alert("Profile details updated successfully!");
    return false;
}

// change password
function updatePassword() {
    var newPass = document.getElementById("new_password").value;
    var confirmPass = document.getElementById("confirm_password").value;

    if (newPass == "") {
        alert("Please enter a new password.");
        return false;
    }

    if (newPass != confirmPass) {
        alert("New passwords do not match!");
        return false;
    }

    alert("Password changed successfully!");
    return false;
}
