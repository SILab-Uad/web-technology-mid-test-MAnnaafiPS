// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charset = '';
    if(options.includeUppercase) charset += uppercase;
    if(options.includeLowercase) charset += lowercase;
    if(options.includeNumbers) charset += numbers;
    if(options.includeSpecialChars) charset += specialChars;

    if(charset.length === 0) return '';

    // TODO: Generate the password based on the selected criteria
    let password = '';
    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
};
// TODO: Add event listener to the button to call generatePassword and display the output

document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const options = {
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password;
});
// BONUS: Implement the copy to clipboard functionality
