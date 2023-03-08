import React from 'react'

const Container = ({ children }) => {
	return (
		<div className='desktop:container mobile:px-[10px] desktop:m-auto mobile:m-0'>
			{children}
		</div>
	)
}

export default Container
