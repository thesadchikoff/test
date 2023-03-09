import React from 'react'
import Header from '../Header/Header'
import { FaHome } from 'react-icons/fa'
import { MdMovieFilter } from 'react-icons/md'
import { RiMovie2Fill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<main className='pb-[60px]'>{children}</main>
			<div className='desktop:hidden px-3 w-full h-[70px] fixed left-0 bg-sky-50 border-t bottom-0 flex justify-between items-center text-slate-800'>
				<NavLink to={'/'} className='flex items-center flex-col gap-2'>
					<FaHome className='text-2xl' />
					<span className='text-xs'>Главная</span>
				</NavLink>
				<NavLink to={'/popular'} className='flex items-center flex-col gap-2'>
					<MdMovieFilter className='text-2xl' />
					<span className='text-xs'>Популярное</span>
				</NavLink>
				<NavLink to={'/release'} className='flex items-center flex-col gap-2'>
					<RiMovie2Fill className='text-2xl' />
					<span className='text-xs'>Релизы</span>
				</NavLink>
			</div>
		</div>
	)
}

export default Layout
