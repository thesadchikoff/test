import React from 'react'
import Rate from '../../UI/Rate'
import './Movie.scss'

const Movie = ({ title, genres, year, countries, avatar, enTitle, rate }) => {
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
	return (
		<div
			className={`mobile:w-full desktop:max-w-[511px] py-[10px] px-[10px] movie flex`}>
			<div className='w-[300px] relative'>
				<img
					className={`w-[200px] h-[250px] rounded-[10px] object-fill`}
					src={avatar}
					alt=''
				/>
				<div className={`w-full h-[50px] absolute bottom-0 shade`}>
					<div className='w-full relative h-full'>
						<div
							className={`absolute bottom-2 left-2 ${getRate(
								rate
							)} flex items-center gap-2`}>
							<Rate />
							{rate && <span>{rate}</span>}
						</div>
					</div>
				</div>
			</div>
			<div className='max-w-[300px] flex flex-col justify-between w-full pl-[19px]'>
				<div className='flex flex-col gap-[10px]'>
					<div className='border-b pb-[12px]'>
						<h1 className='font-bold mobile:text-1xl desktop:text-2xl'>
							{title}
						</h1>
						<span className='text-xs font-medium opacity-50'>{enTitle}</span>
					</div>
					<div className='flex flex-wrap gap-[5px] items-center'>
						{genres.map(genre => {
							return (
								<span className={`p-[5px] text-xs opacity-50`}>
									{genre.genre}
								</span>
							)
						})}
					</div>
				</div>

				<div className='flex items-center justify-between'>
					<span className='text-xs font-medium'>{countries[0].country}</span>
					<span className='text-xs'>{year} год</span>
				</div>
			</div>
		</div>
	)
}

export default Movie
