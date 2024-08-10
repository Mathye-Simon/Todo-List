// accessing html elements
const addBtn = document.querySelector('#addBtn')
const removeBtn = document.querySelector("#removeBtn")
const todoListContainer = document.querySelector('#todoListContainer')
const todoContent = document.querySelector('#todoContent')

// add todo with a checkbox
addBtn.addEventListener('click',
    
    function () {
        let todoText = todoContent.value
        if (todoText == '') {
            console.log('error: no input provided');
    } else {
        const paragraph = document.createElement('p')
        paragraph.textContent = todoText
        todoListContainer.append(paragraph)}
    }
)
