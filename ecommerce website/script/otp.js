

const input1=document.getElementById("int1")
const input2=document.getElementById("int2")
const input3=document.getElementById("int3")
const input4=document.getElementById("int4")

input1.focus();

input1.addEventListener("input",()=>{
    if(input1.value){
        input2.focus()
    }
})

input2.addEventListener("input",()=>{
    if(input2.value){
        input3.focus()
    }
    if(input2.value.length===0){
        input1.focus()
     }
})

input3.addEventListener("input",()=>{
    if(input3.value){
        input4.focus()
    }
    if(input3.value.length===0){
        input2.focus()
     }
})

input4.addEventListener("input",()=>{
    if(input4.value.length===0){
       input3.focus()
    }
})

const submit=document.getElementById("submit");

submit.addEventListener("click",()=>{
    // alert("done")
    const otp=input1.value + input2.value + input3.value + input4.value;

    const originalOTP="1234";

    if(otp===originalOTP){
        alert("payment successfull");
        const orderDetails=JSON.parse(localStorage.getItem("user_details"))
       
        orderDetails.paymentStatus="success"
        console.log(orderDetails)

        localStorage.setItem("finalOrderSuccess",JSON.stringify(orderDetails))
        
        localStorage.removeItem("items");
        localStorage.removeItem("user_details")
        
        // show the success ui

        let otpdiv=document.getElementById("otp");
        otpdiv.innerHTML=null;

        const h1=document.createElement("h1");
        h1.innerText="Thank you for shopping with us"
        h1.style.color="teal"

        otpdiv.append(h1)

        setTimeout(()=>{
            window.location.href="./index.html"
        },3000)


        return;
    }

    alert("failure")
    input1.value=null;
    input2.value=null;
    input3.value=null;
    input4.value=null;


})