import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'
import Workers from './components/workers/Workers'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Dashboard />} />
				<Route path='/workers' element={<Workers />} />
			</Routes>
		</>
	)
}

export default App
