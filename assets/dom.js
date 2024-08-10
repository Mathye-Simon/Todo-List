// accessing html elements
const addBtn = document.querySelector('#addBtn')
const todoListContainer = document.querySelector('#todoListContainer')
const todoContent = document.querySelector('#todoContent')
// creating a paragraph element



addBtn.addEventListener('click',
    function () {
        let todo = todoContent.value
        const paragraph = document.createElement('p')
        paragraph.textContent = todo
        todoListContainer.append(paragraph)
    }
)