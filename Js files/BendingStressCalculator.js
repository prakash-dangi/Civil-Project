document.getElementById('BendingStressCalculator').addEventListener('submit', function (event) {
    event.preventDefault();

    var moment = parseFloat(document.getElementById('moment').value);
    var sectionModulus = parseFloat(document.getElementById('section-modulus').value);
    var selectedUnit = document.getElementById('bending-unit-selector').value;

    if (!isNaN(moment) && !isNaN(sectionModulus)) {
        var bendingStress = moment / sectionModulus;

        var convertedStress;
        switch (selectedUnit) {
            case 'mpa':
                convertedStress = bendingStress / 1e6;
                break;
            case 'gpa':
                convertedStress = bendingStress / 1e9;
                break;
            case 'psi':
                convertedStress = bendingStress * 0.00014503773773375;
                break;
            case 'ksi':
                convertedStress = bendingStress * 0.00014503773773375 / 1000;
                break;
            default:
                convertedStress = bendingStress; // Default is Pa
        }

        var unitLabel;
        switch (selectedUnit) {
            case 'mpa':
                unitLabel = 'MPa';
                break;
            case 'gpa':
                unitLabel = 'GPa';
                break;
            case 'psi':
                unitLabel = 'psi';
                break;
            case 'ksi':
                unitLabel = 'ksi';
                break;
            default:
                unitLabel = 'Pa';
        }

        document.getElementById('bending-stress-result').value = 'Bending Stress: ' + convertedStress + ' ' + unitLabel;
    } else {
        document.getElementById('bending-stress-result').value = 'Invalid input';
    }
});

