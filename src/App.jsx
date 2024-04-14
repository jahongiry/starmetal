import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Clients from './pages/clients/Clients'
import Consumption from './pages/consumption/Consumption'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import WorkerSinglePage from './pages/worker-single-page/WorkerSinglePage'
import Workers from './pages/workers/Workers'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Dashboard />} />
				<Route path='/workers' element={<Workers />} />
				<Route path='/consumption' element={<Consumption />} />
				<Route path='/clients' element={<Clients />} />
				<Route path='/worker/:id' element={<WorkerSinglePage />} />
			</Routes>
			<ToastContainer />
		</>
	)
}

export default App
