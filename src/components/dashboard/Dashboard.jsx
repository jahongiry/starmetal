import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FaRegUserCircle, FaUsers } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
	const navigate = useNavigate()
	return (
		<div className={`${styles.dashboard} container`}>
			<div className={styles.card} onClick={() => navigate('/workers')}>
				<p>Ishchilar</p>
				<FaUsers />
			</div>
			<div className={styles.card} onClick={() => navigate('/clients')}>
				<p>Klient</p>
				<FaRegUserCircle />
			</div>
			<div className={styles.card}>
				<p>Rasxodlar</p>
				<AiOutlineDollarCircle />
			</div>
		</div>
	)
}

export default Dashboard
