import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import Footer from './Footer';

const Netflix = ({ 
  favouritecount, 
  cartcount, 
  setFavouriteCount, 
  setCartCount, 
  setMovieStatus, 
  movieStatus,
  moviesArray = []
}) => {

  return (
    <>
      <Navbar favouritecount={favouritecount} cartcount={cartcount} />

      <div className="movieList">
        {moviesArray.map((movie, index) => {
          const status = movieStatus?.[index] || { ismovieAdded: false, iscartAdded: false };

          return (
            <MovieCard
              key={index}
              moviename={movie.moviename}
              imageUrl={movie.imageUrl}
              description={movie.description}
              genre={movie.genre}
              rating={movie.rating}
              setFavouriteCount={setFavouriteCount}
              setCartCount={setCartCount}
              favouritecount={favouritecount}
              cartcount={cartcount}
              ismovieAdded={status.ismovieAdded}
              iscartAdded={status.iscartAdded}
              toggleFavourite={() => {
                const updated = [...movieStatus];
                updated[index] = {
                  ...updated[index],
                  ismovieAdded: !updated[index].ismovieAdded
                };
                setMovieStatus(updated);
              }}
              toggleCart={() => {
                const updated = [...movieStatus];
                updated[index] = {
                  ...updated[index],
                  iscartAdded: !updated[index].iscartAdded
                };
                setMovieStatus(updated);
              }}
            />
          );
        })}
      </div>
      < Footer />
    </>
  );
};

export default Netflix;
