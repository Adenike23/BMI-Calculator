const weightValidate = document.querySelector('.weight');
const heighttValidate = document.querySelector('.height');
const mainBox = document.querySelector('.main');
const errorMessage = document.querySelector('.error');
const submitButton = document.querySelector('.submit');
const answer = document.querySelector('.answer');
const yourStatus = document.querySelector('.yourStatus')



submitButton.addEventListener('click', function() {
    if(weightValidate.value.length <= 0 || heighttValidate.value.length <= 0) {
        errorMessage.textContent = 'Please fill in all fields'
        setTimeout(() => {
            errorMessage.style.display = 'none'
        }, 4000);
    } else if (!Number(weightValidate.value) || !Number(heighttValidate.value)) {
        errorMessage.textContent = 'All fields must be numbers'
    }     

    const heightInM = (heighttValidate.value/100);
    const cal = weightValidate.value/(heightInM * heightInM)
    const BMI = cal.toPrecision(4);
    answer.textContent = `${BMI}`
        switch (true) {
            case BMI < 18.5: 
            yourStatus.textContent = 'You are Underweight'
            case BMI >= 18.5 || BMI <= 24.9: 
            yourStatus.textContent = 'You are Healty'
            case BMI >= 25 || BMI < 30: 
            yourStatus.textContent = 'You are Overweight'
            case BMI >= 30: 
            yourStatus.textContent = 'You are Obsese'
        }
})
document.querySelector('.reload').addEventListener('click', function() {
    location.href = '/index.html'
})