
window.addEventListener("load",()=>{
    card();
})

let items=JSON.parse(localStorage.getItem("items"))||[]
let user=JSON.parse(localStorage.getItem("user_details"))

let card=()=>{

    let btn1=document.getElementById("upi");
    btn1.style.backgroundColor = "skyblue"

    let btn=document.getElementById("card");
    btn.style.backgroundColor = "white"

    let box=document.getElementById("box1")

    box.innerHTML=null;
    let cont=document.getElementById("box1");
    let div=document.createElement("div");
    div.setAttribute("id","form");
    let p=document.createElement("p");
    p.innerText="Card number"
    let input=document.createElement("input");
    input.setAttribute("type","number")

    input.setAttribute("id","one")
    input.setAttribute("required","")
    input.required=true;

    let p1=document.createElement("p");
    p1.innerText="Card holder name"
    let input1=document.createElement("input");

    input1.setAttribute("id","two")


    let p3=document.createElement("p");
    p3.innerText="Expiry date"
    let input2=document.createElement("input");
    input2.setAttribute("type","month")

    input2.setAttribute("id","three")
   
    let p4=document.createElement("p");
    p4.innerText="CVV"

    let d1=document.createElement("div");
    d1.setAttribute("id","div1")

    let input3=document.createElement("input");
    input3.setAttribute("type","number")

    input3.setAttribute("id","four")
    
    let img=document.createElement("img");
    img.src="https://static.naukimg.com/s/7/123/i/cvv.30afa5f9.png"


   

    let p5=document.createElement("p");
    p5.innerText="3 digits printed on the back of the card"

    
   let d2=document.createElement("div");
   d2.setAttribute("id","d2");

   let input4=document.createElement("input");
   input4.setAttribute("type","checkbox");

   input4.setAttribute("id","five")

   let p6=document.createElement("p");
   p6.innerText="I agree to Terms and Conditions."
   
   p6.setAttribute("id","p6")
   let button=document.createElement("button");
   button.innerText="MAKE PAYMENT";

   button.setAttribute("id","pay")

   button.onclick=()=>{
    makepayment();
   }


   d2.append(input4,p6)
   d1.append(input3,img,p5)

   div.append(p,input,p1,input1,p3,input2,p4,d1,d2,button)
  
   cont.append(div)



}

let makepayment=()=>{
    
    let cardnumber=document.getElementById("one").value;
    let name=document.getElementById("two").value;
    let exp_date=document.getElementById("three").value;
    let cvv=document.getElementById("four").value;
    let five=document.getElementById("five").value;
    console.log(one)
    
    if(!cardnumber || !name || !exp_date || !cvv || !five){
        alert("Fill valid card details")
        return;
    }

    if(cardnumber.length>16 || cardnumber.length<16){
        alert("Please enter valid card no.")
        return
    }

    if(cvv.length>3 || cvv.length<3){
        alert("please enter valid cvv no.")
        return
    }

    window.location.href="./otp.html"

    let card_datails={cardnumber, name, exp_date, cvv}

    // user.card_datails
    

    
    


}


let upi=()=>{



    let box=document.getElementById("box1")

    box.innerHTML=null;
    

    let btn1=document.getElementById("card");
    btn1.style.backgroundColor = "skyblue"

    let btn=document.getElementById("upi");
    btn.style.backgroundColor = "white"

    let p=document.createElement("p");
    p.innerText="Enter Your Virtual Payment Address";

    p.setAttribute("id","ptag")

    let input=document.createElement("input");

    input.setAttribute("id","intbox")
    input.placeholder="e.g. Yourname@bank"


    let div=document.createElement("div");
    div.setAttribute("id","flex-d")

    let input4=document.createElement("input");
   input4.setAttribute("type","checkbox");



   let p6=document.createElement("p");
   p6.innerText="I agree to Terms and Conditions, Privacy Statement. Naukri will automatically continue your subscription and charge the monthly membership fee to your payment method until you cancel. You may cancel your subscription at any time."
     
   p6.setAttribute("id","p6")
   div.append(input4,p6)

   let button=document.createElement("button");
   button.innerText="MAKE PAYMENT";

   button.setAttribute("id","pay")

   button.onclick=()=>{
    payment();
   }


box.append(p,input,div,button)


}



let payment=()=>{
    let query=document.getElementById("intbox").value;
    if(!query){
        alert("Fill valid details")
        return
    }
            window.location.href="./otp.html"

    
}



let total=()=>{
    
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