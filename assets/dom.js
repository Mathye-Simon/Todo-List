// accessing html elements
const addBtn = document.querySelector('#addBtn')
const removeBtn = document.querySelector("#removeBtn")
const todoListContainer = document.querySelector('#todoListContainer')


// to make unique todos
todoNumber = 0;
// add todo with a checkbox
addBtn.addEventListener('click',
    
    function () {
    const todoText = document.querySelector('#todoContent').value   
        // error handling
    if (todoText == '') {
            console.log('error: no input provided');
    } else {
        // new elements each click
        const todoCheckbox = document.createElement('input')
        todoCheckbox.setAttribute('type','checkbox')
        const todoDiv = document.createElement('div')
        const list = document.createElement('li')
        list.textContent = todoText
        // set id for each element added
        list.setAttribute('id',`todo ${todoNumber+=1}`)
        todoDiv.setAttribute('id',`todoDiv ${todoNumber}`)
        todoCheckbox.setAttribute('id',`todoCheckbox ${todoNumber}`)

        // set class for styling
        todoDiv.setAttribute('class',`todoDiv`)


        // structuring elements
        todoDiv.append(todoCheckbox,list)
        todoListContainer.append(todoDiv)}
    }
)
