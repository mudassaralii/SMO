jQuery(document).ready(function($) {
    cartWrapper = $('.cd-cart-container');
    //product id - you don't need a counter in your real project but you can use your real product id
    productId = 0;

    if (cartWrapper.length > 0) {
        //store jQuery objects
        cartBody = cartWrapper.find('.body')
        cartList = cartBody.find('ul').eq(0);
        cartTotal = cartWrapper.find('.checkout').find('span');
        cartTrigger = cartWrapper.children('.cd-cart-trigger');
        cartCount = cartTrigger.children('.count')
        addToCartBtn = $('.cd-add-to-cart');
        undo = cartWrapper.find('.undo');
        undoTimeoutId;

        //add product to cart
        addToCartBtn.on('click', function(event) {
            event.preventDefault();
            addToCart($(this));
        });

        //open/close cart
        cartTrigger.on('click', function(event) {
            event.preventDefault();
            toggleCart();
        });

        //close cart when clicking on the .cd-cart-container::before (bg layer)
        cartWrapper.on('click', function(event) {
            if ($(event.target).is($(this))) toggleCart(true);
        });

        //delete an item from the cart
        cartList.on('click', '.delete-item', function(event) {
            event.preventDefault();
            removeProduct($(event.target).parents('.product'));
        });

        //update item quantity
        cartList.on('change', 'select', function(event) {
            quickUpdateCart();
        });

        //reinsert item deleted from the cart
        undo.on('click', 'a', function(event) {
            clearInterval(undoTimeoutId);
            event.preventDefault();
            var val = cartList.find('.deleted')[0].innerText;
            val = val.split("\n");
            $('#' + val[0] + '_cart').addClass('selectedIcon');
            cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
                quickUpdateCart();
            });
            undo.removeClass('visible');
        });
    }
});

function removeProduct(product, val) {
    var obj = product;
    if (typeof(product) !== "object") {
        if (product.indexOf("_cart") !== -1)
            product = product.replace('_cart', '');
        obj = $("#delete_" + product).parents('.product');
    }
    text = obj.text().substr(0, obj.text().indexOf('~'));

    var totalFeatures = resultVector.getSource().getFeatures();
    for (var i = 0; i < totalFeatures.length; i++) {
        if (totalFeatures[i].get('data_id') == text) {
            totalFeatures[i].set("hidden", "true");
            totalFeatures[i].set("clip", "false");
            if (totalFeatures[i].get('dataset_name') == product) {
                onj = val;
            }
        }
    }

    clearInterval(undoTimeoutId);
    cartList.find('.deleted').remove();
    var topPosition = obj.offset().top - cartBody.children('ul').offset().top,
        productQuantity = Number(obj.find('.quantity').find('select').val()),
        productTotPrice = Number(obj.find('.price').text().replace('$', '')) * productQuantity;

    obj.css('top', topPosition + 'px').addClass('deleted');

    //update items count + total price
    updateCartTotal(productTotPrice, false);
    updateCartCount(true, -productQuantity);
    undo.addClass('visible');

    //wait 8sec before completely remove the item
    undoTimeoutId = setTimeout(function() {
        undo.removeClass('visible');
        cartList.find('.deleted').remove();
        // resetFeaturesCount();
        toastr.success('Product Removed');
    }, 100);
    var count = cartCount[0].innerText;
    // Hide Cart if empty
    if (count == 0) {
        toggleCart(true);
        if (val !== 'reset') {
            $("#prssarea").text('');
            $("#spotarea").text('');
            $("#spotamount").text('');
            $("#prssamount").text('');
            $("#pleiadesarea").text('');
            $("#pleiadesamount").text('');
        }
    }
}

function toggleCart(bool) {
    var cartIsOpen = (typeof bool === 'undefined') ? cartWrapper.hasClass('cart-open') : bool;

    if (cartIsOpen) {
        cartWrapper.removeClass('cart-open');
        //reset undo
        clearInterval(undoTimeoutId);
        undo.removeClass('visible');
        cartList.find('.deleted').remove();

        setTimeout(function() {
            cartBody.scrollTop(0);
            //check if cart empty to hide it
            if (Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
        }, 500);
    } else {
        cartWrapper.addClass('cart-open');
    }
}
