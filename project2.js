const yearlyDuration = document.getElementById('year');
const yearlyRate = document.getElementById('yearlyRate');
const principal = document.getElementById('principal');
const result = document.querySelector('span');

const calculate = function(){  
    const monthlyDuration = Number(yearlyDuration.value) * 12;
    const monthlyRate = Number(yearlyRate.value) / 1200;
    const payment = (principal.value * monthlyRate)/(1-(1+monthlyRate)**-monthlyDuration)

    result.textContent = '$' + payment.toFixed(2);
    
    console.log(payment);
}
