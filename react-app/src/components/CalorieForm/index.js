import React, {useState} from 'react'
import './calorieform.css'


function CalorieForm({setTotalCals, setRecommendation}) {
  const [gender, setGender] = useState('Female');
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(1);
  const [totalCal, setTotalCal] = useState(0)

  const activityLevels = [
    {value: 1, label: "Sedentary (little or no exercise)"},
    {value: 2, label: "Lightly active (light exercise/sports 1-3 days/week)"},
    {value: 3, label: "Moderately active (moderate exercise/sports 3-5 days/week)"},
    {value: 4, label: "Very active (hard exercise/sports 6-7 days a week)"},
    {value: 5, label: "Extra active (very hard exercise/sports & a physical job"}
  ];


  const calorieEquation = () => {
    let totalCalories = 0;
    let bmr = 0;
    const height = inches + feet;
    const multiplier = {1:1.2, 2:1.375, 3:1.55, 4:1.725, 5:1.9}
    if (gender==="Male") {
      bmr = (4.536 * weight) + (15.88 * height) - (5 * age) + 5
    } else {
      bmr = (4.536 * weight) + (15.88 * height) - (5 * age) - 161
    }
    totalCalories = bmr * multiplier[activity]
    totalCalories > 0 ? setTotalCals(Math.round(totalCalories)) : setTotalCal(0)
  }

  const recommendedSetter = (foodObj={}, fruitAmt, fruitUnit, vegAmount, vegUnit, carbAmnt, carbUnit, dairyAmnt, dairyUnit, proteinAmnt, proteinUnit) => (
    foodObj.fruit.amount = fruitAmt,
    foodObj.fruit.unit = fruitUnit,
    foodObj.vegetables.amount = vegAmount,
    foodObj.vegetables.unit = vegUnit,
    foodObj.carbs.amount = carbAmnt,
    foodObj.carbs.unit = carbUnit,
    foodObj.dairy.amount = dairyAmnt,
    foodObj.dairy.unit = dairyUnit,
    foodObj.protein.amount = proteinAmnt,
    foodObj.protein.unit = proteinUnit
)

  const calculateRecommended = () => {
    const recommended = {fruit: {amount: 0, unit: "cups"}, dairy: {amount: 0, unit: ""},  vegetables: {amount: 0, unit: ""}, carbs: {amount: 0, unit: ""}, protein: {amount: 0, unit: ""}}
    switch(gender) {
      case "Female":
        if (age >= 9 && age <= 13) {
          recommendedSetter(recommended, 1, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else if (age >=14 && age <= 18) {
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else if  (age >= 10 && age <= 31) {
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else if (age >= 35 && age <= 50){
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else if (age >=51) {
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else {
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        }
        case "Male":
        if (age >= 9 && age <= 13) {
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else if (age >=14 && age <= 18) {
          recommendedSetter(recommended, 1.5, "cups", 3, "cups", 3, "oz", 3, "cups", 5, "oz")
          break;
        } else if  (age >= 10 && age <= 31) {
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else if (age >= 35 && age <= 50){
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else if (age >=51) {
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        } else {
          recommendedSetter(recommended, 1.5, "cups", 2, "cups", 5, "oz", 3, "cups", 5, "oz")
          break;
        }
        default:
        console.log('did not reach cases')
    }
    console.log('in the right fun', recommended)
    setRecommendation(recommended);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('reached on submit')
    calculateRecommended()
  }

  return (
    <div className='form_wrapper'>
      <form onSubmit={onSubmit} className='calorie_form'>
        <div className="row_container">
          <label>I am</label>
          <div>
          <label>Female</label>
          <input style={{margin: '0 8px'}} type='radio' value="Female"  checked={gender === "Female"} onChange={(e) => setGender(e.target.value)}></input>
          <label>Male</label>
          <input style={{margin: '0 8px'}} type='radio' value="Male"  checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}></input>
          </div>
        </div>
        <div className="row_container">
          <label>Height</label>
          <input type="number" min="0" placeholder="ft" onChange={(e) => e.target.value < 0 ? setFeet(0) : setFeet(Number(e.target.value) * 12)}></input>
          <input type="number" min="0" placeholder="in" onChange={(e) => e.target.value < 0 ? setInches(0) : setInches(Number(e.target.value))}></input>
        </div>
        <div className="row_container">
          <label>Weight</label>
          <input type='number' min="0" placeholder='ibs' onChange={(e) => e.target.value < 0 ? setWeight(0) : setWeight(Number(e.target.value))}></input>
        </div>
        <div className="row_container">
          <label>Age</label>
          <input type='number' min="0" placeholder='years' onChange={(e) => e.target.value < 0 ? setAge(0) : setAge(Number(e.target.value))}></input>
        </div>
        <div className="row_container">
        <label>Activity</label>
        <select onChange={(e) => setActivity(e.target.value)}>
            {activityLevels.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        </div>
        <div className='btn_wrapper'>
          <button className="calorie_btn" type='button' onClick={calorieEquation}>Calculate</button>
        </div>
          <hr></hr>
        <div className="row_container">
        <label>Input calories</label>
        <input type='number' min="0" onChange={(e) => setTotalCal(Number(e.target.value))}></input>
      </div>
      <div>Total Cal {totalCal}</div>
      <div className='btn_wrapper'>
        <button type='submit' className="calorie_btn">Submit</button>
      </div>
      </form>
    </div>
  )
}

export default CalorieForm
