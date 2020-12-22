import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating:5
      // npm으로 prop-types를 설치함
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating:4.9

    },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating:4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating:5.5
      
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating:4.7
  }
];
// 1. 기존 방법
// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like potato</h1>
// }
// 2. ES6 문법
function Food({name, picture, rating}) {
  return<div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    {/* iamge element는 alt prop이 반드시 있어야한다. 시각장애인들을 위해서 */}
  </div> 
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  // isRequired를 사용하면 required와 type을 체크할 수 있다. 대신
  // isRequired를 사용하지 않으면 type만 체크할 수 있다.
}

// 요즘 방식
// function renderFood({name, image}){
//   return(<Food name = {name} picture = {image}/>);
// }
//옛날 방식 
// function renderFood(dish){
//   return(<Food name = {dish.name} picture = {dish.image}/>);
// }
//key는 react의 내부적인 동작을 위해서 사용하는 것이다. 특히 반복적으로 해야할 때 필요
function App() {
  return(
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating = {dish.rating}/>
      ))}
    </div>
  );
}

export default App;
