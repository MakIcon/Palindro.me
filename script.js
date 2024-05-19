document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value.trim();
    
    if (inputText === '') {
        alert('Please input a value');
        return;
    }

    const cleanedText = cleanText(inputText);

    const isPalindromeResult = checkPalindrome(cleanedText);

    if (isPalindromeResult) {
        document.getElementById('result').textContent = `${inputText} is a palindrome`;
    } else {
        document.getElementById('result').textContent = `${inputText} is not a palindrome`;
    }
});

function cleanText(text) {
    return text.replace(/[^A-Za-z0-9А-Яа-я]/g, '').toLowerCase();
}

function checkPalindrome(string) {
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
