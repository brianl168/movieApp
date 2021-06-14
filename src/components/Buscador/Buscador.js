import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies} from "../../actions";



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  handleFav(movie) {
    this.props.addMovieFavorite(movie);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="Buscador">
        <div className="Searchbar">
          <h2>Buscador</h2>
          <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label className="label" htmlFor="title">Película: </label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          <button type="submit">BUSCAR</button>
          </form>
        </div>
        <ul className="ListMo">
          {this.props.movies && this.props.movies.map((movie) => {
            return (
              <div className="Movie" key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <li className="nameTitle"> {movie.Title} </li>
                </Link>
                <button className="AddButton" onClick={(e) => {
                  this.handleFav({title: movie.Title, id: movie.imdbID})
                  alert("The movie is now in favourites!")
                }
                } >Add in fav</button>
              </div>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
