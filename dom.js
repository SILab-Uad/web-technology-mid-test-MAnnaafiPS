    // Dont change anything in this file
    import { generatePassword } from './script.js';
    document.getElementById('generateBtn').addEventListener('click', () => {
        const length = parseInt(document.getElementById('length').value, 10);
        const options = {
            includeUppercase: document.getElementById('includeUppercase').checked,
            includeLowercase: document.getElementById('includeLowercase').checked,
            includeNumbers: document.getElementById('includeNumbers').checked,
            includeSpecialChars: document.getElementById('includeSpecialChars').checked,
        };
    
        try {
            const password = generatePassword(length, options);
            document.getElementById('passwordOutput').value = password; 
        } catch (error) {
            alert(error.message); // Show the error message in an alert
        }
    });
    
    // Copy to Clipboard functionality
    document.getElementById('copyBtn').addEventListener('click', () => {
        const passwordOutput = document.getElementById('passwordOutput').value;
        if (passwordOutput) {
            navigator.clipboard.writeText(passwordOutput).then(() => {
                alert('Password copied to clipboard!');
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        } else {
            alert('No password to copy!');
        }
    });