document.getElementById('ShearStressCalculator').addEventListener('submit', function (event) {
    event.preventDefault();

    var shearForce = parseFloat(document.getElementById('shear-force').value);
    var crossSectionalArea = parseFloat(document.getElementById('cross-sectional-area').value);
    var selectedUnit = document.getElementById('shear-unit-selector').value;

    if (!isNaN(shearForce) && !isNaN(crossSectionalArea)) {
        var shearStress = shearForce / crossSectionalArea;

        var convertedStress;
        switch (selectedUnit) {
            case 'mpa':
                convertedStress = shearStress / 1e6;
                break;
            case 'gpa':
                convertedStress = shearStress / 1e9;
                break;
            case 'psi':
                convertedStress = shearStress * 0.00014503773773375;
                break;
            case 'ksi':
                convertedStress = shearStress * 0.00014503773773375 / 1000;
                break;
            default:
                convertedStress = shearStress; // Default is Pa
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

        document.getElementById('shear-stress-result').value = 'Shear Stress: ' + convertedStress + ' ' + unitLabel;
    } else {
        document.getElementById('shear-stress-result').value = 'Invalid input';
    }
});
