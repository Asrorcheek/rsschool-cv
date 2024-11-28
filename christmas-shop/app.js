// Elementlarni tanlash
const card = document.querySelectorAll('.slider__card');
const sliderContainer = document.getElementsByClassName('.slider__container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let offset = 0; // Boshlang'ich siljish qiymati
let transformRight = card.style.transformX = `translateX(${offset}px)`;
// Next tugmasi funksiyasi
nextButton.addEventListener('click', () => {
    if (offset < 0 || offset){

    }

});

// Previous tugmasi funksiyasi
prevButton.addEventListener('click', () => {

});








// const slider = document.getElementsByClassName('.slider');
//
// const prevButton = document.getElementById('#prev');
// const nextButton = document.getElementById('#next');

// let offset = 0;
// nextButton.addEventListener('click', () => {
//     offset -= 135;
//     sliderContainer.style.transform = `translateX(${offset}px)`;
// });






// // rest parametrs
// function sumAll(arg1, arg2, ...args){
//     let sum = 0
//     for(let arg of args) sum += arg;
//     return sum;
// }
// alert(sumAll)
// // copy array or object
// let obj = {
//     "f": 1,
//     "s": 2,
//     "th": 3,
//     "f": 4,
// }
// let objCopy = [...obj];
// alert(objCopy);

// // Merge objects
// objMerge = {...obj, ...objCopy};
// // Array destructing

// {
//     let arr = [1,2,3,4,]
//     let [fst,scnd,,frth,] = arr

//     // string destructing
//     let str = "lorem ipsum dolor sit amet"
//     let [str1, ,str2,] = str.split(" ", 3);
// }
// {
//     let user = { name: "John", years: 30 };
//     let {name, age, isAdmin="false",} = user;
//     alert(name);
//     alert(age);
//     alert(isAdmin);
// }
