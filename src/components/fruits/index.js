import { Select, Input } from 'antd';
import movie1 from '../../image/movie1.jpg';
import movie2 from '../../image/movie2.jpg';
import movie3 from '../../image/movie3.jpg';
const FruitBox = (props) => {
    const ff = props.fruit;
    // console.log(props.fruit, '과일데이터');
    // console.log(props.background, '배경데이터');
    // console.log(props.color, '컬러데이터');

    return (
        <div>
            <div>
                과일:
                <Select
                    style={{ width: 150 }}
                    allowClear
                    options={props.fruitData}
                    onChange={(value) => {
                        props.setFruit(value);
                    }}
                />
            </div>
            <div>
                배경색:
                <Select
                    style={{ width: 150 }}
                    allowClear
                    options={props.colorData}
                    onChange={(value) => {
                        props.setbackground(value);
                    }}
                />
            </div>
            <div>
                글자색:
                <Select
                    style={{ width: 150 }}
                    allowClear
                    options={props.colorData}
                    onChange={(value) => {
                        props.setColor(value);
                    }}
                />
            </div>
            <div>
                내용{' '}
                <Input
                    onChange={(e) => {
                        console.log(e, '인풋');
                        props.setContent(e.target.value);
                    }}
                />
            </div>
            <img
                style={{ width: 100, height: 100 }}
                src={ff == 'apple' ? movie1 : ff == 'banana' ? movie2 : movie3}
                alt=""
            />
            <div style={{ backgroundColor: props.background, color: props.color }}>{props.content}</div>
        </div>
    );
};

export default FruitBox;
