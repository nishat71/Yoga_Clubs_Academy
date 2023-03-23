// use local storage to manage cart data
const addToDb = (id) => {
  let yogaCart = {};
  localStorage.setItem("yoga-cart", JSON.stringify(yogaCart));


  
};



const getStoredCart = () => {
  // let yogaCart = {};
  // const storedCart = localStorage.getItem("yoga-cart");
  // if (storedCart) {
  //   yogaCart = JSON.parse(storedCart);
  // }
  // return yogaCart;
};

export { addToDb, getStoredCart };










// export { addToDb, getStoredCart };
// // use local storage to manage cart data
// const addToDb = (id) => {
//   let yogaCart = {};


//   //get the shopping cart from local storage
//   const storedCart = localStorage.getItem("yoga-cart");
//   if (storedCart) {
//     yogaCart = JSON.parse(storedCart);
//   }
//   else {
//     yogaCart = {};
//   }



//   // add quantity
//   const quantity = yogaCart[id];
//   if (quantity) {
//     const newQuantity = quantity + 1;
//     yogaCart[id] = newQuantity;
//   }
//   else {
//     yogaCart[id] = 1;
//   }
//   localStorage.setItem("yoga-cart", JSON.stringify(yogaCart));
// };



// const getStoredCart = () => {
//   let yogaCart = {};

//   //get the shopping cart from local storage
//   const storedCart = localStorage.getItem("yoga-cart");
//   if (storedCart) {
//     yogaCart = JSON.parse(storedCart);
//   }
//   return yogaCart;
// };



// //remove
// // const removeFromDb = (id) => {
// //   const storedCart = localStorage.getItem("yoga-cart");
// //   if (storedCart) {
// //     const yogaCart = JSON.parse(storedCart);
// //     if (id in yogaCart) {
// //       delete yogaCart[id];
// //       localStorage.setItem("yoga-cart", JSON.stringify(yogaCart));
// //     }
// //   }
// // };



// //delete shopping cart
// // const deleteShoppingCart = () => {
// //   localStorage.removeItem("yoga-cart");
// // };


// export { addToDb, getStoredCart,removeFromDb,deleteShoppingCart };
