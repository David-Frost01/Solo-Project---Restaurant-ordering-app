import { menuArray } from './data.js'

let totalPrice = 0

// Event listeners for add and remove btns
document.addEventListener('click', function(event) {
    const btnPath = event.target.dataset

    // add buttons
    btnPath.addPizza ? addToCart(btnPath.addPizza):
    btnPath.addHamburger ? addToCart(btnPath.addHamburger) : 
    btnPath.addBeer ? addToCart(btnPath.addBeer) : ''

    // remove buttons
    btnPath.removePizza ? removeFromCart(btnPath.removePizza) : 
    btnPath.removeHamburger ? removeFromCart(btnPath.removeHamburger) :
    btnPath.removeBeer ? removeFromCart(btnPath.removeBeer) : ''
})

document.getElementById('complete-order-btn').addEventListener('click', function() {
    document.getElementById('order-form').style.display = 'block'
    document.getElementById('main-content').style.background = '#757575'
    const addBtns = document.getElementsByClassName('menu-add-btn') 
    const removeBtns = document.getElementsByClassName('cart-remove-btn')
    for (let addBtn of addBtns) {
        addBtn.style.cursor = 'not-allowed'
        addBtn.disabled = true
    }
    for (let removeBtn of removeBtns) {
        removeBtn.style.cursor = 'not-allowed'
        removeBtn.disabled = true
    }
})

function getMenuItems() {
    let menuItemHtml = ``
    
    menuArray.forEach(function(menuItem) { 
        menuItemHtml += `
        <div class="menu-item" id="${menuItem.id}">
            <p class="menu-item-icon">${menuItem.emoji}</p>
            <div class="menu-text-container">
                <h3 class="menu-item-title">${menuItem.name}</h3>
                <p class="menu-item-description">${menuItem.ingredients}</p>
                <p class="menu-item-price">${menuItem.price}</p>
            </div>  
            <button class="menu-add-btn" data-add-${menuItem.name}="${menuItem.id}">+</button>
        </div>
        `
    })

    return menuItemHtml
}

const cartItems = []

function addToCart(id) {
    cartItems.push(id)
    menuArray.forEach(function(menuItem) {
        if (menuItem.id === id) {
            totalPrice += menuItem.price
        }
    })
    renderCartItems()
}

function removeFromCart(id) {
    const removeItemId = cartItems.indexOf(id)
    menuArray.forEach(function(menuItem) {
        if (menuItem.id === id) {
            totalPrice -= menuItem.price
        }
    })
    cartItems.splice(removeItemId, 1)
    renderCartItems()
}

function renderMenuItems() {
    document.getElementById('menu').innerHTML = getMenuItems()
}

function renderCartItems() {
    let cartItemsHtml = ``

    menuArray.forEach(function(menuItem) {
        for (let item of cartItems) {
            if (menuItem.id === item) {
                cartItemsHtml += `
                <div class="cart-item">
                    <h3 class="cart-item-title">${menuItem.name}</h3>
                    <button class="cart-remove-btn" 
                     data-remove-${menuItem.name}="${menuItem.id}">
                        remove
                    </button>
                    <p class="cart-item-price">$${menuItem.price}</p> 
                </div>
                `
            }
        }
    })
    document.getElementById('cart-item').innerHTML = cartItemsHtml
    renderTotaPrice()
}

function renderTotaPrice() {
    document.getElementById('total-price').textContent = `$${totalPrice}`
}

renderMenuItems()
