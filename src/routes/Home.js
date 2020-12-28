import React from "react";
import axios from "axios";
import Moive from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  //axios를 쓰는 방법 1
  //따로 함수를 만들어서 호출하기 함수에는 async, axios에는 await
  getMovies = async () => {
    // axios가 완료될 때까지 좀 걸려서 await을 넣음
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); //ES6 문법사용해서 movies:movies라는 것을 보여준다.
  };
  componentDidMount() {
    this.getMovies();
  }
  //axios를 쓰는 방법 2
  //자바스크립트한테 좀 걸리다고 말하려면 async를 사용해야함
  // async componentDidMount(){
  //   const moives = axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  // }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Moive
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
