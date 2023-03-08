import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Popular from './screens/Popular/Popular'
import Movie from './screens/Movie/Movie'
import Layout from './components/Layout/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/popular' element={<Popular />} />
					<Route path='/movie/:id' element={<Movie />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
)
