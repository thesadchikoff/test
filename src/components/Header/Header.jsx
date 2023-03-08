import React from 'react'
import Telegram from '../../UI/Telegram'
import Container from '../Container/Container'
import Logo from '../../UI/Logo'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className='border-b'>
			<Container>
				<header className='w-full mobile:h-[80px] desktop:h-[110px] flex items-center'>
					<div className='w-full flex items-center justify-between'>
						<Link to={'/'} className='flex items-center gap-[10px]'>
							<Logo />
							<h1 className='gilroy text-[20px] font-bold m-0 p-0'>
								Movie Storage
							</h1>
						</Link>
						<div className='desktop:flex mobile:hidden items-center gap-[90px]'>
							<NavLink to={'/popular'}>Популярное сейчас</NavLink>
							<NavLink to={'/premiere'}>Премьеры</NavLink>
							<NavLink to={'/release'}>Цифровые релизы</NavLink>
						</div>
						<a
							href='https://t.me/ssssssssss_rk'
							target='_blank'
							className='w-max mobile:block desktop:hidden pr-2'>
							<Telegram />
						</a>
					</div>
				</header>
			</Container>
		</div>
	)
}

export default Header
