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

    db.session.add(recipe1)
    db.session.add(recipe2)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_recipes():
    db.session.execute('TRUNCATE recipes CASCADE;')
    db.session.commit()
