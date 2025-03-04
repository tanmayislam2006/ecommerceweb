let cartItmes=0;
let total=0;
const  section=document.getElementById("popular-collection");
section.addEventListener("click",function(event){
   if (event.target.tagName === "BUTTON") {
    const button=event.target
    const accesPrice=button.parentNode.parentNode.children[2].innerText;
      cartItmes++
      const shoppingBtn=document.getElementById("cart-icon")
      shoppingBtn.innerText=cartItmes
      const inpopupCart=document.getElementById("total-added-itmes");
      inpopupCart.innerText=cartItmes
      total+=parseFloat(accesPrice);
      const totalPrice=document.getElementById("total-price");
      totalPrice.innerText=`$${total}`
    
   }
});
document.getElementById("shopping")
.addEventListener("click",function(event){
   const popUp=document.getElementById("pop-up")
   popUp.classList.remove("hidden")
})
document.getElementById("continue")
.addEventListener("click",function(){
   const popUp=document.getElementById("pop-up")
   popUp.classList.add("hidden")

})