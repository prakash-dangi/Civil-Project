// Shear Modulus Calculator
document.getElementById('shear-modulus-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    var shearStress = parseFloat(document.getElementById('shear-stress').value);
    var shearStrain = parseFloat(document.getElementById('shear-strain').value);

    // Input validation
    if (!isNaN(shearStress) && !isNaN(shearStrain)) {
        // Calculate Shear Modulus
        var shearModulus = shearStress / shearStrain;

        // Display result
        document.getElementById('shear-modulus-result').value = 'Shear Modulus: ' + shearModulus + ' N/m²';
    } else {
        // Handle invalid input
        document.getElementById('shear-modulus-result').value = 'Invalid input. Please enter valid values for Shear Stress and Shear Strain.';
    }
});
