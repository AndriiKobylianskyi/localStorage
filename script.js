'use strict';

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color')



if (localStorage.getItem('isChecked')) {
    checkbox.checked = true
}
checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true)
})


if (localStorage.getItem('bg')) {
    form.style.backgroundColor = 'red'
}
change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg')
        form.style.backgroundColor = 'white'
    } else {
        localStorage.setItem('bg', 'changed')
        form.style.backgroundColor = 'red'
    }
})
