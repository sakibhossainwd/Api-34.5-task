// const loadLink = () => {
//     fetch('https://api.shrtco.de/v2/shorten?url=https://github.com/ProgrammingHero1?tab=repositories')
//     .then(res => res.json())
//     .then(data => console.log(data.result.original_link))
// }
 
document.getElementById('link-btn').addEventListener('click', function(){
    const inputLink = document.getElementById('InputLinkField');
    const inputText = inputLink.value
    console.log(inputText);
})



// loadLink();