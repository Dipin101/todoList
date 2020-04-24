//UI Controller
let UIController = (function() {
    let DOM = {
        addBtn: '.add',
        todo: '#todo',
        container: '.content',
        chek: '.todolist',
    }

    return {
        getinput: function() {
            return {
                add:document.querySelector(DOM.addBtn),
                list:document.querySelector(DOM.todo).value,
                del:document.querySelector(DOM.delete),
                check:document.querySelector(DOM.chek),
            }
        },
        addListItem: function(activities) {
            let html, newHtml, id 
            id = Math.floor(Math.random() * 10)
            html = '<div class="main" id="main-%id%"> <input type="checkbox" name="todolist" id="todolist" class="todolist" value="random"> <h4> %activities% </h4><span class="delete" id="close"> <img src="./image/cross.svg" alt="cross.png" class="image" id="image"></span></div>'
            newHtml = html.replace('%id%', id)
            newHtml = newHtml.replace('%activities%', activities)
            document.querySelector('.content').insertAdjacentHTML('beforeend', newHtml)
        },
        deleteListItem: function(id, close) {
            el = document.getElementById(id)
            el.parentNode.removeChild(el)           
        },
        checked: function() {

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

        document.querySelector(DOM.container).addEventListener('click', ctrlStrikeItem)
        
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
        // console.log(itemId)
        // let itemClass = event.target.parentNode.className
        // console.log(itemClass)
        
        // let close = document.getElementsByClassName(itemClass)
        // console.log(close.length)
        if(itemId){
            UICtrl.deleteListItem(itemId)
        } 
    }

    let ctrlStrikeItem = function() {
        let itemId = event.target.id
        console.log(itemId)
    }

    return {
        init: function() {
            console.log('Application has Started..Now')
            setupEventListeners()
        }
    }

})(UIController)

globalController.init()





