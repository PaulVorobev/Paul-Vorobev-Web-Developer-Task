// Paul added this function for improved validation of Email address
// This function returns true or false based on validation success
export function validateEmailAddress(email) {
    let emailAddress;
    let index;
    let part;
    let emailFormat;

    emailAddress = email.trim(); 

    if (emailAddress.includes('@')) {

        index = emailAddress.lastIndexOf("@");        // position of "@" in email address
        part = emailAddress.substring(index + 1);     // part of email address after "@"

        // this regular expression (email format) does not check if there is at least one "." following the "@"
        emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if (emailAddress.match(emailFormat) &&       // validate email with regular expression
            part.includes('.') &&                    // check with JavaScript if there is at least one "." following the "@" 
            (part.length > 2) &&                     // and at least one character on each side of the "."
            (part.slice(0, 1) != ".") &&
            (part.slice(-1) != ".")) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}