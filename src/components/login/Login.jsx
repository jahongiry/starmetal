import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { TiWarningOutline } from 'react-icons/ti'
import styles from './Login.module.scss'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm()

	const [showPassword, setShowPassword] = useState(false)

	const onSubmit = async data => {
		try {
			reset({ phoneNumber: '', password: '' })
			console.log(data)
		} catch (error) {
			console.error('Error submitting login form:', error)
		}
	}

	// const onSubmit = async data => {
	// 	reset({ phoneNumber: '', password: '' })
	// }

	return (
		<div className={styles.login}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h2>Kirish</h2>
				<div className={styles.input}>
					<span>Foydalanuvchi nomizni kiriting</span>
					<input
						type='text'
						{...register('phoneNumber', {
							required: 'Foydalanuvchi nomi  kirtish shart',
						})}
					/>
					<p>
						{errors.phoneNumber ? <TiWarningOutline /> : <></>}
						{errors.phoneNumber?.message}
					</p>
				</div>
				<div className={styles.input}>
					<span>Parolni kiriting</span>
					<input
						type={showPassword ? 'text' : 'password'}
						{...register('password', {
							required: 'Parolni kiritish shart',
							minLength: {
								value: 4,
								message: 'Parol 4ta belgidan iborat bolishi kerak',
							},
						})}
					/>
					<button
						type='button'
						className={styles.show_btn}
						onClick={() => setShowPassword(v => !v)}
					>
						{showPassword ? <FaEyeSlash /> : <FaEye />}
					</button>
					<p>
						{errors.password ? <TiWarningOutline /> : <></>}
						{errors.password?.message}
					</p>
				</div>
				<button
					type='submit'
					className={styles.btn_full}
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Kirmoqda...' : 'Kirish'}
				</button>
			</form>
			<div className={styles.dark}></div>
		</div>
	)
}
export default Login
