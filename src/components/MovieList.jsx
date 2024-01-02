import Movie from "./Movie";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie, i) => (
        <Movie movie={movie} key={i} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
