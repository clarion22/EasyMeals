import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserEvents, deletePlateFromCalendar } from '../../store/calendar';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import SideNavigation from '../SideNavigation';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import './calendar.css';

function Calendar() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const plateEvents = useSelector((state) => Object.values(state.calendar));
	const events = [
		{
			title: "today's event",
			start: '2021-03-09T14:30:00',
			url: 'google.com',
		},
	];
	const [loaded, setLoaded] = useState(false);
	const [open, setOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState();
	const handleClick = (e) => {
		if (e.event.url) {
			e.jsEvent.preventDefault();
			setSelectedEvent(e.event._def.publicId);
			handleClickOpen();
		} else {
			console.log('event', e);
		}
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDeleteEvent = () => {
		dispatch(deletePlateFromCalendar(parseInt(selectedEvent)));
		setOpen(false);
	};

	useEffect(() => {
		if (sessionUser) dispatch(loadUserEvents(sessionUser.id));
	}, [dispatch]);

	useEffect(() => {
		if (plateEvents.length) setLoaded(true);
	}, [plateEvents.length]);

	return (
		<div
			style={{
				height: '100%',
				bottom: 0,
				backgroundColor: '#f4fff8',
				display: 'flex',
			}}
		>
			<SideNavigation />
			<div className='calendar_wrapper'>
				<FullCalendar
					defaultView='dayGridMonth'
					plugins={[dayGridPlugin, timeGridPlugin]}
					events={plateEvents}
					eventClick={handleClick}
					headerToolbar={{
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay',
					}}
				/>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby='alert-dialog-title'
				>
					<DialogTitle id='alert-dialog-title'>
						{'Are you sure you want to delete plate?'}
					</DialogTitle>
					<DialogActions>
						<Button onClick={handleClose} color='primary'>
							No
						</Button>
						<Button
							onClick={handleDeleteEvent}
							color='primary'
							autoFocus
						>
							Yes
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}

export default Calendar;
