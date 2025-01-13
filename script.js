const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    const convertedWeight = document.getElementById('converted-weight');

    if ( (isNaN(input.value)) || (input.value <= 0) ) {
        convertedWeight.classList.add("error");  // added to converted weight and not the p tag defined below
        convertedWeight.innerHTML = "<p>Invalid input!</p>"

        setTimeout(()=> {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("error");
        }, 3000)

        input.value = ""

    } else { 
        const kgToPound = Number(input.value) * 2.20462;  // 2.20462 is equal to 1kg
        convertedWeight.classList.add("successful");
        convertedWeight.innerHTML = `${kgToPound.toFixed(3)}`; // round function

        setTimeout(()=> {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("successful");
            input.value = "";
        }, 3000)

    }
})