  
  


  let form=document.getElementById("submit");

  form.addEventListener("click",()=>{

    let email=document.getElementById("email").value
    let password=document.getElementById("password").value ;

    if(!email || !password){
        alert("Empty input")
        return
    }

    let payload={
        email,
        password
    }
   
    login(payload)

  })


  let login=async(payload)=>{
    try{
        let res=await fetch(`https://reqres.in/api/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload),
        })
        let data=await res.json();

        console.log(data);
        alert("success");
        localStorage.setItem("token",JSON.stringify(data))
        window.location.href="./index.html"

    }catch(err){
        console.log(err);
        alert("not match")
    }
}