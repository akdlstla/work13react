import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main1 from './components/main1';
import Main2 from './components/main2';
import Main3 from './components/main3';
import Main4 from './components/main4';
import PropsTest from './components/PropsTest';
import { useState } from 'react';
import movie1 from './image/movie1.jpg';
import movie2 from './image/movie2.jpg';
import movie3 from './image/movie3.jpg';
import Props from './components/props';
import Price from './components/price';
import FruitBox from './components/fruits';

// function App() {
//     return (
//         <div className="App">
//             <Header />
//             <Main1 />
//             <Main2 />
//             <div className="mainBox">
//                 <Main3 />
//                 <Main4 />
//             </div>
//             <Footer />
//         </div>
//     );
// }

// function App() {
//     const data = {
//         color: 'red',
//     };
//     const data1 = {
//         color: 'green',
//     };
//     const data2 = {
//         color: 'blue',
//     };

//     return (
//         <>
//             <PropsTest data={data}/>
//             <PropsTest data={data1}/>
//             <PropsTest data={data2}/>
//         </>
//     );
// }

// export default App;

// import React, { useState } from 'react';

// const SayFunction = () => {
//     const [message, setMessage] = useState('');
//     const onClickEnter = () => {
//         setMessage('안녕하세요');
//     };
//     const onClickLeave = () => {
//         setMessage('안녕히 가세용~');
//     };
//     return (
//         <div>
//             <button onClick={onClickEnter}>입장</button>
//             <button onClick={onClickLeave}>퇴장</button>
//             <div>{message}</div>
//         </div>
//     );
// };

// export default SayFunction;

// function App() {
//     const [number, setNumber] = useState(0);
//     const Count = () => {
//         setNumber('야옹');
//     };
//     const Countm = () => {
//         setNumber(number - 1);
//     };
//     // return (
//     //     <div>
//     //         <button onClick={Count}>+</button>
//     //         <div>{number}</div>
//     //         <button onClick={Countm}>-</button>
//     //     </div>
//     // );
//     return (
//         <>
//             {/* <button onClick={Count}>+</button> */}
//             <img style={{ width: 300, height: 300 }} src={movie1} alt="" />
//             <PropsTest number={number} Count={Count} Countm={Countm} />
//             {/* <button onClick={Countm}>-</button> */}
//         </>
//     );
// }
// export default App;

// function App() {
//     {
//         const [movie, setMovie] = useState(movie1);
//         const button1 = () => {
//             setMovie(movie1);
//         };
//         const button2 = () => {
//             setMovie(movie2);
//         };
//         const button3 = () => {
//             setMovie(movie3);
//         };

//         const [count, setCount] = useState(0);
//         const plus = () => {
//             setCount(count + 1);
//         };
//         const minus = () => {
//             setCount(count - 1);
//         };
//         return (
//             <>
//                 <Props
//                     button1={button1}
//                     button2={button2}
//                     button3={button3}
//                     movie1={movie1}
//                     movie2={movie2}
//                     movie3={movie3}
//                     movie={movie}
//                 />
//                 <Price count={count} plus={plus} minus={minus} />
//             </>
//         );
//     }
// }
// export default App;

function App() {
    const list = ['a', 'b', 'c', 'd', 'e'];

    const animals = ['dog', 'cat', 'rabbit'];

    const newAnimals = animals.filter((animal, i) => {
        // return animal.length > 3;
        //includes는 쿼리문의 like와 비슷한 역할을 함
        return animal.includes('a');
    });
    console.log(newAnimals, '새로운 데이터');

    //애초에 false면 뒤에있는 hello는 읽지도 않음
    const result = false && 'Hello';
    console.log(result);

    const name = 'dugong';
    const greeting = name && `Hello, ${name}!`;
    //둘 다 참이면 뒤에걸 출력
    console.log(greeting);

    const defaultName = 'dugong';
    const userName = null;
    const displayName = userName || defaultName;
    console.log(displayName);

    const result2 = true || 'Hello';
    console.log(result2);

    const listData = [
        {
            id: 0,
            name: '철수',
            age: 20,
            like: ['농구', '축구', '배구', '야구'],
        },
        {
            id: 1,
            name: '덕배',
            age: 20,
            like: ['농구', '축구', '배구', '야구'],
        },
        {
            id: 2,
            name: '춘식',
            age: 20,
        },
        {
            id: 3,
            name: '석삼',
            age: 20,
            like: ['농구', '축구', '배구', '야구'],
        },
    ];
    return (
        <div>
            {listData.map((x, i) => {
                return (
                    <div style={{ marginBottom: 40 }} key={i + 'listData'}>
                        <div>ID:{x.id}</div>
                        <div>이름:{x.name}</div>
                        <div>나이:{x.age}</div>
                        <div>주소:{i}</div>
                        <div>
                            {/* ?는 있으면 실행하고 없으면 pass 하라는 뜻 */}
                            {x.like ? (
                                <div>
                                    {x.like.map((a, b) => {
                                        return a;
                                    })}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
    // const items = listData.map((x, i) => {
    //     console.log('x는 뭐지?', x);
    //     //console.log('arr:', arr);
    //     return x;
    // });

    // console.log(items, '뭘까요?');

    // const [fruit, setFruit] = useState('사과');
    // const [background, setbackground] = useState('black');
    // const [color, setColor] = useState('black');
    // const [content, setContent] = useState('');

    // const FruitData = [
    //     { value: 'apple', label: '사과' },
    //     { value: 'banana', label: '바나나' },
    //     { value: 'peach', label: '복숭아' },
    // ];
    // const ColorData = [
    //     { value: 'red', label: '빨강' },
    //     { value: 'black', label: '검정' },
    //     { value: 'green', label: '초록' },
    // ];

    // return (
    // <>
    //     <FruitBox
    //         fruit={fruit}
    //         background={background}
    //         color={color}
    //         content={content}
    //         fruitData={FruitData}
    //         colorData={ColorData}
    //         setFruit={setFruit}
    //         setbackground={setbackground}
    //         setColor={setColor}
    //         setContent={setContent}
    //     />
    // </>
    // );
}
export default App;

// function App() {
//     const name = 'gildwerweron';
//     const styles = {
//         backgroundColor: 'yellow',
//         color: 'red',
//         fontSize: '40px',
//     };
//     const name1 = '로이';
//     const animal1 = '강아지';

//     const a = 6;
//     const b = 7;
//     const c = 8;

//     const title = 'Hello World';

//     return (
//         <>
//             <div className="App">
//                 안녕하세요 ^^
//                 {/*JSX 문법 */}
//                 {/* 1. 하나로 감싸인 요소 */}
//                 {/*2. javascript 표현식 사용
//                 -{}로 감싸면 js 표현식 사용 가능
//                 -{}에서 삼항 연산자 사용 가능 (if문 안된다) */}
//                 {/*3. style 속성(인라인)
//             -리액트에서 돔 요소에 스타일 적용시 문자열 x -> 객체 사용
//             - 스타일 속성 이름 중에서 하이픈 (-) 포함시 camelCase사용 */}
//                 <div>{name}안녕하세요!</div>
//                 <div>{name === 'gildon' ? 'gildon 입니다.' : '누구세요?'}</div>
//                 <div style={{ backgroundColor: 'blue', color: 'white', fontSize: '40px' }}>스타일 적용!</div>
//                 <div style={styles}>스타일 적용2</div>
//                 <div>실습1</div>
//                 <div>제 반려 동물의 이름은 {name1}입니다.</div>
//                 <div>
//                     {name1}은 {animal1}입니다
//                 </div>
//                 <div>실습2</div>
//                 <div>{3 + 5 === 8 ? '정답입니다' : '오답입니다'}</div>
//                 <div>
//                     {/* 삼항 연산자 쓸 때는 함수랑 같이 쓰고 싶으면 +나 ,를 쓴다 */}
//                     {a < b < c
//                         ? b + '는' + a + '보다 크고' + c + '보다 작습니다'
//                         : b + '는' + a + '보다 작고' + c + '보다 큽니다'}
//                 </div>
//                 <div>
//                     {title}
//                     <br></br>
//                     id<input type="text"></input>
//                     <br></br>
//                     password<input type="password"></input>
//                     <br></br>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default App;
