const play = document.querySelector('#home');
const cat = document.querySelector('#cat');
let category = "";


getCategory = (evt) => {

    if (evt.innerText == "General Knowledge") {
        category = "General Knowledge";
    } else if (evt.innerText == "History") {
        category = "History";
    } else if (evt.innerText == "Sports") {
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