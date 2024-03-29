import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { saveUserPlate } from '../../store/plate';
import './platetable.css';

function PlateSelect() {
	const dispatch = useDispatch();
	const selectedProtein = useSelector(
		(state) => state.recipe.selected.Protein
	);
	const selectedVegetables = useSelector(
		(state) => state.recipe.selected.Vegetables
	);
	const selectedFruit = useSelector((state) => state.recipe.selected.Fruit);
	const selectedDairy = useSelector((state) => state.recipe.selected.Dairy);
	const selectedCarb = useSelector((state) => state.recipe.selected.Carbs);
	const sessionUser = useSelector((state) => state.session.user);

	function createData(name, recipe, calories, servings) {
		return { name, recipe, calories, servings };
	}

	const [foodChange, setFoodChange] = useState(false);
	const [fullPlate, setFullPlate] = useState(false);
	const [buttonDisable, setButtonDisable] = useState(false);
	useEffect(() => {
		setFoodChange(true);
		if (
			selectedProtein &&
			selectedVegetables &&
			selectedFruit &&
			selectedDairy &&
			selectedCarb
		)
			setFullPlate(true);
	}, [
		selectedProtein,
		selectedVegetables,
		selectedFruit,
		selectedDairy,
		selectedCarb,
		fullPlate,
	]);

	const savePlate = (
		e,
		proteinId = selectedProtein.id,
		carbId = selectedCarb.id,
		fruitId = selectedFruit.id,
		vegetableId = selectedVegetables.id,
		dairyId = selectedDairy.id,
		serving = 1,
		userId = sessionUser.id
	) => {
		e.preventDefault();
		setButtonDisable(true);
		dispatch(
			saveUserPlate(
				proteinId,
				carbId,
				fruitId,
				vegetableId,
				dairyId,
				serving,
				userId
			)
		);
	};

	const rows = [
		createData(
			'Protein',
			`${selectedProtein ? selectedProtein.title : ''}`,
			`${selectedProtein ? selectedProtein.calories : ''}`,
			1
		),
		createData(
			'Fruits',
			`${selectedFruit ? selectedFruit.title : ''}`,
			`${selectedFruit ? selectedFruit.calories : ''}`,
			1
		),
		createData(
			'Dairy',
			`${selectedDairy ? selectedDairy.title : ''}`,
			`${selectedDairy ? selectedDairy.calories : ''}`,
			1
		),
		createData(
			'Vegetables',
			`${selectedVegetables ? selectedVegetables.title : ''}`,
			`${selectedVegetables ? selectedVegetables.calories : ''}`,
			1
		),
		createData(
			'Carbs',
			`${selectedCarb ? selectedCarb.title : ''}`,
			`${selectedCarb ? selectedCarb.calories : ''}`,
			1
		),
	];
	return (
		<>
			<TableContainer component={Paper} style={{ marginTop: '10px' }}>
				<Table className='' aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Food Group</TableCell>
							<TableCell
								align='right'
								style={{ minWidth: '200px' }}
							>
								Recipe
							</TableCell>
							<TableCell align='right'>Calories</TableCell>
							<TableCell align='right'>Servings</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>
									{row.recipe}
								</TableCell>
								<TableCell align='right'>
									{row.calories}
								</TableCell>
								<TableCell align='right'>
									{row.servings}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{fullPlate && sessionUser && !sessionUser.errors ? (
				<button
					className='save_btn save_btn_active'
					onClick={savePlate}
					disabled={buttonDisable}
				>
					Save your Plate
				</button>
			) : (
				<button className='save_btn' disabled>
					Select five recipes and login to save plate
				</button>
			)}
		</>
	);
}

export default PlateSelect;
