import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import GroceryImg from './Images/undraw_online_groceries.svg';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import './home.css';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '65vh',
		backgroundColor: '#a4ffb6',
		top: 0,
		display: 'flex',
		maxWidth: '100vw',
		flexDirection: 'column',
	},
	grid: {
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {},
	},
	extra: {
		[theme.breakpoints.up('md')]: {
			backgroundColor: '#a4ffb6',
			height: '90vh',
		},
	},
	imageDiv: {
		[theme.breakpoints.down('sm')]: {
			height: '60vh',
			padding: '20px 0',
			display: 'flex',
			justifyContent: 'center',
		},
		[theme.breakpoints.up('md')]: {
			padding: '0 20px',
			height: '80vh',
		},
	},
	textDiv: {
		backgroundColor: '#a4ffb6',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			marginTop: '20%',
			padding: '10px',
		},
	},
	title: {
		fontWeight: 'bold',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '3vw',
		},
	},
	subheading: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '2vw',
		},
	},
}));

export default function Home() {
	const classes = useStyles();
	return (
		<Grid container className={classes.grid}>
			<Grid item xs={0} md={0}>
				<div className={classes.extra}></div>
			</Grid>
			<Grid item xs={12} md={6} style={{ backgroundColor: '#a4ffb6' }}>
				<div className={classes.textDiv}>
					<span className={classes.title}>Easy Meals</span>
					<span className={classes.subheading}>
						Create nutritionally balanced meal plans to fit your
						lifestyle and fitness needs.
					</span>
					<div className='getstarted_btn'>
						<NavLink id='started_link' to={'/createplate'}>
							GET STARTED
						</NavLink>
					</div>
				</div>
			</Grid>
			<Grid item xs={12} md={6} style={{ backgroundColor: '#a4ffb6' }}>
				<div style={{ backgroundColor: '#a4ffb6' }}>
					<div className={classes.imageDiv}>
						<img src={GroceryImg} style={{ height: '100%' }} />
					</div>
				</div>
			</Grid>
			<Grid item xs={12}>
				<div className='home_footer'>
					<div className='home_links'>
						<a href='https://github.com/clarion22/EasyMeals'>
							<GitHubIcon />
						</a>
						<a href='https://linkedin.com/in/olga-thompson-35937515a'>
							<LinkedInIcon />
						</a>
						<a href=''>
							<LanguageIcon />
						</a>
					</div>
					<div className='home_footer_name'>© 2021 Olga Thompson</div>
				</div>
			</Grid>
		</Grid>
	);
}
