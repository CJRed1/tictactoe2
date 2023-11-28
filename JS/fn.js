// let sum = function () {
//     console.log(1+1)
// }

// square1.addEventListener('click', function (){}) First way to do it
// square1.addEventListener('click', () => {}) Second way to do it

for (let i = 1; 9; i++) {
    document.getElementById('square' + i).addEventListener('click', () => {
        document.getElementById('square' + i).style.opacity = 0
        document.getElementById('square' + i).style.transition = '0.25s'
    })
}
