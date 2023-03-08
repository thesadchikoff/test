import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
	const [movie, setMovie] = useState(null)

	const { id } = useParams()
	useEffect(() => {
		axios
			.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
				headers: { 'X-API-KEY': '21a4979f-0100-4037-9d9b-8a2204f81150' },
			})
			.then(res => setMovie(res.data))
	}, [])
	return (
		<div>{movie ? <div>Movie {movie.nameRu}</div> : <h1>Movie {id}</h1>}</div>
	)
}

export default Movie
