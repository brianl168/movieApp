import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';


class Movie extends React.Component {
    
    componentDidMount(){
        const movieId = this.props.match.params.id;//Id de la pelicula
        this.props.getMovieDetail(movieId);
    }
    
    
    render() {
        return (
            <div className="container">
            { 
            <div className="movie-card">
                <h2 className="title">{this.props.MovieDetail.Title}</h2>
                <div className="description">
                    <p>Description: {this.props.MovieDetail.Plot}</p>
                </div>
                <div className="img">
                    <img src={this.props.MovieDetail.Poster} alt="No image was found." />
                </div>
                <div className="details">
                    <p>Release date: {this.props.MovieDetail.Year}</p>
                    <p>Rating:</p>
                    <ul className="Rating">
                        {this.props.MovieDetail.Ratings && this.props.MovieDetail.Ratings.map(r => {
                            return (
                                <li key={r.Source} >{r.Source}:  {r.Value}</li>
                                )
                            })}
                    </ul>
                    <p>Awards: {this.props.MovieDetail.Awards}</p>
                    <p>Genre: {this.props.MovieDetail.Genre}</p>
                </div>
            </div>
            }
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        MovieDetail: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: movie => dispatch(getMovieDetail(movie))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);