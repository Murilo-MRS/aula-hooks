function Counter() {
    let quantity = 10;

    function upQuantity() {
        quantity = quantity + 1;
        document.getElementById("counter-box").innerHTML = quantity
    }

    function downQuantity() {
        quantity = quantity - 1;
        document.getElementById("counter-box").innerHTML = quantity
    }

    return(
        <>
        <h1 id="counter-box">{quantity}</h1>
        <button onClick={upQuantity}>+</button>
        <button onClick={downQuantity}>-</button>
        </>
        
    )
}

export default Counter;