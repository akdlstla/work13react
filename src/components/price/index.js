const Price = (props) => {
    console.log(props);

    return (
        <>
            <button onClick={props.plus}>+</button>
            <div id="totalPrice">{12000 * props.count}</div>
            <button onClick={props.minus}>-</button>
        </>
    );
};
// const totalPrice = document.querySelector('#totalPrice');
// console.log(totalPrice.value);

export default Price;
