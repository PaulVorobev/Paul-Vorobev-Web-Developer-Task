import { showSuccessMessage, setHasSubmitted } from './showMessage.js';
import { validateEmailAddress } from './validateEmail.js';       // Paul imported this new module (for improved validation of Email address)

export function validate() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Basic form validation: check for '@' in email field and non-blank message field
        // TODO: This validation could probably be improved!
        if (validateEmailAddress(email) && message) {         // Paul changed this line for improved validation of Email address (new function is in external validateEmail.js file)
            showSuccessMessage(true);                             
        } else {
            showSuccessMessage(false);
        }
    });
}
