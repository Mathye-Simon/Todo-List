// accessing html elements
const addBtn = document.querySelector('#addBtn')
const removeBtn = document.querySelector("#removeBtn")
const todoListContainer = document.querySelector('#todoListContainer')
const todoInput = document.querySelector('#todoContent')

// to make unique todos
let uniqueID = 0;

// add todo with a checkbox based on an event
function handleEvent (event) {
    if (event.type == 'click' || event.type == 'keydown' && event.key == 'Enter') {

        const todoText = todoInput.value   
        // error handling
        if (todoText == '') {
            console.log('error: no input provided');
            return;
        } else {
        // new elements each click
            
            
            uniqueID+=1
            const todoCheckbox = document.createElement('input')
            todoCheckbox.setAttribute('type','checkbox')
            const todoDiv = document.createElement('div')
            const list = document.createElement('li')
            list.textContent = todoText
            // set id for each element added
            list.setAttribute('id',`todo ${uniqueID}`)
            todoDiv.setAttribute('id',`todoDiv ${uniqueID}`)
            todoCheckbox.setAttribute('id',`todoCheckbox ${uniqueID}`)

            // set class for styling
            todoDiv.setAttribute('class',`todoDiv`)
            todoCheckbox.setAttribute('class', 'todoCheckbox')
            

            // structuring elements
            todoDiv.append(todoCheckbox,list)
            todoListContainer.append(todoDiv)}

            // clear input after adding todo
            todoInput.value = '';
            
    }
}
addBtn.addEventListener('click',handleEvent)
todoInput.addEventListener('keydown', handleEvent)

// removing a todo and its container
removeBtn.addEventListener('click', () => {
    const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedItems.forEach(function (item) {item.parentElement.remove()});
});



// for slide style
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container')
    
    // Add the 'visible' class after a small delay to ensure the page is fully loaded
    setTimeout(() => {
    container.classList.add('visible');
    }, 100); // Small delay to ensure the page is fully loaded
});



