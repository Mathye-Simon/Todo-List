// accessing html elements
const addBtn = document.querySelector('#addBtn')
const removeBtn = document.querySelector("#removeBtn")
const todoListContainer = document.querySelector('#todoListContainer')
const todoContent = document.querySelector('#todoContent')
// to make unique todos
todoNumber = 0;
// add todo with a checkbox
addBtn.addEventListener('click',
    
    function () {
        
        let todoText = todoContent.value
        // error handling
        if (todoText == '') {
            console.log('error: no input provided');
    } else {
        const paragraph = document.createElement('p')
        paragraph.textContent = todoText
        // set id for each todo
        paragraph.setAttribute('id',`todo ${todoNumber+=1}`)
        todoListContainer.append(paragraph)}
    }
)
