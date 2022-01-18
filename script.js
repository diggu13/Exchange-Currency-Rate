// function calculate(){
//     fetch('item.json')
//     .then(res=> res.json())
//     .then(data => (document.body.innerHTML = data[0].text))
//     }


// calculate();

const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
let amount_one = document.getElementById('amount-one');
let amount_two = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate(){
    const currencyOne = currencyEl_one.value;
    const currencyTwo = currencyEl_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/9d517c557753dbccd2fa1927/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
    console.log(data);
    console.log(data.conversion_rates[currencyTwo])
    amount_two.value = data.conversion_rates[currencyTwo]*amount_one.value;
    rate.innerText=`${amount_one.value} ${currencyOne} = ${data.conversion_rates[currencyTwo]*amount_one.value} ${currencyTwo}`;

    
});
    
}
// Event listeners
currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
amount_two.addEventListener('input',calculate);

// swap 
swap.addEventListener('click',function(){
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value= temp;
    calculate();
})


calculate();