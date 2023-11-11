// calculator.js

function calculate() {
    // Get user inputs
    const appliedForce = parseFloat(document.getElementById("applied-force").value);
    const originalLength = parseFloat(document.getElementById("original-length").value);
    const crossSectionalArea = parseFloat(document.getElementById("cross-sectional-area").value);
    const youngsModulus = parseFloat(document.getElementById("youngs-modulus").value);
    const calculationType = document.getElementById("calculation-type").value;

    // Check for invalid inputs
    if (isNaN(appliedForce) || isNaN(originalLength) || isNaN(crossSectionalArea) || isNaN(youngsModulus)) {
        alert("Please enter valid numerical values for all input fields.");
        return;
    }

    // Calculate result based on the selected calculation type
    let result;
    if (calculationType === "deformation") {
        result = (appliedForce * originalLength) / (crossSectionalArea * youngsModulus);
    } else if (calculationType === "youngs-modulus") {
        result = (appliedForce * originalLength) / (crossSectionalArea * youngsModulus);
    }

    // Display the result
    document.getElementById("result").value = result.toFixed(2);
}
