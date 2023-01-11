

const data=[

    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat","Hariyana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnnatka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajsthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttrakhand",
    "Uttar Pradesh",
    "West Bangal",
    "Andaman and Nicobar Island",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman & Dui",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh",
    "Lakshdweep",
    "Puducerry"

]



const statename=(data)=>{
    const state=document.getElementById("statename");

    data.map((el)=>{
        const option =document.createElement("option");
        option.innerText=el;
        option.value=el;

        state.append(option)
    })

}
statename(data)

let submit=()=>{
    let name=document.getElementById("name").value;
    let address1=document.getElementById("Address-1").value;
    let address2=document.getElementById("Address-2").value;
    let city=document.getElementById("city").value;
    let state=document.getElementById("statename").value;
    let pin=document.getElementById("pin").value;
    let mobile=document.getElementById("mob").value;

    if(!name || !address1 || !address2 || !city || !state || !pin || !mobile){
        alert("Enter your details first")
        return
    }
    if(mobile.length>10 || mobile.length<10){
        alert("mobile number should be of 10 digits")
        document.getElementById("mob").value=null
        
        return
    }

    let user={name, address1,address2,city, state,pin,mobile}
    
    localStorage.setItem("user_details",JSON.stringify(user))

    document.getElementById("name").value=null;
    document.getElementById("Address-1").value=null;
    document.getElementById("Address-2").value=null;
    document.getElementById("city").value=null;
    document.getElementById("statename").value=null;
    document.getElementById("pin").value=null;
    document.getElementById("mob").value=null;

    window.location.href="./payment.html"
    


}