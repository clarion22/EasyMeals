const LOAD_RECIPES = "recipes/loadRecipes";

export const loadRecipes = (recipes) => {
  return {
    type: LOAD_RECIPES,
    payload: recipes,
  };
};

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


const recipeReducer = (state = { }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_RECIPES:
      const foods = Object.values(action.payload)
      const proteins = foods.filter(food => food.food_group === "Protein")
      newState.protein = proteins;
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

export default recipeReducer;
