import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineDollar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import styles from './Clients.module.scss'
const data = [
	{
		id: 1,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 2,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 3,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 4,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 5,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 6,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 7,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 8,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 9,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 10,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 11,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 12,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 13,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 14,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 15,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 16,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 17,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 18,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 19,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
	{
		id: 20,
		fullName: 'Jaxongir Mirhalikov',
		volume: '100metr',
		type: 'armatura',
		price: 4050,
		total: 1650,
		dollar: 5,
		som: 80000,
		give: 10,
		stay: 70000,
	},
]

const Clients = () => {
	// const [data, setData] = useState([])
	const [search, setSearch] = useState('')
	const [id, setId] = useState(0)
	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:3000/workers')
	// 		.then(res => setData(res.data))
	// 		.catch(err => console.log(err))
	// }, [])

	const filteredData = data.filter(
		el =>
			el.fullName.toLowerCase().includes(search.toLowerCase()) ||
			el.type.toLowerCase().includes(search.toLowerCase())
	)
	const navigate = useNavigate()
	const [showModal, setShowModal] = useState(false)

	return (
		<div className={`${styles.workers} container`}>
			<input
				type='text'
				placeholder='Qidirish'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<button className={styles.add_btn} onClick={() => setShowModal(true)}>Qoshish</button>
			{filteredData.length ? (
				<table className={`${styles.table} container`}>
					<thead>
						<tr>
							<th>Toliq Ism</th>
							<th>Xajmi</th>
							<th>Turi</th>
							<th>Narxi</th>
							<th>Jami</th>
							<th className={styles.course}>
								<AiOutlineDollar />
								<p> 20000232</p>
							</th>
							<th className={styles.course}>
								<p>So'm</p>
								<p>2000232</p>
							</th>
							<th>Berdi</th>
							<th>Qoldi</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map(el => (
							<tr key={el.id}>
								<td>{el.fullName}</td>
								<td>{el.volume}</td>
								<td>{el.type}</td>
								<td>{el.price}</td>
								<td>{el.total}</td>
								<td>{el.dollar}</td>
								<td>{el.som}</td>
								<td>{el.give}</td>
								<td>{el.stay}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<h1
					style={{
						width: '100%',
						height: '100dvh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'rgb(18, 129, 129)',
					}}
				>
					Xech narsa topilmadi :)
				</h1>
			)}
			{showModal && (
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					className={styles.modal}
				>
					<motion.form
						initial={{ transform: 'translateY(-100%)' }}
						animate={{ transform: 'translateY(0)' }}
						className={styles.addClient}
					>
						<h2>Klient Qoshish</h2>
						<input type='text' placeholder='Toliq Ism' />
						<input type='text' placeholder='Telefon nomer (ixtiyoriy)' />
						<button>Qoshish</button>
					</motion.form>
					<div
						className={styles.dark}
						onClick={() => setShowModal(false)}
					></div>
				</motion.div>
			)}
		</div>
	)
}

export default Clients
