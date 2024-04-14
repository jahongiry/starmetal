import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Workers.module.scss'
const data = [
	{
		id: 1,
		fullName: 'John Doe',
		phoneNumber: '+1234567890',
		day: 'Monday',
		price: 60000,
		give: 25000,
		left: 35000,
	},
	{
		id: 2,
		fullName: 'Jane Smith',
		phoneNumber: '+1987654321',
		day: 'Tuesday',
		price: 80000,
		give: 30000,
		left: 50000,
	},
	{
		id: 3,
		fullName: 'David Johnson',
		phoneNumber: '+1122334455',
		day: 'Wednesday',
		price: 70000,
		give: 20000,
		left: 50000,
	},
	{
		id: 4,
		fullName: 'Emily Davis',
		phoneNumber: '+1654321876',
		day: 'Thursday',
		price: 90000,
		give: 35000,
		left: 55000,
	},
	{
		id: 5,
		fullName: 'Michael Wilson',
		phoneNumber: '+1443322110',
		day: 'Friday',
		price: 75000,
		give: 30000,
		left: 45000,
	},
	{
		id: 6,
		fullName: 'Sophia Martinez',
		phoneNumber: '+1555099887',
		day: 'Saturday',
		price: 65000,
		give: 27000,
		left: 38000,
	},
	{
		id: 7,
		fullName: 'Daniel Anderson',
		phoneNumber: '+1765432109',
		day: 'Sunday',
		price: 85000,
		give: 32000,
		left: 53000,
	},
	{
		id: 8,
		fullName: 'Olivia Thomas',
		phoneNumber: '+1998877665',
		day: 'Monday',
		price: 70000,
		give: 28000,
		left: 42000,
	},
	{
		id: 9,
		fullName: 'Ethan Hernandez',
		phoneNumber: '+1223456789',
		day: 'Tuesday',
		price: 95000,
		give: 38000,
		left: 57000,
	},
	{
		id: 10,
		fullName: 'Ava Moore',
		phoneNumber: '+1888777665',
		day: 'Wednesday',
		price: 72000,
		give: 30000,
		left: 42000,
	},
	{
		id: 11,
		fullName: 'James Clark',
		phoneNumber: '+1555123498',
		day: 'Thursday',
		price: 88000,
		give: 34000,
		left: 54000,
	},
	{
		id: 12,
		fullName: 'Isabella Allen',
		phoneNumber: '+1333444555',
		day: 'Friday',
		price: 68000,
		give: 26000,
		left: 42000,
	},
	{
		id: 13,
		fullName: 'William Adams',
		phoneNumber: '+1777888999',
		day: 'Saturday',
		price: 93000,
		give: 38000,
		left: 55000,
	},
	{
		id: 14,
		fullName: 'Mia Scott',
		phoneNumber: '+1999666777',
		day: 'Sunday',
		price: 82000,
		give: 32000,
		left: 50000,
	},
	{
		id: 15,
		fullName: 'Benjamin Baker',
		phoneNumber: '+1444777999',
		day: 'Monday',
		price: 76000,
		give: 29000,
		left: 47000,
	},
	{
		id: 16,
		fullName: 'Charlotte Young',
		phoneNumber: '+1555888999',
		day: 'Tuesday',
		price: 98000,
		give: 39000,
		left: 59000,
	},
	{
		id: 17,
		fullName: 'Matthew Lewis',
		phoneNumber: '+1666777888',
		day: 'Wednesday',
		price: 74000,
		give: 30000,
		left: 44000,
	},
	{
		id: 18,
		fullName: 'Amelia King',
		phoneNumber: '+1333222777',
		day: 'Thursday',
		price: 89000,
		give: 34000,
		left: 55000,
	},
	{
		id: 19,
		fullName: 'Elijah Wright',
		phoneNumber: '+1888444333',
		day: 'Friday',
		price: 71000,
		give: 27000,
		left: 44000,
	},
	{
		id: 20,
		fullName: 'Harper Lopez',
		phoneNumber: '+1999222777',
		day: 'Saturday',
		price: 94000,
		give: 38000,
		left: 56000,
	},
	{
		id: 21,
		fullName: 'Alexander Hill',
		phoneNumber: '+1555888666',
		day: 'Sunday',
		price: 83000,
		give: 31000,
		left: 52000,
	},
	{
		id: 22,
		fullName: 'Evelyn Wood',
		phoneNumber: '+1333777888',
		day: 'Monday',
		price: 77000,
		give: 30000,
		left: 47000,
	},
	{
		id: 23,
		fullName: 'Daniel Perez',
		phoneNumber: '+1444333222',
		day: 'Tuesday',
		price: 99000,
		give: 40000,
		left: 59000,
	},
	{
		id: 24,
		fullName: 'Ella Taylor',
		phoneNumber: '+1666999888',
		day: 'Wednesday',
		price: 75000,
		give: 28000,
		left: 47000,
	},
	{
		id: 25,
		fullName: 'Ryan Baker',
		phoneNumber: '+1888222999',
		day: 'Thursday',
		price: 90000,
		give: 34000,
		left: 56000,
	},
	{
		id: 26,
		fullName: 'Mila Green',
		phoneNumber: '+1222333444',
		day: 'Friday',
		price: 72000,
		give: 28000,
		left: 44000,
	},
	{
		id: 27,
		fullName: 'Noah Martinez',
		phoneNumber: '+1777333444',
		day: 'Saturday',
		price: 95000,
		give: 37000,
		left: 58000,
	},
	{
		id: 28,
		fullName: 'Aria Adams',
		phoneNumber: '+1999111222',
		day: 'Sunday',
		price: 84000,
		give: 32000,
		left: 52000,
	},
	{
		id: 29,
		fullName: 'Liam Scott',
		phoneNumber: '+1555666777',
		day: 'Monday',
		price: 78000,
		give: 32000,
		left: 46000,
	},
	{
		id: 30,
		fullName: 'Scarlett King',
		phoneNumber: '+1333666555',
		day: 'Tuesday',
		price: 101000,
		give: 42000,
		left: 59000,
	},
	{
		id: 31,
		fullName: 'Jacob Wright',
		phoneNumber: '+1888555666',
		day: 'Wednesday',
		price: 76000,
		give: 31000,
		left: 45000,
	},
	{
		id: 32,
		fullName: 'Avery Lopez',
		phoneNumber: '+1999222555',
		day: 'Thursday',
		price: 91000,
		give: 36000,
		left: 55000,
	},
	{
		id: 33,
		fullName: 'Logan Hill',
		phoneNumber: '+1555666888',
		day: 'Friday',
		price: 73000,
		give: 29000,
		left: 44000,
	},
	{
		id: 34,
		fullName: 'Emma Wood',
		phoneNumber: '+1333666999',
		day: 'Saturday',
		price: 96000,
		give: 38000,
		left: 58000,
	},
	{
		id: 35,
		fullName: 'Evan Perez',
		phoneNumber: '+1444999888',
		day: 'Sunday',
		price: 85000,
		give: 33000,
		left: 52000,
	},
	{
		id: 36,
		fullName: 'Ava Taylor',
		phoneNumber: '+1666777999',
		day: 'Monday',
		price: 79000,
		give: 33000,
		left: 46000,
	},
	{
		id: 37,
		fullName: 'Daniel Baker',
		phoneNumber: '+1777333999',
		day: 'Tuesday',
		price: 102000,
		give: 43000,
		left: 59000,
	},
	{
		id: 38,
		fullName: 'Grace Green',
		phoneNumber: '+1222333555',
		day: 'Wednesday',
		price: 78000,
		give: 31000,
		left: 47000,
	},
	{
		id: 39,
		fullName: 'William Martinez',
		phoneNumber: '+1777222333',
		day: 'Thursday',
		price: 92000,
		give: 37000,
		left: 55000,
	},
	{
		id: 40,
		fullName: 'Chloe Adams',
		phoneNumber: '+1999333444',
		day: 'Friday',
		price: 74000,
		give: 29000,
		left: 45000,
	},
	{
		id: 41,
		fullName: 'Mason Scott',
		phoneNumber: '+1555999888',
		day: 'Saturday',
		price: 97000,
		give: 39000,
		left: 58000,
	},
	{
		id: 42,
		fullName: 'Avery King',
		phoneNumber: '+1333222666',
		day: 'Sunday',
		price: 86000,
		give: 33000,
		left: 53000,
	},
	{
		id: 43,
		fullName: 'Lucas Wright',
		phoneNumber: '+1888666555',
		day: 'Monday',
		price: 80000,
		give: 32000,
		left: 48000,
	},
	{
		id: 44,
		fullName: 'Zoe Lopez',
		phoneNumber: '+1999111666',
		day: 'Tuesday',
		price: 103000,
		give: 44000,
		left: 59000,
	},
	{
		id: 45,
		fullName: 'Liam Hill',
		phoneNumber: '+1555777888',
		day: 'Wednesday',
		price: 79000,
		give: 31000,
		left: 48000,
	},
	{
		id: 46,
		fullName: 'Grace Wood',
		phoneNumber: '+1333444555',
		day: 'Thursday',
		price: 93000,
		give: 37000,
		left: 56000,
	},
	{
		id: 47,
		fullName: 'Elijah Perez',
		phoneNumber: '+1444888999',
		day: 'Friday',
		price: 75000,
		give: 30000,
		left: 45000,
	},
	{
		id: 48,
		fullName: 'Sophia Taylor',
		phoneNumber: '+1666666777',
		day: 'Saturday',
		price: 98000,
		give: 40000,
		left: 58000,
	},
	{
		id: 49,
		fullName: 'Alexander Baker',
		phoneNumber: '+1777888999',
		day: 'Sunday',
		price: 87000,
		give: 34000,
		left: 53000,
	},
	{
		id: 50,
		fullName: 'Madison Adams',
		phoneNumber: '+1999111222',
		day: 'Monday',
		price: 81000,
		give: 33000,
		left: 48000,
	},
]

const Workers = () => {
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
			el.phoneNumber.toLowerCase().includes(search.toLowerCase())
	)
	const navigate = useNavigate()
	const handleClikc = id => {
		setId(id)
		navigate(`/worker/${id}`)
	}
	return (
		<div className={`${styles.workers} container`}>
			<input
				type='text'
				placeholder='Qidirish'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			{filteredData.length ? (
				<table className={`${styles.table} container`}>
					<thead>
						<tr>
							<th>Full name</th>
							<th>Phone number</th>
							<th>Price</th>
							<th>Give</th>
							<th>Left</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map(el => (
							<tr key={el.id} onClick={() => handleClikc(el.id)}>
								<td>{el.fullName}</td>
								<td>{el.phoneNumber}</td>
								<td>{el.price}</td>
								<td>{el.give}</td>
								<td>{el.left}</td>
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
		</div>
	)
}

export default Workers
