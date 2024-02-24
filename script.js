/**
 * Text Color Picker
 */
// Get the color picker input element
const textColorPicker = document.getElementById('text-color-picker');

// Add event listener for change event
textColorPicker.addEventListener('input', function() {
    // Get the selected color value
    const selectedTextColor = this.value;

});


/**
 * Background Color Picker
 */
// Get the color picker input element
const bgColorPicker = document.getElementById('bg-color-picker');

// Add event listener for change event
bgColorPicker.addEventListener('input', function() {
    // Get the selected color value
    const selectedBgColor = this.value;

    // Apply the selected color to the text
    const signatureBox = document.querySelector('.signaturePanel');
    signatureBox.style.backgroundColor = selectedBgColor;
});



// Get the font size value element and buttons
const fontSizeValue = document.getElementById('font-size-value');
const fontSizeDecreaseBtn = document.getElementById('font-size-decrease');
const fontSizeIncreaseBtn = document.getElementById('font-size-increase');

// Function to decrease font size
fontSizeDecreaseBtn.addEventListener('click', function() {
    let fontSize = parseInt(fontSizeValue.textContent);
    if (fontSize > 8) { // Limiting minimum font size
        fontSize -= 2; // Decrease font size by 2px
        fontSizeValue.textContent = fontSize;
        applyFontSize(fontSize);
    }
});

// Function to increase font size
fontSizeIncreaseBtn.addEventListener('click', function() {
    let fontSize = parseInt(fontSizeValue.textContent);
    if (fontSize < 72) { // Limiting maximum font size
        fontSize += 2; // Increase font size by 2px
        fontSizeValue.textContent = fontSize;
        applyFontSize(fontSize);
    }
});

// Function to apply font size to the text
function applyFontSize(fontSize) {
    const colorPickerText = document.querySelector('.color-picker');
    colorPickerText.style.fontSize = fontSize + 'px';
}
