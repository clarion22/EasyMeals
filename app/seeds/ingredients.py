from app.models import db, Ingredient, Recipe

def seed_ingredients():
  recipe = Recipe.query.filter_by(title="Greek Chicken Skewers").first()
  ingredients1 = Ingredient(name="lemon juice",
                            amount=1,
                            measurement_unit="tbsp",
                            recipe_id=recipe.id
  )
  ingredients2 = Ingredient(name="wok oil",
                            amount=1,
                            measurement_unit="tbsp",
                            recipe_id=recipe.id
  )
  ingredients3 = Ingredient(name="red wine vinegar",
                            amount=1,
                            measurement_unit="tsp",
                            recipe_id=recipe.id
  )
  ingredients3 = Ingredient(name="onion flakes",
                            amount=0.75,
                            measurement_unit="tsp",
                            recipe_id=recipe.id
  )
  ingredients4= Ingredient(name="minced garlic",
                            amount=0.75,
                            measurement_unit="tsp",
                            recipe_id=recipe.id
  )
  ingredients5 = Ingredient(name="lemon",
                            amount=1,
                            measurement_unit="",
                            recipe_id=recipe.id
  )
  ingredients6 = Ingredient(name="Greek seasoning",
                            amount=0.25,
                            measurement_unit="teaspoon",
                            recipe_id=recipe.id
  )
  ingredients7 = Ingredient(name="Poultry seasoning",
                            amount=0.25,
                            measurement_unit="tsp",
                            recipe_id=recipe.id
  )
  ingredients8 = Ingredient(name="dried oregano",
                            amount=0.25,
                            measurement_unit="tsp",
                            recipe_id=recipe.id
  )
  ingredients9 = Ingredient(name="ground black pepper",
                            amount=0.25,
                            measurement_unit="tsp",
                            recipe_id=recipe.id
  )
  ingredients10 = Ingredient(name="dried thyme",
                            amount=0.125,
                            measurement_unit="tsp",
                            recipe_id=recipe.id
  )
  ingredients11 = Ingredient(name="boneless chicken breast",
                            amount=4,
                            measurement_unit="oz",
                            recipe_id=recipe.id
  )
  db.session.add(ingredients1)
  db.session.add(ingredients2)
  db.session.add(ingredients3)
  db.session.add(ingredients4)
  db.session.add(ingredients4)
  db.session.add(ingredients5)
  db.session.add(ingredients6)
  db.session.add(ingredients7)
  db.session.add(ingredients8)
  db.session.add(ingredients9)
  db.session.add(ingredients10)
  db.session.add(ingredients11)


  db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_ingredients():
    db.session.execute('TRUNCATE ingredients CASCADE;')
    db.session.commit()
