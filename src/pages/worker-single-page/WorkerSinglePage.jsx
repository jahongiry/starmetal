import { useParams } from 'react-router-dom'
import styles from './WorkerSinglePage.module.scss'
const WorkerSinglePage = () => {
	const { id } = useParams()
	// const worker = data.filter(worker => worker.id === pathname)
	return (
		<div className={styles.worker}>
			<h2>{id}</h2>
		</div>
	)
}

export default WorkerSinglePage
