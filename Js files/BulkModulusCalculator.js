// Bulk Modulus Calculator
document.getElementById('bulk-modulus-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    var initialVolume = parseFloat(document.getElementById('initial-volume').value);
    var changeInVolume = parseFloat(document.getElementById('change-in-volume').value);
    var changeInPressure = parseFloat(document.getElementById('change-in-pressure').value);

    // Input validation
    if (!isNaN(initialVolume) && !isNaN(changeInVolume) && !isNaN(changeInPressure)) {
        // Calculate Bulk Modulus
        var bulkModulus = -(initialVolume * (changeInPressure / changeInVolume));

        // Display result
        document.getElementById('bulk-modulus-result').value = 'Bulk Modulus: ' + bulkModulus + ' N/m²';
    } else {
        // Handle invalid input
        document.getElementById('bulk-modulus-result').value = 'Invalid input. Please enter valid values for Initial Volume, Change in Volume, and Change in Pressure.';
    }
});
