function myValidate() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="age"]:checked');
    let jobTitle = document.getElementById('jobTitle').value;
    let phone = document.getElementById('phone').value;


    if (firstName == "") {
        document.getElementById('fname').innerHTML = "please enter first name";
        return false;
    } else if (firstName !== "") {
        document.getElementById('fname').innerHTML = '';
    }

    if (lastName == "") {
        document.getElementById('lname').innerHTML = "please enter last name";
        return false;
    } else if (lastName !== "") {
        document.getElementById('lname').innerHTML = '';
    }

    if (email == "") {
        document.getElementById('em').innerHTML = "please enter email";
        return false;
    } else if (email !== "") {
        document.getElementById('em').innerHTML = '';
    }

    if (gender == null) {
        document.getElementById('gen').innerHTML = "please select gender";
        return false;
    }

    if (jobTitle == "") {
        document.getElementById('jobT').innerHTML = "please enter job title";
        return false;
    } else if (jobTitle !== "") {
        document.getElementById('jobT').innerHTML = '';
    }

    if (phone == "") {
        document.getElementById('phn').innerHTML = "please enter phone number";
        return false;
    } else if (phone !== "") {
        document.getElementById('phn').innerHTML = '';
    }


    /* Local storage vaalidation */
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("jobTitle", jobTitle.value);
    localStorage.setItem("gender", gender.value);
    localStorage.setItem("phone", phone.value);


    /* validation for redirect the page */
    window.location.href = "/table.html";
}


/* Validation for phone number */
function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        return false;
    }
    return true;
}


