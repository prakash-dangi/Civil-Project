// JavaScript for Elastic Moduli Calculator

function calculate() {
    // Get selected parameter
    var selectedParameter = document.getElementById('parameter-select').value;

    // Get values from input fields
    var E = parseFloat(document.getElementById('known-e').value);
    var G = parseFloat(document.getElementById('known-g').value);
    var K = parseFloat(document.getElementById('known-k').value);
    var mu = parseFloat(document.getElementById('known-mu').value);

    // Check for valid values
    var invalidValues = checkValidValues(mu, -1, 0.5, 'Poisson\'s Ratio') +
                        checkValidValues(E, 0, null, 'Elastic Modulus') +
                        checkValidValues(G, 0, null, 'Shear Modulus') +
                        checkValidValues(K, 0, null, 'Bulk Modulus');

    if (invalidValues.length > 0) {
        // Display error message for invalid values
        displayErrorMessage('Invalid input values. Check the following:\n' + invalidValues);
        return;
    }

    // Calculate the selected parameter based on known values
    var result;
    switch (selectedParameter) {
        case 'E':
            result = 2 * G * (1 + mu);
            break;
        case 'G':
            result = (E / 2) * (1 + mu);
            break;
        case 'K':
            result = (3 * K * (1 - 2 * mu)) / 9;
            break;
        case 'mu':
            result = (3 / G) + (1 / K);
            break;
        default:
            displayErrorMessage('Invalid parameter selection.');
            return;
    }

    // Display the result
    document.getElementById('result').value = result.toFixed(4);
}

// Function to check if a value is within a valid range
function checkValidValues(value, minValue, maxValue, paramName) {
    if (isNaN(value) || value < minValue || (maxValue !== null && value > maxValue)) {
        return paramName + ' is outside the valid range. Valid range: ' + minValue + ' to ' +
            (maxValue !== null ? maxValue : 'infinity') + '\n';
    }
    return '';
}

// Function to display an error message in the error message container
function displayErrorMessage(message) {
    var errorMessageContainer = document.getElementById('error-message');
    errorMessageContainer.innerText = message;

    // Clear result field
    document.getElementById('result').value = '';

    // Hide the error message after a few seconds (adjust as needed)
    setTimeout(function () {
        errorMessageContainer.innerText = '';
    }, 10000);  // 5000 milliseconds (5 seconds)
}
