/**
 * Conexion a la api de firebase
 */
//VARIABLES GLOBALES
var products = JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total = 0;
//HTML
function tableHTML(i) {
     return `
          <tr>
               <th scope="col"> ${i + 1} </th>
               <td>
                    <img style="width:90px; src="${products[i].url}">
               </td>
               <td>${products[i].name}</td>
               <td>1</td> 
               <td>${products[i].price}</td>
          </tr>
     `;
}
//Funcion para realizar la compra
function buy() {
     var d = new Date();
     var t = d.getTime();
     var counter = t;
     counter += 1;
     //conexion a Firebase
     let db = firebase.database().ref("orden/"+counter);
     let itemdb = {
          id:counter,
          order:counter-895,
          total:total
     }
     db.set(itemdb);
     swal({
          position:'center',
          type:'success',
          title:'Su compr a sido realizada',
          text:`Tu orden de compra es: ${itemdb.order}`,
          showConfirmButton:true,
          timer:50000
     });
     clean();

}
function clean() {
     localStorage.clear();
     for (let index = 0; index < products.length; index++) {
          table.innerHTML+=tableHTML(index);
          total = total + parseInt(products[index].price);          
     }
     total = 0;
     table.innerHTML = `
     <tr>
          <th scope="col">  </th>
          <th></th>
          <th></th>
          <th></th> 
          <th></th>
     </tr>
     `;
     cart_n.innerHTML='';
     document.getElementById("btnBuy").style.display="none";
     document.getElementById("btnClean").style.display="none";
     
}


//Funcion para renderizar el html
function render() {
     for (let index = 0; index < products.length; index++) {
          table.innerHTML+=tableHTML(index);
          total = total+parseInt(products[index].price);
     }
     table.innerHTML+=`
     <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th> 
          <th scope="col">Total: $${total}.00</th>
     </tr>
     <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">
               <button id="btnClean" onclick="clean()" class="btn  text-white btn-warning">
               Limpiar Carrito de compras
               </button>
          </th> 
          <th scope="col">
               <button id="btnBuy" onclick="buy()" class="btn btn-success">Comprar</button>
          </th>
     </tr>

     `;
     products = JSON.parse(localStorage.getItem("cart"));
     cart_n.innerHTML = `[${products.length}] `;
     
}