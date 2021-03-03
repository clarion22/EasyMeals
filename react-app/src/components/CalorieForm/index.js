import React, {useState} from 'react'

function CalorieForm() {
  const [gender, setGender] = useState('Female');
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(0);

  const activityLevels = [
    {value: 1, label: "Sedentary (little or no exercise)"},
    {value: 2, label: "Lightly active (light exercise/sports 1-3 days/week)"},
    {value: 3, label: "Moderately active (moderate exercise/sports 3-5 days/week)"},
    {value: 4, label: "Very active (hard exercise/sports 6-7 days a week)"},
    {value: 5, label: "Extra active (very hard exercise/sports & a physical job"}
  ];

  return (
    <div>
      <form>
        <div>
          <label>I am</label>
          <label>Female</label>
          <input type='radio' value="Female"  checked={gender === "Female"} onChange={(e) => setGender(e.target.value)}></input>
          <label>Male</label>
          <input type='radio' value="Male"  checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}></input>
        </div>
        <div>
          <label>Height</label>
          <input type="number" placeholder="ft" onChange={(e) => setFeet(Number(e.target.value) * 12)}></input>
          <input type="number" placeholder="in" onChange={(e) => setInches(Number(e.target.value))}></input>
        </div>
        <div>
          <label>Weight</label>
          <input type='number' placeholder='ibs' onChange={(e) => setWeight(Number(e.target.value))}></input>
        </div>
        <div>
          <label>Age</label>
          <input type='number' placeholder='years' onChange={(e) => setAge(Number(e.target.value))}></input>
        </div>
        <select onChange={(e) => setActivity(e.target.value)}>
            {activityLevels.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
      </form>
    </div>
  )
}

export default CalorieForm
