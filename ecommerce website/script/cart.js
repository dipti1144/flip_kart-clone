import navbar from "../components/navbar.js"

import logincheck from "../utils/logincheck.js"





const status=logincheck();
if(!status){
    document.getElementById("cont").innerHTML=null;
   alert("Need to Login first");
   window.location.href="login.html"
}

let items=JSON.parse(localStorage.getItem("items"))||[];

let cartlength=(cart)=>{
    let length=cart.length
    let nav=document.getElementById("navbar");
    nav.innerHTML=navbar(length);
}

cartlength(items)

if(items.length==0){
    document.getElementById("cont").innerHTML=null;
    document.getElementById("length").innerText="Cart"
    
}



console.log(items)

let append=(data)=>{
    let box=document.getElementById("box");
    box.innerHTML=null;
    data.forEach((el)=>{
        
        const {qty}=el;
        
        let div=document.createElement("div");
        let image=document.createElement("img");
        let name=document.createElement("h3");
        let price=document.createElement("h3");
        let btn=document.createElement("button");
        btn.setAttribute("class","remove")
        btn.addEventListener("click",()=>{
            removeitem(el)
        })

        let quantity=document.createElement("p");
        let incqty=document.createElement("button");
        let decqty=document.createElement("button");

        quantity.innerText=qty
        incqty.innerText="+";
        incqty.style.backgroundColor="rgb(104, 192, 104)"
        decqty.innerText="-";
        decqty.style.backgroundColor="rgb(207, 70, 70)"


        incqty.addEventListener("click",()=>{
            handleqty(el,"+")
        })

        decqty.addEventListener("click",()=>{
            handleqty(el,"-")
        })

        let div1=document.createElement("div")
        div1.setAttribute("class","qty")

        let div2=document.createElement("div")
        div2.setAttribute("class","btn_div")

        image.src=el.image;
        name.innerText=el.category;
        price.innerText=`Price : ${el.price}`;
        btn.innerText="Remove"
        div1.append(incqty,quantity,decqty);
        div2.append(div1,btn)

        div.append(image,name,price,div2)
        box.append(div)

        
        
    })
}

append(items);

let total=()=>{
    // document.getElementById("total").innerHTML=null;
    let sum=0;
    for(let i=0;i<items.length;i++){
        sum+=items[i].price*items[i].qty;
    }
    console.log(Math.floor(sum))
    document.getElementById("amount").innerText=Math.floor(sum)
    let discount=document.getElementById("discount");

    let disc=Math.floor(sum*(20/100))

    discount.innerText=`- ${disc}`

    let gst=document.getElementById("gst");

    let gst_tax=Math.floor(sum*(18/100));
    gst.innerText=gst_tax

   let tPrice=document.getElementById("estimate")

    let estimate_total=Math.floor(sum- disc + gst_tax)
    tPrice.innerText=estimate_total

}
total()

let removeitem=(id)=>{
    // let items=JSON.parse(localStorage.getItem("items"))||[];
    items=items.filter((el)=>{
       return id.id!==el.id
    })
    console.log(items)
    localStorage.setItem("items",JSON.stringify(items));
    append(items)
    cartlength(items)
    total()
}

let details=document.getElementById("continue");

details.addEventListener("click",()=>{
    window.location.href="./details.html"
})

let handleqty=(data,type)=>{
    if(type=="+"){
        if(data.qty==5){
            alert("stock is not available")
            return
        }
        data.qty++
        append(items)
        localStorage.setItem("items",JSON.stringify(items))
        total()

    }else{
        if(data.qty==1){
           removeitem(data) 
           append(items)
           return
        }
        data.qty--
        append(items)
        localStorage.setItem("items",JSON.stringify(items))
        total()
    }

}