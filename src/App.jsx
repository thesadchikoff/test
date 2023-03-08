import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import Logo from './UI/Logo'
import Container from './components/Container/Container'
import { Link, NavLink } from 'react-router-dom'
import Movie from './components/Movie/Movie'
import Telegram from './UI/Telegram'
import Header from './components/Header/Header'

function App() {
	const [movies, setMovies] = useState([])
	useEffect(() => {
		axios
			.get(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
				{
					headers: { 'X-API-KEY': '21a4979f-0100-4037-9d9b-8a2204f81150' },
				}
			)
			.then(res => setMovies(res.data.films))
	}, [])
	console.log(movies)
	return (
		<div className='py-[30px]'>
			<Container>
				{movies && (
					<div className='flex mobile:m-0 mobile:flex-col desktop:flex-row desktop:flex-wrap mobile:gap-10 desktop:gap-20'>
						{movies.map(movie => {
							return (
								<Link to={`/movie/${movie.filmId}`}>
									<Movie
										title={movie.nameRu}
										enTitle={movie.nameEn}
										countries={movie.countries}
										genres={movie.genres}
										year={movie.year}
										avatar={movie.posterUrl}
										rate={movie?.rating}
									/>
								</Link>
							)
						})}
					</div>
				)}
			</Container>
		</div>
	)
}

export default App
