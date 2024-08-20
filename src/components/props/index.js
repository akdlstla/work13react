const Props = (props) => {
    console.log(props);

    return (
        <>
            {' '}
            <div>
                <img style={{ width: 200, height: 300 }} src={props.movie} />
            </div>
            <div onClick={props.button1}>
                <img style={{ width: 150, height: 150 }} src={props.movie1} />
            </div>
            <div onClick={props.button2}>
                <img style={{ width: 150, height: 150 }} src={props.movie2} />
            </div>
            <div onClick={props.button3}>
                <img style={{ width: 150, height: 150 }} src={props.movie3} />
            </div>
        </>
    );
};

export default Props;
