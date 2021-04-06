import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={()=>onSort("title")}>Title</th>
          <th scope="col" onClick={()=>onSort("genre.name")}>Genre</th>
          <th scope="col" onClick={()=>onSort("numberInStock")}>Stock</th>
          <th scope="col" onClick={()=>onSort("dailyRentalRate")}>Rate</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => {
          return (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => onLike(movie)}
                />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTable;