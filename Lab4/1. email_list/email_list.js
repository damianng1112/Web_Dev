"use strict";
const $ = id => {
    return document.querySelector(id);
};
const joinList = () => {
    const emailAddress1 = $("#email_address1").value;
    const emailAddress2 = $("#email_address2").value;
    const firstName = $("#first_name").value;
    let isValid = true;

    // validate the first entry
    if (emailAddress1 === "") { 
        $("#email_address1").nextElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        $("#email_address1").nextElementSibling.firstChild.nodeValue = "";
    } 

    // validate the second entry
    if (emailAddress2 === "") { 
        $("#email_address2").nextElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false; 
    } else if (emailAddress1 !== emailAddress2) { 
        $("#email_address2").nextElementSibling.firstChild.nodeValue = 
            "This entry must equal first entry.";
        isValid = false;
    } else {
        $("#email_address2").nextElementSibling.firstChild.nodeValue = "";
    }

    // validate the third entry  
    if (firstName === "") {
        $("#first_name").nextElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        $("#first_name").nextElementSibling.firstChild.nodeValue = "";
    }  

    // submit the form if all entries are valid
    if (isValid) {
        $("#email_form").submit(); 
    }
};

document.addEventListener("DOMContentLoaded", () => {
	$("#join_list").addEventListener("click", joinList);
    $("#email_address1").focus();
});
