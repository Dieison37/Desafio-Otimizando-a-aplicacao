import { memo, useCallback, useMemo } from 'react';
import { SetStateAction, useEffect, useState } from "react";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

interface MovieProps {
  mdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
}


function ContentComponents({selectedGenreId, selectedGenre}: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then((response: { data: SetStateAction<MovieProps[]>; }) => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);
  return (
    
    <div className="container">

        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>

          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.mdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}

export const Content = memo(ContentComponents, (prevProps, nextProps) => {
return Object.is(prevProps.selectedGenreId, nextProps.selectedGenreId)
})

function Components(selectedGenreId: number, selectedGenre: GenreResponseProps): any {
  throw new Error('Function not implemented.');
}
function memoizedComponents(selectedGenre: GenreResponseProps): any {
  throw new Error('Function not implemented.');
}

function memoizedMovies(selectedGenre: GenreResponseProps): any {
  throw new Error('Function not implemented.');
}

