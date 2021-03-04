from app.models import db, Instruction, Recipe

# Adds a demo user, you can add other users here if you want
def seed_instructions():
    recipe = Recipe.query.filter_by(title="Greek Chicken Skewers").first()
    instruction1 = Instruction(
      specification="Whisk lemon juice, oil, vinegar, onion flakes, garlic, lemon zest, Greek seasoning, poultry seasoning, oregano, pepper, and thyme together in a bowl and pour into a resealable plastic bag.",
      step_order=1,
      recipe_id=recipe.id
    )
    instruction2 = Instruction(
      specification="Add chicken, coat with the marinade, squeeze out excess air, and seal the bag. Marinate in the refrigerator for at least 2 hours.",
      step_order=2,
      recipe_id=recipe.id
      )
    instruction3 = Instruction(
    specification="Preheat the oven to 350 degrees F (175 degrees C).",
    step_order=3,
    recipe_id=recipe.id
    )
    instruction4 = Instruction(
    specification="Remove chicken from the marinade and shake off excess; thread onto skewers. Discard the remaining marinade. Place the skewers on a baking sheet.",
    step_order=4,
    recipe_id=recipe.id
    )
    instruction5 = Instruction(
    specification="Roast in the preheated oven until golden brown, about 20 minutes.",
    step_order=5,
    recipe_id=recipe.id
    )

    db.session.add(instruction1)
    db.session.add(instruction2)
    db.session.add(instruction3)
    db.session.add(instruction4)
    db.session.add(instruction5)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_instructions():
    db.session.execute('TRUNCATE instructions;')
    db.session.commit()
