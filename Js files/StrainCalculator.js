// document.getElementById('strain-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var changeInLength = parseFloat(document.getElementById('change-in-length-form02-6').value);
//     var originalLength = parseFloat(document.getElementById('original-length-form02-6').value);

//     if (!isNaN(changeInLength) && !isNaN(originalLength) && originalLength !== 0) {
//         var strain = changeInLength / originalLength;
//         document.getElementById('strain-form02-6').value = 'Strain: ' + strain;
//     } else if (isNaN(changeInLength) || isNaN(originalLength)) {
//         document.getElementById('strain-form02-6').value = 'Invalid input';
//     } else if (originalLength === 0) {
//         document.getElementById('strain-form02-6').value = 'Original length cannot be zero';
//     }
// });

// document.getElementById('strain-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var changeInLength = parseFloat(document.getElementById('change-in-length-form02-6').value);
//     var originalLength = parseFloat(document.getElementById('original-length-form02-6').value);

//     if (!isNaN(changeInLength) && !isNaN(originalLength)) {
//         if (originalLength > 0) {
//             var strain = changeInLength / originalLength;
//             document.getElementById('strain-form02-6').value = 'Strain: ' + strain;
//         } else {
//             document.getElementById('strain-form02-6').value = 'Invalid original length value, please enter a positive value of original length';
//         }
//     } else if (isNaN(changeInLength) || isNaN(originalLength)) {
//         document.getElementById('strain-form02-6').value = 'Invalid input';
//     }
// });

document.getElementById('strain-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var changeInLength = parseFloat(document.getElementById('change-in-length-form02-6').value);
    var originalLength = parseFloat(document.getElementById('original-length-form02-6').value);

    if (!isNaN(changeInLength) && !isNaN(originalLength)) {
        if (originalLength > 0) {
            var strain = changeInLength / originalLength;
            var strainType = changeInLength >= 0 ? 'Tensile Strain' : 'Compressive Strain';
            document.getElementById('strain-form02-6').value = strainType + ': ' + Math.abs(strain);
        } else {
            document.getElementById('strain-form02-6').value = 'Invalid original length value, please enter a positive value of original length';
        }
    } else if (isNaN(changeInLength) || isNaN(originalLength)) {
        document.getElementById('strain-form02-6').value = 'Invalid input';
    }
});
