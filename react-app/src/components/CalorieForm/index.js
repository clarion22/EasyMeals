import React, {useState} from 'react'

function CalorieForm() {
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
    setTotalCal(totalCalories)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    calorieEquation()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>I am</label>
          <label>Female</label>
          <input type='radio' value="Female"  checked={gender === "Female"} onChange={(e) => setGender(e.target.value)}></input>
          <label>Male</label>
          <input type='radio' value="Male"  checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}></input>
        </div>
        <div>
          <label>Height</label>
          <input type="number" min="0" placeholder="ft" onChange={(e) => e.target.value < 0 ? setFeet(0) : setFeet(Number(e.target.value) * 12)}></input>
          <input type="number" min="0" placeholder="in" onChange={(e) => e.target.value < 0 ? setInches(0) : setInches(Number(e.target.value))}></input>
        </div>
        <div>
          <label>Weight</label>
          <input type='number' min="0" placeholder='ibs' onChange={(e) => e.target.value < 0 ? setWeight(0) : setWeight(Number(e.target.value))}></input>
        </div>
        <div>
          <label>Age</label>
          <input type='number' min="0" placeholder='years' onChange={(e) => e.target.value < 0 ? setAge(0) : setAge(Number(e.target.value))}></input>
        </div>
        <div>
        <select onChange={(e) => setActivity(e.target.value)}>
            {activityLevels.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        </div>
        <button type='submit'>Calculate</button>
      </form>
      <div>Total Cal {totalCal}</div>
    </div>
  )
}

export default CalorieForm
