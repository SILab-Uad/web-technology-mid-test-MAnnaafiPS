// Dont change anything in this file

import { expect } from 'chai';
import { generatePassword } from '../script.js';

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

describe('Password Generator Tests', () => {
    afterEach(function() {
        totalTests++;
        if (this.currentTest.state === 'passed') {
            passedTests++;
        } else {
            failedTests++;
        }
    });

    it('should generate a password of the specified length', () => {
        const password = generatePassword(12, {
            includeUppercase: true,
            includeLowercase: true,
            includeNumbers: true,
            includeSpecialChars: true
        });
        expect(password).to.have.lengthOf(12);
    });

    it('should contain uppercase letters if selected', () => {
        const password = generatePassword(16, {
            includeUppercase: true,
            includeLowercase: false,
            includeNumbers: false,
            includeSpecialChars: false
        });
        expect(/[A-Z]/.test(password)).to.be.true; // Check for at least one uppercase letter
    });

    it('should contain lowercase letters if selected', () => {
        const password = generatePassword(16, {
            includeUppercase: false,
            includeLowercase: true,
            includeNumbers: false,
            includeSpecialChars: false
        });
        expect(/[a-z]/.test(password)).to.be.true; // Check for at least one lowercase letter
    });

    it('should contain numbers if selected', () => {
        const password = generatePassword(16, {
            includeUppercase: false,
            includeLowercase: false,
            includeNumbers: true,
            includeSpecialChars: false
        });
        expect(/[0-9]/.test(password)).to.be.true; // Check for at least one number
    });

    it('should contain special characters if selected', () => {
        const password = generatePassword(16, {
            includeUppercase: false,
            includeLowercase: false,
            includeNumbers: false,
            includeSpecialChars: true
        });
        expect(/[!@#$%^&*()]/.test(password)).to.be.true; // Check for at least one special character
    });

    it('should throw an error if no character type is selected', () => {
        expect(() => generatePassword(12, {
            includeUppercase: false,
            includeLowercase: false,
            includeNumbers: false,
            includeSpecialChars: false
        })).to.throw("At least one character type must be selected.");
    });

    after(function() {
        console.log(`\nTotal tests: ${totalTests}`);
        console.log(`Passed: ${passedTests}`);
        console.log(`Failed: ${failedTests}`);
    });
});
