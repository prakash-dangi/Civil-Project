document.getElementById('stress-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var force = parseFloat(document.getElementById('name-form02-6').value);
    var area = parseFloat(document.getElementById('email-form02-6').value);

    if (!isNaN(force) && !isNaN(area)) {
        if (area >= 0) {
            var stress = force / area;
            var stressType = stress >= 0 ? 'Compressive Stress' : 'Tensile Stress';
            document.getElementById('phone-form02-6').value = stressType + ': ' + Math.abs(stress) + ' Pa';
        } else {
            document.getElementById('phone-form02-6').value = 'Invalid area value, area can\'t be negative';
        }
    } else {
        document.getElementById('phone-form02-6').value = 'Invalid input';
    }
});

