
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');


cat_btn.addEventListener('click'. getRandomCat)
dog_btn.addEventListener('click'. getRandomDog)

function getRandomCat(){
    fetch('https://http.cat/${inputVal')
    .then(res => res.json())
    .then(data => {
        cat_result.innerHTML = '<img src="data,file/>'
    })
}
function getRandomDog(){
    fetch('http//random.dog/woof.jason')
    .then(res => res.json())
    .then(data => {
        dog_result.innerHTML = '<img src="data,file/>'
    })
}