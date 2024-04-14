import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import './DataPicker.css'

function DatePicker() {
	const data = new Date()
	const [value, setValue] = useState(dayjs(data))
	const date = {
		year: value.$y,
		month: value.$M,
		day: value.$D,
	}
	console.log(date)

	const theme = createTheme({
		palette: {
			primary: {
				main: '#00FFFF',
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={['DateCalendar']}>
					<DemoItem label='Controlled calendar'>
						<DateCalendar
							value={value}
							onChange={newValue => setValue(newValue)}
							className='dateCalendar'
						/>
					</DemoItem>
				</DemoContainer>
			</LocalizationProvider>
		</ThemeProvider>
	)
}

export default DatePicker
