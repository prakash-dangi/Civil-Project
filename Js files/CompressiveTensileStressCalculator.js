// document.getElementById('CompressiveTensileStressCalculator').addEventListener('submit', function (event) {
//     event.preventDefault();
//     var force = parseFloat(document.getElementById('force').value);
//     var area = parseFloat(document.getElementById('area').value);

//     if (!isNaN(force) && !isNaN(area)) {
//         if (area > 0) {
//             var stress = force / area;
//             var stressResult = document.getElementById('stress-result');

//             if (force < 0) {
//                 stressResult.value = 'Compressive Stress: ' + stress + ' Pa';
//             } else {
//                 stressResult.value = 'Tensile Stress: ' + stress + ' Pa';
//             }
//         } else {
//             document.getElementById('stress-result').value = 'Invalid area value, area can\'t be negative or zero';
//         }
//     } else {
//         document.getElementById('stress-result').value = 'Invalid input';
//     }
// });

document.getElementById('CompressiveTensileStressCalculator').addEventListener('submit', function (event) {
    event.preventDefault();

    var force = parseFloat(document.getElementById('force').value);
    var area = parseFloat(document.getElementById('area').value);
    var selectedUnit = document.getElementById('stress-unit-selector').value;

    if (!isNaN(force) && !isNaN(area)) {
        var stress = force / area;

        var convertedStress;
        switch (selectedUnit) {
            case 'mpa':
                convertedStress = stress / 1e6;
                break;
            case 'gpa':
                convertedStress = stress / 1e9;
                break;
            case 'psi':
                convertedStress = stress * 0.00014503773773375;
                break;
            case 'ksi':
                convertedStress = stress * 0.00014503773773375 / 1000;
                break;
            default:
                convertedStress = stress; // Default is Pa
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

        document.getElementById('stress-result').value = 'Stress: ' + convertedStress + ' ' + unitLabel;
    } else {
        document.getElementById('stress-result').value = 'Invalid input';
    }
});
