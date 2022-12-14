import { useCallback, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<'GenreResponseProps'>({} as 'GenreResponseProps');

const handleClickButton = useCallback((id) => {
  setSelectedGenreId(id);
}, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />
      <Content selectedGenre = {selectedGenre} selectedGenreId = {selectedGenreId} />
    </div>
  )
}