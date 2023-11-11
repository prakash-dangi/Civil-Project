document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    var form = document.getElementById("ThermalStressCalculator");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        calculateThermalStress(); // Calculate thermal stress on form submission
    });

    // Add an input event listener to the unit selector
    var unitSelector = document.getElementById("thermal-unit-selector");
    unitSelector.addEventListener("input", function () {
        calculateThermalStress(); // Recalculate thermal stress when the unit is changed
    });
});

// Function to calculate thermal stress (replace this with your actual formula)
function calculateThermalStress() {
    // Get the input values
    var temperatureChange = parseFloat(document.getElementById("temperature-change").value);
    var thermalExpansionCoefficient = parseFloat(document.getElementById("thermal-expansion-coefficient").value);

    // Check if inputs are valid numbers
    if (isNaN(temperatureChange) || isNaN(thermalExpansionCoefficient)) {
        alert("Please enter valid numeric values for Temperature Change and Coefficient of Thermal Expansion.");
        return;
    }

    // Get the selected unit and its conversion factor
    var selectedUnit = document.getElementById("thermal-unit-selector").value;
    var conversionFactor = getConversionFactor(selectedUnit);

    // Perform the thermal stress calculation (replace this with your actual formula)
    var thermalStress = temperatureChange * thermalExpansionCoefficient * conversionFactor;

    // Display the result in the result input field
    document.getElementById("thermal-stress-result").value = thermalStress.toFixed(2) + " " + selectedUnit.toUpperCase();
}

// Function to get the conversion factor based on the selected unit
function getConversionFactor(selectedUnit) {
    // Define conversion factors for different units
    var conversionFactors = {
        pa: 1,
        kpa: 1e-3,
        mpa: 1e-6,
        gpa: 1e-9,
        psi: 0.00014503773773375,
        ksi: 1.450377377375e-7
        // Add more unit conversions as needed
    };

    // Return the conversion factor for the selected unit
    return conversionFactors[selectedUnit] || 1;
}
