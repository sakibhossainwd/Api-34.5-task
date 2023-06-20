const loadAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => displayAdvice(data.slip))
}

const displayAdvice = advice => {
    console.log(advice);
    const adviceContainer = document.getElementById('advice-container');
    adviceContainer.innerHTML =`
    <p>Advice: ${advice.id}</p>
        <h3>${advice.advice}</h3>
    `
}

loadAdvice();