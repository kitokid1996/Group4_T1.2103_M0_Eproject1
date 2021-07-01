
var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor các thuôc tính của món hàng
    function Item(name, image, price, count) {
      this.name = name;
      this.image = image;
      this.price = price;
      this.count = count;
    }
    
    // Save cart setItem
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart GetItem
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
      // cart = JSON.parse(JSON.stringify(cart))
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
                          //  JSON.stringify(cart)!=null
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    // tạo ra 1 đố tượng obj
    var obj = {};
    
    // Add to cart
    // tạo ra 1 phương thức thêm hàng cho obj
    obj.addItemToCart = function(name, image, price, count) { //trong phương thức này gồm 3 property là (tên, giá và số lượng)

      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      // nếu hàng chưa có trong giỏ thì sẻ tạo ra 1 đối tượng mới  và thêm vào giỏ với count ? do IT đặt
      var item = new Item(name,image, price, count);
      cart.push(item);
      saveCart();
    }

    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
            cart[i].count = count;
          break;
        }
      }
    };

    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name == name) {
            cart[item].count --;
            if(cart[item].count == 0) {
              cart.splice(item, 1); // món hàng tại vi5 trí  item sẽ bị xóa
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name == name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // // Clear cart
    // obj.clearCart = function() {
    //   cart = [];
    //   saveCart();
    // }
  
    // Count cart tổng số lượng hàng hóa 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart tổng tiền
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart  (copy lại)
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart                 : Array
    // Item                 : Object/Class
    // addItemToCart        : Function
    // removeItemFromCart   : Function
    // removeItemFromCartAll : Function
    // clearCart            : Function
    // countCart            : Function
    // totalCart            : Function
    // listCart             : Function
    // saveCart             : Function
    // loadCart             : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault(); // preventDefault dùng để chặn chuyển trang
    var name = $(this).data('name');
    var image = $(this).data('image');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name,image, price, 1);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = " ";
    for(var i in cartArray) {
      output += "<tr>"

      + "<td><img class='img-product' src='../images/books/"+cartArray[i].image+".jpg'></td>" 
      + "<td>(" + cartArray[i].price + "$ )</td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count amount' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + " = " 
      + "<td>" + cartArray[i].total + "$ </td>" 
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }


  // tới các chức năng
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();

  });
  
  displayCart();
  