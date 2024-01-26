const forms = document.querySelector('form');

forms.addEventListener('submit', function(e) {
    e.preventDefault();
    const height1 = parseInt(document.querySelector('#height').value);
    const weight1 = parseInt(document.querySelector('#weight').value);
    const results1 = document.querySelector('#results');

    if (height1 === '' || height1 < 0 || isNaN(height1)) {
        results1.innerHTML = `Please Enter a valid Number ${height1}`;
    } else if (weight1 === '' || weight1 < 0 || isNaN(weight1)) {
        results1.innerHTML = `Please Enter a valid Number ${weight1}`;
    } else {
        // results1.innerHTML = (weight1 / ((height1 * height1) / 10000)).toFixed(3);
        const res = (weight1 / ((height1 * height1) / 10000)).toFixed(3);
        if (res > 24.9) {
            results1.innerHTML = res + ": " + 'Over Weight';
        } else if (res < 18.6) {
            results1.innerHTML = res + ": " + 'Under Weight';
        } else {
            results1.innerHTML = res + ": " + "Healthy";
        }
    }
})