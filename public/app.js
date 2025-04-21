document.addEventListener('DOMContentLoaded', () => {
    const passwordDisplay = document.querySelector('.relative span');
    const lengthSlider = document.querySelector('#length');
    const lengthDisplay = document.querySelector('#lengthValue');
    const generateBtn = document.querySelector('.generate');
    const copyBtn = document.querySelector('.copy-btn');
    const checkboxes = {
        uppercase: document.querySelector('#uppercase'),
        lowercase: document.querySelector('#lowercase'),
        numbers: document.querySelector('#numbers'),
        symbols: document.querySelector('#symbols')
    };

    const characters = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // Update length display
    lengthSlider.addEventListener('input', () => {
        lengthDisplay.textContent = lengthSlider.value;
    });

    // Generate password
    generateBtn.addEventListener('click', () => {
        let charset = '';
        let password = '';
        
        // Build character set based on selected options
        Object.keys(checkboxes).forEach(option => {
            if (checkboxes[option].checked) {
                charset += characters[option];
            }
        });

        // Ensure at least one option is selected
        if (charset === '') {
            alert('Please select at least one character type');
            return;
        }

        // Generate password
        const length = parseInt(lengthSlider.value);
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        passwordDisplay.textContent = password;
    });

    // Copy password
    copyBtn.addEventListener('click', async () => {
        const password = passwordDisplay.textContent;
        if (password === 'Click Generate to create password') {
            return;
        }

        try {
            await navigator.clipboard.writeText(password);
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✓';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500);
        } catch (err) {
            alert('Failed to copy password');
        }
    });
});