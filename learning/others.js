let hasTemperature = true;
let hasCough = true;

// and
if (hasTemperature===true && hasCough===true) {
    fever()
}

// || -> or
if (hasTemperature===true || hasCough===true) {
    fever()
}


function fever() {
    console.log('has fever..')
}