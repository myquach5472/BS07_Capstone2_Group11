function getProduct() {
  var promise = axios.get("https://shop.cyberlearn.vn/api/Product");
  promise
    .then(function (result) {
      // console.log(result);
      var jsonData = result.data.content;
      renderProduct(jsonData);
    })
    .catch(function (error) {
      // console.log(error);
    });
}

getProduct();

// render Product
function renderProduct(arrProduct) {
  var content = "";
  try {
    for (var i = 0; i < arrProduct.length; i++) {
      var productServer = arrProduct[i];
      var product = new Product();
      Object.assign(product, productServer);
      content += `
      
    <div class="mb-4 col-lg-4 col-md-6 col-sm-12">
    <div class ="card h-100">
    <img src="${product.image}" class="card-img-top" alt="img" />
    <div class = "card-body">
    <h3 class="text-start ms-2">${product.name}</h3>
    <p class="text-secondary ms-2 text-start">${product.shortDescription}</p>
    <p class="text-end fs-5 text-secondarys">$${product.price}</p>
    </div>
    <button class="btn btn-warning fw-bold" onclick= "buyProduct('${product.id}')">Buy</button>
    </div>
    </div>
      `;
    }
  } catch (error) {
    // console.log(error);
  }
  document.getElementById("allProduct").innerHTML = content;
}

// register form
function registerUser(userData) {
  var promise = axios.post(
    "https://shop.cyberlearn.vn/api/Users/signup",
    userData
  );
  promise
    .then(function (result) {
      // console.log(result);
    })
    .catch(function (error) {
      // console.log(error);
    });
}
