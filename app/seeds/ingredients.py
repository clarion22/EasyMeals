from app.models import db, Ingredient, Recipe

def seed_ingredients():
  recipe = Recipe.query.filter_by(title="Greek Chicken Skewers").first()
  recipe2 = Recipe.query.filter_by(title="Jalapeno Steak").first()
  recipe3 = Recipe.query.filter_by(title="Sunday Best Fruit Salad").first()
  recipe4 = Recipe.query.filter_by(title="Easy Roasted Broccoli").first()
  recipe5 = Recipe.query.filter_by(title="Chia Yogurt Power Bowl").first()
  recipe6 = Recipe.query.filter_by(title="Lime Cilantro Rice").first()


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

  bingredient1 = Ingredient(name="jalapeno peppers",
                            amount=1,
                            measurement_unit="",
                            recipe_id=recipe2.id
  )

  bingredient2 = Ingredient(name="cloves garlic",
                            amount=1,
                            measurement_unit="",
                            recipe_id=recipe2.id
  )

  bingredient3 = Ingredient(name="cracked black pepper",
                            amount=0.25,
                            measurement_unit="tsp",
                            recipe_id=recipe2.id
  )

  bingredient4 = Ingredient(name="salt",
                            amount=0.5,
                            measurement_unit="tsp",
                            recipe_id=recipe2.id
  )

  bingredient5 = Ingredient(name="lime juice",
                            amount=2,
                            measurement_unit="tsp",
                            recipe_id=recipe2.id
  )

  bingredient6 = Ingredient(name="dried oregano",
                            amount=0.5,
                            measurement_unit="tsp",
                            recipe_id=recipe2.id
  )

  bingredient7 = Ingredient(name="sirloin steak",
                            amount=4,
                            measurement_unit="oz",
                            recipe_id=recipe2.id
  )

  cingredient1 = Ingredient(name="pineapple chunks",
                            amount=20,
                            measurement_unit="oz",
                            recipe_id=recipe3.id
                            )
  cingredient2 = Ingredient(name="apple",
                            amount=1,
                            measurement_unit="",
                            recipe_id=recipe3.id
                            )
  cingredient3 = Ingredient(name="peach pie filling",
                            amount=10,
                            measurement_unit="oz",
                            recipe_id=recipe3.id
                            )

  cingredient4 = Ingredient(name="banana",
                            amount=1,
                            measurement_unit="",
                            recipe_id=recipe3.id
                            )

  cingredient5 = Ingredient(name="kiwis",
                            amount=1.5,
                            measurement_unit="",
                            recipe_id=recipe3.id
                            )

  cingredient6 = Ingredient(name="strawberries",
                            amount=2,
                            measurement_unit="oz",
                            recipe_id=recipe3.id
                            )

  dingredient1 = Ingredient(name="broccoli",
                            amount=4,
                            measurement_unit="oz",
                            recipe_id=recipe4.id
                            )

  dingredient2 = Ingredient(name="olive oil",
                            amount=1,
                            measurement_unit="tbsp",
                            recipe_id=recipe4.id
                            )

  dingredient3 = Ingredient(name="ground black pepper",
                            amount=1,
                            measurement_unit="tsp",
                            recipe_id=recipe4.id
                            )

  eingredient1 = Ingredient(name="Greek yogurt",
                            amount=1,
                            measurement_unit="cups",
                            recipe_id=recipe5.id)

  eingredient2 = Ingredient(name="milk",
                            amount=0.75,
                            measurement_unit="cups",
                            recipe_id=recipe5.id)

  eingredient3 = Ingredient(name="chia seeds",
                            amount=0.125,
                            measurement_unit="cups",
                            recipe_id=recipe5.id)

  eingredient4 = Ingredient(name="vanilla extract",
                            amount=1,
                            measurement_unit="tsp",
                            recipe_id=recipe5.id)

  eingredient5 = Ingredient(name="honey",
                            amount=1.5,
                            measurement_unit="tbsp",
                            recipe_id=recipe5.id)

  fingredient1 = Ingredient(name="water",
                            amount=2,
                            measurement_unit="tbsp",
                            recipe_id=recipe6.id)

  fingredient2 = Ingredient(name="butter",
                            amount=2,
                            measurement_unit="tsp",
                            recipe_id=recipe6.id)

  fingredient3 = Ingredient(name="white rice",
                            amount=0.5,
                            measurement_unit="cups",
                            recipe_id=recipe6.id)

  fingredient4 = Ingredient(name="lime zest",
                            amount=0.5,
                            measurement_unit="tsp",
                            recipe_id=recipe6.id)

  fingredient5 = Ingredient(name="fresh lime juice",
                            amount=1,
                            measurement_unit="tbsp",
                            recipe_id=recipe6.id)

  fingredient6 = Ingredient(name="cilantro",
                            amount=0.25,
                            measurement_unit="cups",
                            recipe_id=recipe6.id)


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
  db.session.add(bingredient1)
  db.session.add(bingredient2)
  db.session.add(bingredient3)
  db.session.add(bingredient4)
  db.session.add(bingredient5)
  db.session.add(bingredient6)
  db.session.add(bingredient7)
  db.session.add(cingredient1)
  db.session.add(cingredient2)
  db.session.add(cingredient3)
  db.session.add(cingredient4)
  db.session.add(cingredient5)
  db.session.add(cingredient6)
  db.session.add(dingredient1)
  db.session.add(dingredient2)
  db.session.add(dingredient3)
  db.session.add(eingredient1)
  db.session.add(eingredient2)
  db.session.add(eingredient3)
  db.session.add(eingredient4)
  db.session.add(eingredient5)
  db.session.add(fingredient1)
  db.session.add(fingredient1)
  db.session.add(fingredient1)
  db.session.add(fingredient2)
  db.session.add(fingredient3)
  db.session.add(fingredient4)
  db.session.add(fingredient5)
  db.session.add(fingredient6)


  db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_ingredients():
    db.session.execute('TRUNCATE ingredients RESTART IDENTITY;')
    db.session.commit()
