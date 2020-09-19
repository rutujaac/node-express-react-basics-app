import React, {Component} from 'react';

class MovieDetails extends Component {
    render() {
        return (
        <table key={this.props.movie.id}>
          <tbody>
            <tr>
            <td><img src={this.props.movie.posterPath} alt="poster" width="100"/></td>
            <td>
              <h4>{this.props.movie.title}</h4>
              <p>{this.props.movie.description}</p>
              <button>View</button>
              <button>Play</button>
            </td>
            </tr>
          </tbody>
        </table>
        );
    }
}

export default MovieDetails;