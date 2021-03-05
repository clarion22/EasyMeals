from app.models import db, Recipe

# Adds a demo user, you can add other users here if you want


def seed_recipes():

    recipe1 = Recipe(title="Greek Chicken Skewers",
                     food_group="Protein",
                     amount=4,
                     unit="oz",
                     calories=248,
                     cook_time=140,
                     flavor_type="Greek",
                     food_category="Chicken",
                     img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6705859.jpg&w=596&h=596&c=sc&poi=face&q=85"
                     )

    recipe2 = Recipe(title="Jalapeno Steak",
                     food_group="Protein",
                     amount=4,
                     unit="oz",
                     calories=186,
                     cook_time=10,
                     flavor_type="Latin",
                     food_category="Beef",
                     img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F134260.jpg&w=596&h=596&c=sc&poi=face&q=85"
                     )

    recipe3 = Recipe(title="Sunday Best Fruit Salad",
                     food_group="Fruit",
                     amount=3.5,
                     unit="cups",
                     calories=184,
                     cook_time=10,
                     flavor_type="American",
                     food_category="Mixed Fruit",
                     img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7054029.jpg&q=85"
                     )

    recipe4 = Recipe(title="Easy Roasted Broccoli",
                     food_group="Vegetables",
                     amount=1.5,
                     unit="cups",
                     calories=63,
                     cook_time=10,
                     flavor_type="American",
                     food_category="Broccoli",
                     img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1765553.jpg&w=596&h=596&c=sc&poi=face&q=85"
                     )

    recipe5 = Recipe(title="Chia Yogurt Power Bowl",
                     food_group="Dairy",
                     amount=1.75,
                     unit="cup",
                     calories=103,
                     cook_time=240,
                     flavor_type="American",
                     food_category="Yogurt",
                     img_link="https://fitfoodiefinds.com/wp-content/uploads/2014/01/chia-yogurt-power-bowl-1-683x1024.jpg"
                     )

    recipe6 = Recipe(title="Lime Cilantro Rice",
                     food_group="Carbs",
                     amount=7,
                     unit="oz",
                     calories=170,
                     cook_time=20,
                     flavor_type="Latin",
                     food_category="Rice",
                     img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4526283.jpg&w=596&h=596&c=sc&poi=face&q=85"
                     )

    db.session.add(recipe1)
    db.session.add(recipe2)
    db.session.add(recipe3)
    db.session.add(recipe4)
    db.session.add(recipe5)
    db.session.add(recipe6)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_recipes():
    db.session.execute('TRUNCATE recipes RESTART IDENTITY CASCADE;')
    db.session.commit()
