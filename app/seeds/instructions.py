from app.models import db, Instruction, Recipe

# Adds a demo user, you can add other users here if you want
def seed_instructions():
    recipe = Recipe.query.filter_by(title="Greek Chicken Skewers").first()
    recipe2 = Recipe.query.filter_by(title="Jalapeno Steak").first()
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

    binstruction1 = Instruction(
    specification="Combine jalapenos, garlic, pepper, salt, lime juice and oregano in a blender. Blend until smooth.",
    step_order=1,
    recipe_id=recipe2.id
    )

    binstruction2 = Instruction(
    specification="Place steak in a shallow pan or large resealable plastic bag. Pour jalapeno marinade over the steak, and turn to coat. Cover pan or seal bag; marinate in the refrigerator 8 hours or overnight.",
    step_order=2,
    recipe_id=recipe2.id
    )

    binstruction3 = Instruction(
    specification="Preheat an outdoor grill for high heat, and lightly oil the grill grate.",
    step_order=3,
    recipe_id=recipe2.id
    )

    binstruction4 = Instruction(
    specification="Drain and discard marinade. Grill steak 5 minutes per side, or to desired doneness.",
    step_order=4,
    recipe_id=recipe2.id
    )

    db.session.add(instruction1)
    db.session.add(instruction2)
    db.session.add(instruction3)
    db.session.add(instruction4)
    db.session.add(instruction5)
    db.session.add(binstruction1)
    db.session.add(binstruction2)
    db.session.add(binstruction3)
    db.session.add(binstruction4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_instructions():
    db.session.execute('TRUNCATE instructions;')
    db.session.commit()
