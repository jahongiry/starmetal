import { useState } from 'react'
import { toast } from 'react-toastify'
import DatePicker from '../../components/data-picker/DataPicker'
import styles from './consumption.module.scss'

const Consumption = () => {
	const [viewConsumptions, setViewConsumptions] = useState([])
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')

	const handleAddConsumptions = () => {
		if (name.length === 0 || price.length === 0) {
			toast.error('Nom yoki narxni kiritish shart')
			return
		}

		setViewConsumptions(p => [...p, { name, price }])
		setName('')
		setPrice('')
	}
	return (
		<div className={`${styles.consumption} container`}>
			<div className={styles.create_consumption}>
				<form>
					<h2>Rasxod:</h2>
					<div className={styles.inputs}>
						<input
							type='text'
							placeholder='Nomi'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<input
							type='number'
							placeholder='Narxi'
							value={price}
							onChange={e => setPrice(e.target.value)}
						/>
					</div>
					<button type='button' onClick={handleAddConsumptions}>
						Qoshish
					</button>
				</form>
				{viewConsumptions.length ? (
					<ol className={styles.show_consumptions}>
						{viewConsumptions.map((el, inx) => (
							<li key={inx}>
								{el.name} - {el.price}so'm
							</li>
						))}
					</ol>
				) : (
					<></>
				)}
			</div>
			<div className={styles.view_cnsumptions}>
				<DatePicker />
				<div className={styles.sum}>
					<h2>20000so'm</h2>
				</div>
			</div>
		</div>
	)
}

export default Consumption
