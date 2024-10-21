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

    if (charset === '') {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
};
// BONUS: Implement the copy to clipboard functionality
