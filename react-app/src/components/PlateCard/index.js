import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import { useSelector, useDispatch } from 'react-redux';
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import {
	loadUserPlates,
	deletePlate,
	addPlateToFavorite,
	removePlateFavorite,
} from '../../store/plate';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard';
import PlateDatePicker from '../PlateDatePicker';
import { addPlateToCalendar } from '../../store/calendar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavButton from '../FavButton';
import './platecard.css';
const imageUrl =
	'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg';

const useStyles = makeStyles({
	root: {
		maxWidth: 620,
		boxShadow: '5px 3px 11px 1px rgba(0,0,0,0.5)',
		marginTop: 50,
		boxSizing: 'border-box',
		padding: 25,
	},
	media: {
		height: 140,
	},
	avatar: {
		backgroundColor: green[900],
	},
	card: {
		minWidth: 300,
		display: 'inline-block',
	},
});

function PlateCard() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(loadUserPlates(sessionUser.id));
	}, [dispatch]);

	const plates = useSelector((state) => Object.values(state.plate.all));
	const [loaded, setLoaded] = useState(false);
	const [pickedDate, setPickedDate] = useState(new Date());

	useEffect(() => {
		if (plates && plates.length && sessionUser && sessionUser.id)
			setLoaded(true);
	}, [plates.length]);

	const handleDelete = (plateId) => {
		dispatch(deletePlate(plateId));
	};

	const addToCalendar = (plate) => {
		dispatch(
			addPlateToCalendar(
				`Plate ${plate.id}`,
				sessionUser.id,
				pickedDate.toISOString(),
				plate.id,
				'/'
			)
		);
	};

	const handleSavePlate = (plateId) => {
		dispatch(addPlateToFavorite(plateId));
	};

	const handleUnsavePlate = (plateId) => {
		dispatch(removePlateFavorite(plateId));
	};

	useEffect(() => {
		console.log('picked date', pickedDate);
	}, [pickedDate]);

	if (plates && plates.length === 0) return '';

	if (!loaded) {
		return <div>Loading...</div>;
	}

	return (
		<div
			style={{
				minWidth: '100%',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
			}}
		>
			{plates.map((plate, i) => (
				<Paper key={i} className={classes.root}>
					<Grid
						container
						spacing={1}
						style={{ wordBreak: 'break-word' }}
					>
						<Grid item xs={12}>
							<CardHeader
								avatar={
									<Avatar
										aria-label='recipe'
										className={classes.avatar}
									>
										R
									</Avatar>
								}
								title={`Plate ${plate.id} `}
								subheader={plate.date}
							/>
						</Grid>
						<Grid item container direction='column' xs={6}>
							<RecipeCard i={plate.id} foodGroup={'carbs'} />
							<RecipeCard i={plate.id} foodGroup={'protein'} />
							<RecipeCard i={plate.id} foodGroup={'fruit'} />
						</Grid>
						<Grid item container direction='column' xs={6}>
							<RecipeCard i={plate.id} foodGroup={'vegetables'} />
							<RecipeCard i={plate.id} foodGroup={'dairy'} />
							<PlateDatePicker setPickedDate={setPickedDate} />
							<button onClick={() => addToCalendar(plate)}>
								Add to calendar
							</button>
							<FavButton
								plateId={plate.id}
								favorite={plate.favorite}
							/>
							<button
								style={{ marginTop: '50px' }}
								onClick={() => handleDelete(plate.id)}
							>
								Delete
							</button>
						</Grid>
					</Grid>
				</Paper>
			))}
		</div>
	);
}

export default PlateCard;
