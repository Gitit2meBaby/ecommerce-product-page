// MOBILE MENU
const menuToggle = document.querySelector('#menuToggle');
const mobileNav = document.querySelector('.mobile-nav')
const closeMenuBtn = document.querySelector('#closeMenuBtn')

menuToggle.addEventListener('click', () => {
    mobileNav.classList.remove('hidden')
})
closeMenuBtn.addEventListener('click', () => {
    mobileNav.classList.add('hidden')

})

// CHANGE MAIN IMAGE WITH THUMBNAILS
const mainImage = document.querySelector('#mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const newSrc = thumbnail.getAttribute('data-src');
        mainImage.src = newSrc;
        thumbnails.forEach(thumb => thumb.classList.remove('thumbnail-active'));
        thumbnail.classList.add('thumbnail-active');
    });
});

// OPEN IMAGE MODAL
const modal = document.querySelector('#modal');
mainImage.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

// CHANGE MAIN IMAGE IN MODAL
const modalImageMain = document.querySelector('#modalImageMain');
const modalThumbnails = document.querySelectorAll('.modal-thumbnails img');

//with click on a thumbnail
modalThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const newModalSrc = thumbnail.getAttribute('data-src');
        modalImageMain.src = newModalSrc;
        modalThumbnails.forEach(thumb => thumb.classList.remove('modal-thumbnail-active'));
        thumbnail.classList.add('modal-thumbnail-active');
    });
});

//with click on toggle buttons
function linkThumbnails() {
    modalThumbnails.src = `"images/image-product-${modalImageCount}-thumbnail.jpg"`
    modalThumbnails.forEach(thumbnail => {
        const activeThumbnail = thumbnail.getAttribute('data-num');
        if (activeThumbnail != modalImageCount) {
            thumbnail.classList.remove('modal-thumbnail-active')
        } else {
            thumbnail.classList.add('modal-thumbnail-active')
        }
    })
}

const modalPrevious = document.querySelector('.previous');
let modalImageCount = 1

modalPrevious.addEventListener('click', () => {
    if (modalImageCount == 1) {
        modalImageCount = 4
    } else {
        modalImageCount--
    }
    modalImageMain.src = `images/image-product-${modalImageCount}.jpg`
    // console.log(modalImageCount)
    // console.log(modalImageMain.src)
    console.log(modalImageMain)
    linkThumbnails()
})

const modalNext = document.querySelector('.next');
modalNext.addEventListener('click', () => {
    if (modalImageCount == 4) {
        modalImageCount = 1
    } else {
        modalImageCount++
    }
    modalImageMain.src = `images/image-product-${modalImageCount}.jpg`
    linkThumbnails()
})

// CLOSE MODAL
const closeModal = document.querySelector('#closeModal')
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden')
})


// MOBILE IMAGE SLIDER 
const mobileImage = document.querySelector('#mobileImage');
const mobilePrevious = document.querySelector('#mobilePrevious')
const mobileNext = document.querySelector('#mobileNext')

let imageCount = 1
mobilePrevious.addEventListener('click', () => {
    if (imageCount == 1) {
        imageCount = 4
    } else {
        imageCount--
    }
    mobileImage.style.background = `url("images/image-product-${imageCount}.jpg")`
    mobileImage.style.backgroundPosition = "center"
    mobileImage.style.backgroundSize = "100%"
})

mobileNext.addEventListener('click', () => {
    if (imageCount == 4) {
        imageCount = 1
    } else {
        imageCount++
    }
    mobileImage.style.background = `url("images/image-product-${imageCount}.jpg")`
    mobileImage.style.backgroundPosition = "center"
    mobileImage.style.backgroundSize = "100%"
})

// COUNTER
const counter = document.querySelector('#counter');
const counterMinus = document.querySelector('#counterMinus');
const counterPlus = document.querySelector('#counterPlus');
let counterAmount = 0

counterMinus.addEventListener('click', () => {
    if (counterAmount > 0) {
        emptyCart.classList.remove('hidden')

        counterAmount--
    } else counterAmount = 0
    counter.textContent = counterAmount
    checkCartAmount()
    updateCartTotal()
    updateMiniCartAmount()
})

counterPlus.addEventListener('click', () => {
    counterAmount++
    counter.textContent = counterAmount
    checkCartAmount()
    updateCartTotal()
    updateMiniCartAmount()
})

// UPDATE CART STRUCTURE
const emptyCart = document.querySelector('.empty-cart')
const cartContent = document.querySelector('.cart-content')
const checkoutBtn = document.querySelector('.checkout-btn-wrapper')
function checkCartAmount() {
    if (counterAmount == 0) {
        cartContent.classList.add('hidden')
        checkoutBtn.classList.add('hidden')
    } else {
        cartContent.classList.remove('hidden')
        checkoutBtn.classList.remove('hidden')
        emptyCart.classList.add('hidden')
    }
}

// CART BUTTON 
const cartBtn = document.querySelector('#cartBtn');
const cartModal = document.querySelector('#cartModal');
const mainContent = document.querySelector('.main')

cartBtn.addEventListener('click', () => {
    cartModal.classList.toggle('hidden')
})

// CART AMOUNT MINI DISPLAY
let cartAmountMini = document.querySelector('#cartAmount')
function updateMiniCartAmount() {
    cartAmountMini.textContent = counter.textContent
}

// ADD TO CART FUNCIONALITY
const addToCart = document.querySelector('#addToCart');
const miniCartAmount = document.querySelector('.cart-amount')
let cartCountDisplay = document.querySelector('#cartCount')
let cartTotalDisplay = document.querySelector('#cartTotal')

function updateCartTotal() {
    let price = 125

    cartCountDisplay.textContent = `  x ${counterAmount}`
    newTotal = counterAmount * price
    cartTotalDisplay.textContent = `$${newTotal}`
}

addToCart.addEventListener('click', () => {
    cartModal.classList.remove('hidden')
    miniCartAmount.classList.remove('hidden')
    updateCartTotal()
    updateMiniCartAmount()
    // save()
})

//DELETE CART CONTENTS
const deleteBtn = document.querySelector('#delete')
deleteBtn.addEventListener('click', () => {
    cartContent.classList.add('hidden')
    checkoutBtn.classList.add('hidden')
    emptyCart.classList.remove('hidden')
    counterAmount = 0
    counter.textContent = '0'
    miniCartAmount.classList.add('hidden')
})
