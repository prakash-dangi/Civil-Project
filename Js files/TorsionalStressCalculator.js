// document.getElementById('TorsionalStressCalculator').addEventListener('submit', function (event) {
//     event.preventDefault();
//     var torque = parseFloat(document.getElementById('torque').value);
//     var polarMoment = parseFloat(document.getElementById('polar-moment').value);

//     if (!isNaN(torque) && !isNaN(polarMoment)) {
//         var torsionalStress = torque / polarMoment;
//         document.getElementById('torsional-stress-result').value = 'Torsional Stress: ' + torsionalStress + ' Pa';
//     } else {
//         document.getElementById('torsional-stress-result').value = 'Invalid input';
//     }
// });

// document.getElementById('TorsionalStressCalculator').addEventListener('submit', function (event) {
//     event.preventDefault();
//     var torque = parseFloat(document.getElementById('torque').value);
//     var polarMoment = parseFloat(document.getElementById('polar-moment').value);
//     var selectedUnit = document.getElementById('torsional-stress-unit').value; // Get the selected unit

//     if (!isNaN(torque) && !isNaN(polarMoment)) {
//         var torsionalStress = torque / polarMoment;

//         // Convert to the appropriate unit based on the selected unit
//         var convertedStress;
//         switch (selectedUnit) {
//             case 'mpa':
//                 convertedStress = torsionalStress / 1e6; // Convert to MPa
//                 break;
//             case 'gpa':
//                 convertedStress = torsionalStress / 1e9; // Convert to GPa
//                 break;
//             case 'psi':
//                 convertedStress = torsionalStress * 0.00014503773773375; // Convert to psi
//                 break;
//             case 'ksi':
//                 convertedStress = torsionalStress * 0.00014503773773375 / 1000; // Convert to ksi
//                 break;
//             default:
//                 convertedStress = torsionalStress; // Default is Pa
//         }

//         // Set the unit label based on the selected unit
//         var unitLabel;
//         switch (selectedUnit) {
//             case 'mpa':
//                 unitLabel = 'MPa';
//                 break;
//             case 'gpa':
//                 unitLabel = 'GPa';
//                 break;
//             case 'psi':
//                 unitLabel = 'psi';
//                 break;
//             case 'ksi':
//                 unitLabel = 'ksi';
//                 break;
//             default:
//                 unitLabel = 'Pa'; // Default to Pa
//         }

//         document.getElementById('torsional-stress-result').value = 'Torsional Stress: ' + convertedStress + ' ' + unitLabel;
//     } else {
//         document.getElementById('torsional-stress-result').value = 'Invalid input';
//     }
// });


// document.getElementById('TorsionalStressCalculator').addEventListener('submit', function (event) {
//     event.preventDefault();

//     var torque = parseFloat(document.getElementById('torque').value);
//     var polarMoment = parseFloat(document.getElementById('polar-moment').value);
//     var selectedUnit = document.getElementById('torsional-stress-unit').value; // Get the selected unit

//     if (!isNaN(torque) && !isNaN(polarMoment)) {
//         var torsionalStress = torque / polarMoment;

//         // Convert to the appropriate unit based on the selected unit
//         var convertedStress;
//         switch (selectedUnit) {
//             case 'mpa':
//                 convertedStress = torsionalStress / 1e6; // Convert to MPa
//                 break;
//             case 'gpa':
//                 convertedStress = torsionalStress / 1e9; // Convert to GPa
//                 break;
//             case 'psi':
//                 convertedStress = torsionalStress * 0.00014503773773375; // Convert to psi
//                 break;
//             case 'ksi':
//                 convertedStress = torsionalStress * 0.00014503773773375 / 1000; // Convert to ksi
//                 break;
//             default:
//                 convertedStress = torsionalStress; // Default is Pa
//         }

//         // Set the unit label based on the selected unit
//         var unitLabel;
//         switch (selectedUnit) {
//             case 'mpa':
//                 unitLabel = 'MPa';
//                 break;
//             case 'gpa':
//                 unitLabel = 'GPa';
//                 break;
//             case 'psi':
//                 unitLabel = 'psi';
//                 break;
//             case 'ksi':
//                 unitLabel = 'ksi';
//                 break;
//             default:
//                 unitLabel = 'Pa'; // Default to Pa
//         }

//         document.getElementById('torsional-stress-result').value = 'Torsional Stress: ' + convertedStress + ' ' + unitLabel;
//     } else {
//         document.getElementById('torsional-stress-result').value = 'Invalid input';
//     }
// });

// document.getElementById('TorsionalStressCalculator').addEventListener('submit', function (event) {
//     event.preventDefault();

//     var torque = parseFloat(document.getElementById('torque').value);
//     var polarMoment = parseFloat(document.getElementById('polar-moment').value);
//     var selectedUnit = document.getElementById('torsional-stress-unit').value;

//     if (!isNaN(torque) && !isNaN(polarMoment)) {
//         var torsionalStress = torque / polarMoment;

//         // Convert to the appropriate unit based on the selected unit
//         var convertedStress;
//         switch (selectedUnit) {
//             case 'mpa':
//                 convertedStress = torsionalStress / 1e6;
//                 break;
//             case 'gpa':
//                 convertedStress = torsionalStress / 1e9;
//                 break;
//             case 'psi':
//                 convertedStress = torsionalStress * 0.00014503773773375;
//                 break;
//             case 'ksi':
//                 convertedStress = torsionalStress * 0.00014503773773375 / 1000;
//                 break;
//             default:
//                 convertedStress = torsionalStress;
//         }

//         // Set the unit label based on the selected unit
//         var unitLabel;
//         switch (selectedUnit) {
//             case 'mpa':
//                 unitLabel = 'MPa';
//                 break;
//             case 'gpa':
//                 unitLabel = 'GPa';
//                 break;
//             case 'psi':
//                 unitLabel = 'psi';
//                 break;
//             case 'ksi':
//                 unitLabel = 'ksi';
//                 break;
//             default:
//                 unitLabel = 'Pa';
//         }

//         document.getElementById('torsional-stress-result').value = 'Torsional Stress: ' + convertedStress + ' ' + unitLabel;
//     } else {
//         document.getElementById('torsional-stress-result').value = 'Invalid input';
//     }
// });

document.getElementById('TorsionalStressCalculator').addEventListener('submit', function (event) {
    event.preventDefault();

    var torque = parseFloat(document.getElementById('torque').value);
    var polarMoment = parseFloat(document.getElementById('polar-moment').value);
    var selectedUnit = document.getElementById('torsional-unit-selector').value;

    if (!isNaN(torque) && !isNaN(polarMoment)) {
        var torsionalStress = torque / polarMoment;

        var convertedStress;
        switch (selectedUnit) {
            case 'mpa':
                convertedStress = torsionalStress / 1e6;
                break;
            case 'gpa':
                convertedStress = torsionalStress / 1e9;
                break;
            case 'psi':
                convertedStress = torsionalStress * 0.00014503773773375;
                break;
            case 'ksi':
                convertedStress = torsionalStress * 0.00014503773773375 / 1000;
                break;
            default:
                convertedStress = torsionalStress; // Default is Pa
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

        document.getElementById('torsional-stress-result').value = 'Torsional Stress: ' + convertedStress + ' ' + unitLabel;
    } else {
        document.getElementById('torsional-stress-result').value = 'Invalid input';
    }
});

