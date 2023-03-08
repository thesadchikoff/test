import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Movie.scss'
import Rate from '../../UI/Rate'

const Movie = () => {
	const [movie, setMovie] = useState(null)
	const [staffs, setStaffs] = useState([])
	const [arts, setArts] = useState([])
	const getRate = rating => {
		if (rating > 7) {
			return 'good_rate'
		}
		if (rating > 4) {
			return 'normal_rate'
		} else {
			return 'bad_rate'
		}
	}
	const { id } = useParams()
	useEffect(() => {
		axios
			.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
				headers: { 'X-API-KEY': '754e24f2-5197-4634-96eb-c9026d9fc031' },
			})
			.then(res => setMovie(res.data))
		axios
			.get(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`, {
				headers: { 'X-API-KEY': '754e24f2-5197-4634-96eb-c9026d9fc031' },
			})
			.then(res => setStaffs(res.data))
		axios
			.get(
				`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`,
				{
					headers: { 'X-API-KEY': '754e24f2-5197-4634-96eb-c9026d9fc031' },
				}
			)
			.then(res => setArts(res.data.items))
	}, [])
	console.log(movie)
	console.log(staffs)
	return (
		<div>
			{movie ? (
				<>
					<div className='flex flex-col gap-5 pb-10'>
						<img
							className='mobile:w-full desktop:w-[400px]'
							src={movie.posterUrl}
							alt=''
						/>
						<div className='w-full px-3 flex items-center justify-between'>
							<span className='font-bold'>{movie.nameRu}</span>
							<div
								className={`${getRate(
									movie.ratingKinopoisk
								)} flex items-center gap-2`}>
								<Rate />
								{movie.ratingKinopoisk && <span>{movie.ratingKinopoisk}</span>}
							</div>
						</div>
						<p className='px-3 text-xs opacity-60'>{movie.description}</p>
						<h1 className='px-3 font-bold mb-[10px]'>Актерский состав</h1>
						<div className='px-3 w-full pb-4 desktop:hidden whitespace-nowrap overflow-x-scroll overflow-y-hidden'>
							{staffs &&
								staffs.map(staff => {
									return (
										<div className='inline-block'>
											<img
												className='rounded-lg w-[160px] h-[250px] object-fill mr-[30px] mb-[15px]'
												src={staff.posterUrl}
												alt=''
											/>
											<div className='flex flex-col gap-2'>
												<span className='font-medium'>{staff.nameRu}</span>
												<span className='text-xs opacity-60'>
													{staff.professionText}
												</span>
											</div>
										</div>
									)
								})}
						</div>
						<h1 className='px-3 font-bold mb-[10px]'>Кадры</h1>
						<div className='px-3 w-full pb-4 mobile:block desktop:hidden whitespace-nowrap overflow-x-scroll overflow-y-hidden'>
							{arts.length > 0 ? (
								arts.map(art => {
									return (
										<div className='w-full inline-block'>
											<img
												className='rounded-lg w-[350px] h-[250px] object-cover mr-[20px] mb-[15px]'
												src={art.imageUrl}
												alt=''
											/>
										</div>
									)
								})
							) : (
								<div className='w-full px-3 flex flex-col justify-center items-center h-[250px] rounded-lg border'>
									<h1 className='font-medium opacity-60'>Данные отсутствуют</h1>
								</div>
							)}
						</div>
					</div>
				</>
			) : (
				<div className='w-full h-[500px] flex flex-col items-center justify-center'>
					<h1 className='font-bold text-xl'>Запрос к Кинопоиску...</h1>
				</div>
			)}
		</div>
	)
}

export default Movie
