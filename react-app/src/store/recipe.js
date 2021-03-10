const LOAD_RECIPES = "recipes/loadRecipes";
const SELECT_FOOD = "recipes/selectFood"
const RESET_FOOD = "recipes/resetFood"

export const loadRecipes = (recipes) => {
  return {
    type: LOAD_RECIPES,
    payload: recipes,
  };
};

export const selectFood = (recipe) => {
  return {
    type: SELECT_FOOD,
    payload: recipe
  }
}

export const resetFood = () => {
  return {
    type: RESET_FOOD,
  }
}

export const getRecipes = () => async (dispatch) => {
  const response = await fetch(`/api/foods/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const recipes = await response.json()
  dispatch(loadRecipes(recipes))
  return recipes
}

const initialState = {
  selected: {Protein: "", Fruit: "", Vegetables: "", Carbs: "", Dairy: ""}
}



const recipeReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_RECIPES:
      const foods = Object.values(action.payload)
      const proteins = foods.filter(food => food.food_group === "Protein")
      const fruit = foods.filter(food => food.food_group === "Fruit")
      const vegetables = foods.filter(food => food.food_group === "Vegetables")
      const dairy = foods.filter(food => food.food_group === "Dairy")
      const carbs = foods.filter(food => food.food_group === "Carbs")
      newState.protein = proteins;
      newState.fruit = fruit;
      newState.vegetables = vegetables;
      newState.dairy = dairy;
      newState.carbs = carbs;
      return newState;
    case SELECT_FOOD:
      newState.selected[action.payload.food_group] = action.payload;
      return newState;
    case RESET_FOOD:
      newState.selected = {Protein: "", Fruit: "", Vegetables: "", Carbs: "", Dairy: ""}
      return newState;
    default:
      return state;
  }
};

export default recipeReducer;
