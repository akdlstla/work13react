const PropsTest = (props) => {
    return (
        <>
            <button onClick={props.Count}>+</button>
            <div>{props.number}</div>
            <button onClick={props.Countm}>-</button>
        </>
    );
};

export default PropsTest;
