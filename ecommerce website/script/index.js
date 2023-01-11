import navbar from "../components/navbar.js"
import logincheck from "../utils/logincheck.js"


let items=JSON.parse(localStorage.getItem("items"))||[];




let cartlength=(cart)=>{
    let length=cart.length
    let nav=document.getElementById("navbar");
    nav.innerHTML=navbar(length);
}

cartlength(items)


let getData= async ()=>{
    let res=await fetch("https://fakestoreapi.com/products");
    res= await res.json();
    append(res)
    console.log(res)
}

getData()




let append=(data)=>{
    let cont=document.getElementById("container");
    cont.innerHTML=null;
    data.forEach((el,index)=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        let name=document.createElement("h3");
        let price=document.createElement("h3");
        let btn=document.createElement("button");


        image.src=el.image;
        name.innerText=el.category;
        price.innerText=`Price : ${el.price}`;
        btn.innerText="Add to cart"


        btn.addEventListener("click",()=>{
            if(addtocart(el.id)===true){
                const status=logincheck();
                if(!status){
                   alert("Need to Login first");
                   window.location.href="login.html"
                   return 
                }
                el.qty=1
                items=JSON.parse(localStorage.getItem("items"))||[];
                items.push(el)
                localStorage.setItem("items",JSON.stringify(items))
                cartlength(items)
                // alert("Product added successfully")
            }else{
                alert("product already in cart")
            }
        })

        div.append(image,name,price,btn)
        cont.append(div)
    })
}

let addtocart=(index)=>{

            for(let i=0;i<items.length;i++){
                if(items[i].id===index){
                    return false
                }
            }
            
        
    return true

    
}