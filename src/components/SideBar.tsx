
import { SetStateAction, useEffect, useMemo, useState } from "react";
import { Sidebar } from "react-feather";
import { api } from "../services/api";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
} 


interface SidebarProps {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({handleClickButton, selectedGenreId}: SidebarProps) {



  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response: { data: SetStateAction<GenreResponseProps[]>; }) => {
      setGenres(response.data);
    });
  }, []);



  async function addToWishlist(id: number) {
    console.log(id);
  }

  const moviesName = useMemo (() => genres, [setGenres])



  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">

          <h2>{setGenres}</h2>
          
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}

