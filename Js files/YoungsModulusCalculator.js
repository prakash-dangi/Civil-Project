document.getElementById('youngs-modulus-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var appliedForce = parseFloat(document.getElementById('applied-force').value);
    var originalLength = parseFloat(document.getElementById('original-length').value);
    var changeInLength = parseFloat(document.getElementById('change-in-length').value);

    if (!isNaN(appliedForce) && !isNaN(originalLength) && !isNaN(changeInLength) && appliedForce > 0 && originalLength > 0) {
        var youngsModulus = appliedForce / (originalLength * Math.abs(changeInLength));
        var forceType = changeInLength >= 0 ? 'Tensile Force' : 'Compressive Force';
        document.getElementById('youngs-modulus-result').value = forceType + ' | Young\'s Modulus: ' + youngsModulus + ' N/m²';
    } else {
        var errorMessage = 'Invalid input. Applied Force should be a positive value';
        if (originalLength <= 0) {
            errorMessage += ', and Original Length must be positive';
        }
        document.getElementById('youngs-modulus-result').value = errorMessage;
    }
});
