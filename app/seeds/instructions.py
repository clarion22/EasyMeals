from app.models import db, Instruction, Recipe

# Adds a demo user, you can add other users here if you want
def seed_instructions():
    recipe = Recipe.query.filter_by(title="Greek Chicken Skewers").first()
    recipe2 = Recipe.query.filter_by(title="Jalapeno Steak").first()
    recipe3 = Recipe.query.filter_by(title="Sunday Best Fruit Salad").first()
    recipe4 = Recipe.query.filter_by(title="Easy Roasted Broccoli").first()
    recipe5 = Recipe.query.filter_by(title="Chia Yogurt Power Bowl").first()
    recipe6 = Recipe.query.filter_by(title="Lime Cilantro Rice").first()

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

    cinstruction1 = Instruction(
        specification="In a small bowl, toss the chopped apples in reserved pineapple juice. Allow to sit for 5 to 10 minutes.",
        step_order=1,
        recipe_id=recipe3.id
    )
    cinstruction2 = Instruction(
        specification="In a large salad bowl, combine the peach pie filling and pineapple chunks.",
        step_order=2,
        recipe_id=recipe3.id
    )
    cinstruction3 = Instruction(
        specification="Remove apples from pineapple juice and add to pie filling and pineapple mixture. Add chopped bananas to reserved pineapple juice and let sit for 5 to 10 minutes.",
        step_order=3,
        recipe_id=recipe3.id
    )
    cinstruction4 = Instruction(
        specification="Peel and slice kiwi and 1/2 of strawberries. Chop the other 1/2 of strawberries and set aside.",
        step_order=4,
        recipe_id=recipe3.id
    )
    cinstruction5 = Instruction(
        specification="Remove bananas from pineapple juice and add to pie filling mixture. Add chopped strawberries; toss together.",
        step_order=5,
        recipe_id=recipe3.id
    )
    cinstruction6 = Instruction(
        specification="Arrange kiwi slices around the edge of the serving bowl and alternate with strawberry slices. Chill and serve.",
        step_order=6,
        recipe_id=recipe3.id
    )
    dinstruction1 = Instruction(
        specification="Preheat oven to 400 degrees F (200 degrees C).",
        step_order=1,
        recipe_id=recipe4.id
    )
    dinstruction2 = Instruction(
        specification="Cut broccoli florets from the stalk. Peel the stalk and slice into 1/4-inch slices. Mix florets and stem pieces with olive oil in a bowl and transfer to a baking sheet; season with salt and pepper.",
        step_order=2,
        recipe_id=recipe4.id
    )
    dinstruction3 = Instruction(
        specification="Roast in the preheated oven until broccoli is tender and lightly browned, about 18 minutes.",
        step_order=3,
        recipe_id=recipe4.id
    )
    einstruction1 = Instruction(
        specification="In a large bowl or Tupperware, mix together all ingredients.",
        step_order=1,
        recipe_id=recipe5.id
    )
    einstruction2 = Instruction(
        specification="Let sit in the fridge for at least 4 hours or overnight",
        step_order=2,
        recipe_id=recipe5.id
    )
    einstruction3 = Instruction(
        specification="Serve with nutrient-packed toppings such as blueberries, pecans, chia seeds, and lemon zest.",
        step_order=3,
        recipe_id=recipe5.id
    )
    finstruction1 = Instruction(
        specification="Bring the water to a boil; stir the butter and rice into the water. Cover, reduce heat to low, and simmer until the rice is tender, about 20 minutes.",
        step_order=1,
        recipe_id=recipe6.id
    )
    finstruction2 = Instruction(
        specification="Stir the lime zest, lime juice, and cilantro into the cooked rice just before serving.",
        step_order=2,
        recipe_id=recipe6.id
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
    db.session.add(cinstruction1)
    db.session.add(cinstruction2)
    db.session.add(cinstruction3)
    db.session.add(cinstruction4)
    db.session.add(cinstruction5)
    db.session.add(cinstruction6)
    db.session.add(dinstruction1)
    db.session.add(dinstruction2)
    db.session.add(dinstruction3)
    db.session.add(einstruction1)
    db.session.add(einstruction2)
    db.session.add(einstruction3)
    db.session.add(finstruction1)
    db.session.add(finstruction2)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_instructions():
    db.session.execute('TRUNCATE instructions RESTART IDENTITY;')
    db.session.commit()
