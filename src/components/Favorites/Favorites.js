import React, { Component } from "react";
import { connect } from "react-redux";
// import { removeArticle } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions/index";

export class ConnectedList extends Component {

  handleSupr(movie){
    this.props.removeMovieFavorite(movie);
  }

  render() {
    return (
      <div>
        <div className="Header">
          <h2>Películas Favoritas</h2>
        </div>
        <ul className="ulFav">
        {this.props.movies.map((movie) => {
            return (
              <div className="Favorite" key={movie.id + "Fav"}>
                <Link to={`/movie/${movie.id}`}>
                  <li className="liFav" > {movie.title} </li>
                </Link>
                <button className="buttonDel" onClick={() => this.handleSupr({id: movie.id, title: movie.title})} >X</button>
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
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
