

import navbar from "../components/navbar.js"

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


let form=document.getElementById("submit");

form.addEventListener("click",()=>{




    let name=document.getElementById("name").value ;
    let email=document.getElementById("email").value ;
    let password=document.getElementById("password").value ;
    let number=document.getElementById("number").value ;

    // console.log("deepti")
   
    // Validation for form

    if(!name || !email || !number || !password){
        alert("Empty Input")
    }

    // create payload;

    // email="eve.holt@reqres.in";
    // password="pistol";
    let payload={
        email,
        password
    }

    // post request;

    fetch("https://reqres.in/api/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then((res)=>{
        return res.json()
        
        
    }).then((res)=>{
        console.log(res)
        alert(`success ${res.token}`)
        
        window.location.href="./login.html"
    
    }).catch((err)=>{
        console.log(res)
        alert("not able to register")
    })

    

})