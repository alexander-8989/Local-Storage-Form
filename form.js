function myValidate() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let jobTitle = document.getElementById('jobTitle').value;
    let gender = document.querySelector('input[name="age"]:checked');
    let phone = document.getElementById('phone').value;

    if (firstName === "") {
        document.getElementById('fname').innerHTML = "please enter first name";
        return false;
    } else if (firstName !== "") {
        document.getElementById('fname').innerHTML = '';
    }

    if (lastName === "") {
        document.getElementById('lname').innerHTML = " ";
    } else if (lastName !== "") {
        document.getElementById('lname').innerHTML = '';
    }

    if (email === "") {
        document.getElementById('em').innerHTML = "please enter email";
        return false;
    } else if (email !== "") {
        document.getElementById('em').innerHTML = '';
    }

    emailResult = validateEmail(email);
    if (emailResult) {
    } else {
        document.getElementById('em').innerHTML = 'Invalid email';
        return false;
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

    phoneResult = isValid(phone);
    if (phoneResult) {
    } else {
        document.getElementById('phn').innerHTML = 'Invalid Phone number';
        return false;
    }


    /* Local storage validation */
    let person = {
        'firstname': firstName.trim(),
        'lastname': lastName.trim(),
        'email': email,
        'jobtitle': jobTitle,
        'gender': gender.value,
        'phone': phone,
    };

    let existingEntries = JSON.parse(localStorage.getItem('person'));
    if (existingEntries == null) {
        existingEntries = [];
    }

    localStorage.setItem('person', JSON.stringify(person));
    existingEntries.unshift(person);
    localStorage.setItem('person', JSON.stringify(existingEntries));

    /* validation for redirect the page */
    window.location.href = "/table.html";

    /* validation for reset the page */
    document.getElementById("reset").click();


}


/* function for email Regex */
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


/* function for phone regex*/
function isValid(p) {
    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = p.replace(/\D/g, "");
    return phoneRe.test(digits);
}


/* function for removing space between words */
function removeSpaces(string) {
    return string.replace(/  +/g, ' ');
}


/* Validation for Name */
function allow_alphabets(element) {
    let textInput = element.value;
    textInput = textInput.replace(/[^A-Za-z ]*$/gm, "");
    element.value = textInput;
}


/* Validation for phone number */
function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        return false;
    }
    return true;
}

