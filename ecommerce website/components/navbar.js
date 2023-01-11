

let navbar=(length=0)=>{

    let items=JSON.parse(localStorage.getItem("items"))
    if(items){
        length=items.length;
    }
    
    return `<div>
    <h3>Flip_Kart</h3>
    <h3>
        <a href="./index.html">Home</a>
    </h3>
    <h3>
        <a href="./regester.html">Register</a>
    </h3>
    <h3>
        <a href="./cart.html" id=length>Cart : ${length}</a>
    </h3>
    
</div>`
}

export default navbar;