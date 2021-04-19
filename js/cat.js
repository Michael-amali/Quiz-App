// let category = document.querySelector('#quiz').value;


const play = document.querySelector('#home');
const cat = document.querySelector('#cat');
let category = "";


getCategory = (c) => {

    if (c.innerText == "General Knowledge") {
        category = "General Knowledge";
    } else if (c.innerText == "History") {
        category = "History";
    } else if (c.innerText == "Sports") {
        category = "Sports";
    }

    cat.classList.add('hidden');
    play.classList.remove('hidden');

    localStorage.setItem('Category', category)
    console.log(category)



}

back = () => {
    play.classList.add('hidden');
    cat.classList.remove('hidden')
}