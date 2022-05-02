import React from "react";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import "./app.scss";
import { Route, Routes, useParams } from "react-router-dom";
import Dugme from "./nesto";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [likedCharacters, setLikedCharacters] = useState(
    JSON.parse(localStorage.getItem("likedCharacters")) || []
  );

  const nextPage = () => {
    if (page < 42) setPage((p) => p + 1);
  };

  const previousPage = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const addLikedCharacter = (id) => {
    setLikedCharacters([...likedCharacters.filter((e) => e != id), id]);
  };

  const removeLikedCharacter = (id) => {
    setLikedCharacters(likedCharacters.filter((e) => e != id));
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results));
  }, [page]);

  useEffect(
    () =>
      localStorage.setItem("likedCharacters", JSON.stringify(likedCharacters)),
    [likedCharacters]
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              characters={characters}
              likedCharacters={likedCharacters}
              addLikedCharacter={addLikedCharacter}
              removeLikedCharacter={removeLikedCharacter}
              previousPage={previousPage}
              nextPage={nextPage}
              page={page}
              setPage={setPage}
            ></Home>
          }
        ></Route>
        <Route
          path="characters/:id"
          element={
            <SinglePage
              characters={characters}
              likedCharacters={likedCharacters}
              addLikedCharacter={addLikedCharacter}
              removeLikedCharacter={removeLikedCharacter}
            ></SinglePage>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
