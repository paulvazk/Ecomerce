/**
 * Conexion a la api de firebase
 */

 /**
  * 
  */
 //variables globales
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

//divs ajio por categoria por el momento dejo uno
var piezasDIV = document.getElementById('piezasDiv');
var otraDIV = document.getElementById('otraDiv');
var noseDIV = document.getElementById('noseDiv');

//Informacion uno por cada categoria pero solo tengo una  aqui se hacen objectos o eso pienso yo xd

var PIEZA = [
     {name:'taza #1',price:16},
     {name:'taza #2',price:654},
     {name:'taza #3',price:732},
     {name:'taza #4',price:435},
     {name:'taza #5',price:832},
     {name:'taza #6',price:234}
];
var OTRA = [
     {name:'otro #1',price:123},
     {name:'otro #2',price:433},
     {name:'otro #3',price:454}
];
var NOSE = [
     {name:'nose #1',price:78},
     {name:'nose #2',price:545},
     {name:'nose #3',price:96}
];

//HTML por categoria xd solo hay que cambiar nombre de lafuncion por la categoria
function HTMLpiezaProduct(con) {
      //Cuando se va a dar la url de las imagenes de los productos es preferible tenerlas separadas por categoria  img/tazas o img/platos eso depende de ti.
      //asi mismo en la url  el debe de ser algo asi img/categoriacarpeta/categoriacarptea${con}.jpeg
      let URL = `img/tazas/${con}.jpeg`;
      let btn = `btnPieza${con}`;
      return ` 
          <div class="col-md-4">
               <div class="card mb-4 shadow-sm">
                    <img class="card-img-top" style="height:16rem;" src="${URL}" alt="TARJETA IMAGEN">
                    <div class="card-body">
                         <i style="color:orange;" class="fa fa-star" ></i>
                         <i style="color:orange;" class="fa fa-star" ></i>
                         <i style="color:orange;" class="fa fa-star" ></i>
                         <i style="color:orange;" class="fa fa-star" ></i>
                         <i style="color:orange;" class="fa fa-star" ></i>

                         <p class="card-text">${PIEZA[con-1].name}</p>
                         <p class="card-text">${PIEZA[con-1].price}.00</p>
                         <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                   <button type="button" onclick="cart2('${PIEZA[con-1].name}','${PIEZA[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary"> <a href="cart.html" style="color:inherit;"> Comprar </a>
                                   </button>

                                   <button id="${btn}" type="button" onclick="cart ('${PIEZA[con-1].name}','${PIEZA[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Agregar
                                   </button> 
                              </div>
                              <small class="text-muted">
                                   Envio Gratis?
                              </small>
                         </div>
                    </div>
               </div>
          </div>
      `
}
 //HTML por categoria xd solo hay que cambiar nombre de lafuncion por la categoria
function HTMLotraProduct(con) {
     //Cuando se va a dar la url de las imagenes de los productos es preferible tenerlas separadas por categoria  img/tazas o img/platos eso depende de ti.
     //asi mismo en la url  el debe de ser algo asi img/categoriacarpeta/categoriacarptea${con}.jpeg
     let URL = `img/otro/${con}.jpeg`;
     let btn = `btnOtro${con}`;
     return ` 
         <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                   <img class="card-img-top" style="height:16rem;" src="${URL}" alt="TARJETA IMAGEN">
                   <div class="card-body">
                        <i style="color:orange;" class="fa fa-star" ></i>
                        <i style="color:orange;" class="fa fa-star" ></i>
                        <i style="color:orange;" class="fa fa-star" ></i>
                        <i style="color:orange;" class="fa fa-star" ></i>
                        <i style="color:orange;" class="fa fa-star" ></i>

                        <p class="card-text">${OTRA[con-1].name}</p>
                        <p class="card-text">${OTRA[con-1].price}.00</p>
                        <div class="d-flex justify-content-between align-items-center">
                             <div class="btn-group">
                                  <button type="button" onclick="cart2('${OTRA[con-1].name}','${OTRA[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary"> <a href="cart.html" style="color:inherit;"> Comprar </a>
                                  </button>

                                  <button id="${btn}" type="button" onclick="cart ('${OTRA[con-1].name}','${OTRA[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Agregar
                                  </button> 
                             </div>
                             <small class="text-muted">
                                  Envio Gratis?
                             </small>
                        </div>
                   </div>
              </div>
         </div>
     `
}
//HTML por categoria xd solo hay que cambiar nombre de lafuncion por la categoria
function HTMLnoseProduct(con) {
     //Cuando se va a dar la url de las imagenes de los productos es preferible tenerlas separadas por categoria  img/tazas o img/platos eso depende de ti.
     //asi mismo en la url  el debe de ser algo asi img/categoriacarpeta/categoriacarptea${con}.jpeg
     let URL = `img/nose/${con}.jpeg`;
     let btn = `btnNose${con}`;
     return ` 
         <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                   <img class="card-img-top" style="height:16rem;" src="${URL}" alt="TARJETA IMAGEN">
                   <div class="card-body">
                        <i style="color:orange;" class="fa fa-star" ></i>
                        <i style="color:orange;" class="fa fa-star" ></i>
                        <i style="color:orange;" class="fa fa-star" ></i>
                        <i style="color:orange;" class="fa fa-star" ></i>
                        <i style="color:orange;" class="fa fa-star" ></i>

                        <p class="card-text">${NOSE[con-1].name}</p>
                        <p class="card-text">${NOSE[con-1].price}.00</p>
                        <div class="d-flex justify-content-between align-items-center">
                             <div class="btn-group">
                                  <button type="button" onclick="cart2('${NOSE[con-1].name}','${NOSE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary"> <a href="cart.html" style="color:inherit;"> Comprar </a>
                                  </button>

                                  <button id="${btn}" type="button" onclick="cart ('${NOSE[con-1].name}','${NOSE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Agregar
                                  </button> 
                             </div>
                             <small class="text-muted">
                                  Envio Gratis?
                             </small>
                        </div>
                   </div>
              </div>
         </div>
     `
}
//Otra funcion papa xd para esta funcion hay que descargar e importar sweetalert2
function animation() {
      const toast = swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000
      }); 
      toast({
          type: 'success',
          title: 'Agregado al carrito de compra'
      });
}
//Funciones de las tajetas
function cart(name,price,url,con,btncart) {
      var item = {
           name:name,
           price:price,
           url:url
      }
      
      cartItems.push(item);
      let storage = JSON.parse(localStorage.getItem("cart"));

      if (storage == null) {
           products.push(item);
           localStorage.setItem("cart", JSON.stringify(products));
      } else {
           products = JSON.parse(localStorage.getItem("cart"));
           products.push(item);
           localStorage.setItem("cart", JSON.stringify(products));

      }
      products = JSON.parse(localStorage.getItem("cart"));
      cart_n.innerHTML = `[${products.length}]`;
      document.getElementById(btncart).style.display = "none";
      animation();
      
}
function cart2(name,price,url,con,btncart) {
     var item = {
          name:name,
          price:price,
          url:url
     }
     cartItems.push(item);

     let storage = JSON.parse(localStorage.getItem("cart"));

     if (storage == null) {
          products.push(item);
          localStorage.setItem("cart", JSON.stringify(products));
     } else {
          products = JSON.parse(localStorage.getItem("cart"));
          products.push(item);
          localStorage.setItem("cart", JSON.stringify(products));

     }
     products = JSON.parse(localStorage.getItem("cart"));
     cart_n.innerHTML = `[${products.length}]`;
     document.getElementById(btncart).style.display = "none";
}
 //Renedreizar los Productos
function render() {
     for (let index = 1; index <= 6; index++) {
          piezasDIV.innerHTML +=`${HTMLpiezaProduct(index)}`;
          //incluso podrias meter todas las funciones aqui pero en fin xd
     }
      //hacer funcion por cada categoria de productos
      
     for (let index = 1; index <= 3; index++) {
          otraDIV.innerHTML +=`${HTMLotraProduct(index)}`;
          noseDIV.innerHTML +=`${HTMLnoseProduct(index)}`;
     }
      
      //Haciendo la funcion del carrito de compras cy que cy xdxd 
     if (localStorage.getItem("cart") == null) {
           
     } else {
           products = JSON.parse(localStorage.getItem("cart"));
           cart_n.innerHTML = `[ ${products.length} ] `;
     }

}