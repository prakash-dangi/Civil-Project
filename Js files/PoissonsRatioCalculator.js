// Poisson's Ratio Calculator
document.getElementById('poissons-ratio-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    var axialStrain = parseFloat(document.getElementById('axial-strain').value);
    var transverseStrain = parseFloat(document.getElementById('transverse-strain').value);

    // Input validation
    if (!isNaN(axialStrain) && !isNaN(transverseStrain)) {
        {
            // Calculate Poisson's Ratio
            var poissonRatio = -transverseStrain / axialStrain;

            // Display result
            document.getElementById('poissons-ratio-result').value = 'Poisson\'s Ratio: ' + poissonRatio.toFixed(4);
        }
    } else {
        // Handle invalid input
        document.getElementById('poissons-ratio-result').value = 'Invalid input. Please enter valid numerical values for Axial and Transverse Strain.';
    }
});
