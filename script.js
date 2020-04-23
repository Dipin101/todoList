//UI Controller
let UIController = (function() {
    let DOM = {
        addBtn: '.add',
        todo: '#todo',
        container: '.content',
    }

    return {
        getinput: function() {
            return {
                add:document.querySelector(DOM.addBtn),
                list:document.querySelector(DOM.todo).value,
                del:document.querySelector(DOM.delete),
            }
        },
        addListItem: function(activities) {
            let html, newHtml

            html = '<div class="main" id="main-%id%"> <input type="checkbox" name="todolist" id="todolist" value="random"> <h4> %activities% </h4><button class="delete"> <img src="./images/cross.svg" alt="cross.png" class="image" id="image"></button></div>'
            newHtml = html.replace('%activities%', activities)
            document.querySelector('.content').insertAdjacentHTML('beforeend', newHtml)
        },
        deleteListItem: function(id) {
            let el = document.getElementById(id)
            // console.log(el)
            el.parentNode.removeChild(el)
        },
        getDOM: function() {
            return DOM
        }
    }
})() 


//Global Controller
let globalController = (function(UICtrl) {

    let setupEventListeners = function() {
        let DOM = UICtrl.getDOM()

        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)
    }

    let ctrlAddItem= function() {
        let input, newItem

        input = UICtrl.getinput()
        if(input.list !== ""){
            UICtrl.addListItem(input.list)
            console.log(input.list)
            clear()
        }
    }

    let clear = function () {
            document.querySelector('#todo').value = ''
    }

    let ctrlDeleteItem = function(event) {
        let itemId = event.target.parentNode.parentNode.id
        if(itemId){
            UICtrl.deleteListItem(itemId)
        } 
    }

    return {
        init: function() {
            console.log('Application has Started..Now')
            setupEventListeners()
            ctrlDeleteItem
        }
    }

})(UIController)

globalController.init()





