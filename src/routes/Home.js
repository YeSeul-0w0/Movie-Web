import {useEffect, useState} from "react";
import Movie from "../component/Movie";
import {SimpleGrid} from "@chakra-ui/react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMoives = async() => {
        const json = await (await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.2&sort_by=year")).json()
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMoives()
    }, []);
    return (
        <div>
            {loading ? <h1>Loading ..</h1> :
                <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
                    {movies.map((movie) => (
                        <Movie
                            key = {movie.id}
                            id = {movie.id}
                            coverImg = {movie.medium_cover_image}
                            title = {movie.title}
                            summary = {movie.summary}
                            genres = {movie.genres}
                        />
                    ))}
                </SimpleGrid>}
        </div>
    );
}

export default Home;