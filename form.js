function myValidate() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let jobTitle = document.getElementById('jobTitle').value;
    let gender = document.querySelector('input[name="age"]:checked');
    let phone = document.getElementById('phone').value;
    let phone1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (firstName === "") {
        document.getElementById('fname').innerHTML = "please enter first name";
        return false;
    } else if (firstName !== "") {
        document.getElementById('fname').innerHTML = '';
    }

    if (lastName === "") {
        document.getElementById('lname').innerHTML = "please enter last name";
        return false;
    } else if (lastName !== "") {
        document.getElementById('lname').innerHTML = '';
    }

    if (email === "") {
        document.getElementById('em').innerHTML = "please enter email";
        return false;
    } else if (email !== "") {
        document.getElementById('em').innerHTML = '';

    }

    if (jobTitle === "") {
        document.getElementById('jobT').innerHTML = "please enter job title";
        return false;
    } else if (jobTitle !== "") {
        document.getElementById('jobT').innerHTML = '';
    }

    if (gender === null) {
        document.getElementById('gen').innerHTML = "please select gender";
        return false;
    } else if (gender !== null) {
        document.getElementById('gen').innerHTML = '';
    }

    if (phone === "") {
        document.getElementById('phn').innerHTML = "please enter phone number";
        return false;
    } else if (phone !== "") {
        document.getElementById('phn').innerHTML = '';
    }

    /* Local storage validation */
    var existingEntries = JSON.parse(localStorage.getItem('person'));
    if (existingEntries == null) {
        existingEntries = [];
    }

    let person = {
        'firstname': firstName.trim(),
        'lastname': lastName.trim(),
        'email': email,
        'jobtitle': jobTitle,
        'gender': gender.value,
        'phone': phone,
    };
    localStorage.setItem('person', JSON.stringify(person));
    existingEntries.unshift(person);

    localStorage.setItem('person', JSON.stringify(existingEntries));

    /* validation for redirect the page */
    window.location.href = "/table.html";

    /* validation for reset the page */
    document.getElementById("reset").click();
}


/* Validation for phone number */
function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        return false;
    }
    return true;
}


