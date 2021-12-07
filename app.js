let yogaCount = document.querySelector('.yoga-count');
let calCount = document.querySelector('.cal-count');
let count = 0
let caloryCount = 0

let addBtn = document.querySelector('.add')
let removeBtn = document.querySelector('.minus')
let resetBtn = document.querySelector('.reset')

yogaCount.innerText = 0;
calCount.innerText = 0;

addBtn.addEventListener('click', function() {
    count++
    caloryCount += 14
    yogaCount.innerText = count;
    calCount.innerText = caloryCount + 'cal';
})
removeBtn.addEventListener('click', function() {
    count--
    caloryCount -= 14
    yogaCount.innerText = count;
    calCount.innerText = caloryCount + 'cal';
})
resetBtn.addEventListener('click', function() {
    count = 0
    caloryCount = 0;
    yogaCount.innerText = 0;
    calCount.innerText = 0;
})