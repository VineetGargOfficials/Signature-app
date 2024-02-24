document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('signatureCanvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;
    let currentTextColor = '#000000'; // Default text color
    let currentBgColor = '#FFFFFF'; // Default background color
    let currentFontSize = 8; // Default font size
  
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
  
    document.getElementById('clearButton').addEventListener('click', clearCanvas);
    document.getElementById('saveButton').addEventListener('click', saveSignature);
    document.getElementById('text-color-picker').addEventListener('input', changeTextColor);
    document.getElementById('bg-color-picker').addEventListener('input', changeBgColor);
    document.getElementById('font-size-decrease').addEventListener('click', decreaseFontSize);
    document.getElementById('font-size-increase').addEventListener('click', increaseFontSize);
  
    function startDrawing(event) {
        isDrawing = true;
        draw(event);
    }
  
    function draw({ offsetX, offsetY }) {
        if (!isDrawing) return;
  
        context.lineWidth = currentFontSize; // Use font size as line width
        context.lineCap = 'round';
        context.strokeStyle = currentTextColor;
  
        context.lineTo(offsetX, offsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(offsetX, offsetY);
    }
  
    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
  
    function clearCanvas() {
        context.fillStyle = currentBgColor; // Set background color
        context.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with background color
    }
  
    function saveSignature() {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'signature.png';
        link.click();
    }
  
    function changeTextColor(event) {
        currentTextColor = event.target.value;
    }
  
    function changeBgColor(event) {
        currentBgColor = event.target.value;
        clearCanvas();
    }
  
    function decreaseFontSize() {
        if (currentFontSize > 6) {
            currentFontSize -= 2;
            document.getElementById('font-size-value').textContent = currentFontSize;
        }
    }
  
    function increaseFontSize() {
        if (currentFontSize < 100) {
            currentFontSize += 2;
            document.getElementById('font-size-value').textContent = currentFontSize;
        }
    }
  });
  