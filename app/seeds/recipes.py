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
                     unit="cups",
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

    recipe7 = Recipe(title="Fresh Shrimp Boil",
                    food_group="Protein",
                    amount=4,
                    unit="oz",
                    calories=420,
                    cook_time=5,
                    flavor_type="American",
                    food_category="Seafood",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2202554.jpg"
    )

    recipe8 = Recipe(title="Chicken Marsala",
                    food_group="Protein",
                    amount=4,
                    unit="oz",
                    calories=448,
                    cook_time=20,
                    flavor_type="Italy",
                    food_category="Chicken",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4170413.jpg&q=85"
    )

    recipe9 = Recipe(title="Tequila-Lime Chicken",
                    food_group="Protein",
                    amount=4,
                    unit="oz",
                    calories=244,
                    cook_time=35,
                    flavor_type="Latin",
                    food_category="Chicken",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1631459.jpg&w=596&h=399&c=sc&poi=face&q=85"
    )

    recipe10 = Recipe(title="Homemade Yogurt",
                    food_group="Dairy",
                    amount=4,
                    unit="cups",
                    calories=125,
                    cook_time=430,
                    flavor_type="Greek",
                    food_category="Yogurt",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7858952.jpg&q=85"
    )

    recipe11 = Recipe(title="Garlic Roasted Potatoes",
                    food_group="Carbs",
                    amount=8,
                    unit="oz",
                    calories=262,
                    cook_time=22,
                    flavor_type="Latin",
                    food_category="Potatoes",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5736579.jpg&q=85"
    )

    recipe12 = Recipe(title="Perfect Mashed Potatoes",
                    food_group="Carbs",
                    amount=6,
                    unit="oz",
                    calories=333,
                    cook_time=20,
                    flavor_type="Latin",
                    food_category="Potatoes",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3400912.jpg&w=596&h=399&c=sc&poi=face&q=85"
    )

    recipe13 = Recipe(title="Roasted Potatoes with Greens",
                    food_group="Carbs",
                    amount=6,
                    unit="oz",
                    calories=419,
                    cook_time=30,
                    flavor_type="Latin",
                    food_category="Potatoes",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F609366.jpg"
    )

    recipe14 = Recipe(title="Triple Threat Fruit Smoothie",
                    food_group="Fruit",
                    amount=2,
                    unit="cups",
                    calories=135,
                    cook_time=5,
                    flavor_type="Latin",
                    food_category="Smoothie",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1188437.jpg&w=596&h=596&c=sc&poi=face&q=85"
    )

    recipe15 = Recipe(title="Fresh Fruit in Balsamic Pepper Syrup",
                    food_group="Fruit",
                    amount=2,
                    unit="cups",
                    calories=131,
                    cook_time=5,
                    flavor_type="Latin",
                    food_category="Mixed Fruit",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8017118.jpg"
    )

    recipe16 = Recipe(title="Mint and Fruit Smoothie",
                    food_group="Fruit",
                    amount=2,
                    unit="cups",
                    calories=180,
                    cook_time=10,
                    flavor_type="Latin",
                    food_category="Smoothie",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7916646.jpg"
    )
    recipe17 = Recipe(title="Steamed Broccoli",
                    food_group="Vegetables",
                    amount=1.75,
                    unit="cups",
                    calories=102,
                    cook_time=5,
                    flavor_type="Latin",
                    food_category="Broccoli",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2256209.jpg"
    )
    recipe18 = Recipe(title="Bourbon Glazed Carrots",
                    food_group="Vegetables",
                    amount=1,
                    unit="cups",
                    calories=132,
                    cook_time=20,
                    flavor_type="Latin",
                    food_category="Carrots",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F957907.jpg"
    )
    recipe19 = Recipe(title="Carrots with Balsamic Glaze",
                    food_group="Vegetables",
                    amount=1,
                    unit="cups",
                    calories=117,
                    cook_time=10,
                    flavor_type="Latin",
                    food_category="Carrots",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7216831.jpg"
    )

    recipe20 = Recipe(title="Berry White Ice Pops",
                    food_group="Fruit",
                    amount=1,
                    unit="cups",
                    calories=51,
                    cook_time=10,
                    flavor_type="American",
                    food_category="Berries",
                    img_link="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps159873_CW163682D02_23_2b-1.jpg?fit=696,1024"
    )

    recipe21 = Recipe(title="Strawberry Corn Salsa",
                    food_group="Fruit",
                    amount=1,
                    unit="cups",
                    calories=49,
                    cook_time=10,
                    flavor_type="American",
                    food_category="Berries",
                    img_link="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps140821_MC163887D03_10_8b.jpg?fit=696,1024"
    )

    recipe22 = Recipe(title="Berry White Ice Pops",
                    food_group="Fruit",
                    amount=1,
                    unit="cups",
                    calories=51,
                    cook_time=10,
                    flavor_type="American",
                    food_category="Berries",
                    img_link="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps159873_CW163682D02_23_2b-1.jpg?fit=696,1024"
    )

    recipe23 = Recipe(title="Super Lemon Ice Cream",
                    food_group="Dairy",
                    amount=1,
                    unit="cups",
                    calories=315,
                    cook_time=20,
                    flavor_type="American",
                    food_category="Ice Cream",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1586127.jpg&w=596&h=399&c=sc&poi=face&q=85"
    )

    recipe24 = Recipe(title="Rose Ice Cream",
                    food_group="Dairy",
                    amount=1,
                    unit="cups",
                    calories=230,
                    cook_time=10,
                    flavor_type="American",
                    food_category="Ice Cream",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3440359.jpg&w=596&h=596&c=sc&poi=face&q=85"
    )

    recipe25 = Recipe(title="Roasted Broccoli and Cauliflower",
                    food_group="Vegetables",
                    amount=1,
                    unit="cups",
                    calories=68,
                    cook_time=15,
                    flavor_type="American",
                    food_category="Broccoli",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5950250.jpg&w=596&h=596&c=sc&poi=face&q=85"
    )
    recipe26 = Recipe(title="Skillet-Braised Brussels Sprouts",
                    food_group="Vegetables",
                    amount=1,
                    unit="cups",
                    calories=128,
                    cook_time=25,
                    flavor_type="American",
                    food_category="Brussels Sprouts",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8351052.jpg&q=85"
    )
    recipe27 = Recipe(title="Shaved Brussels Sprouts with Bacon and Almonds",
                    food_group="Vegetables",
                    amount=1,
                    unit="cups",
                    calories=222,
                    cook_time=10,
                    flavor_type="American",
                    food_category="Brussels Sprouts",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7454128.jpg&q=85"
    )
    recipe28 = Recipe(title="Jasmine Rice",
                    food_group="Carbs",
                    amount=8,
                    unit="oz",
                    calories=325,
                    cook_time=50,
                    flavor_type="American",
                    food_category="Rice",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1117118.jpg&w=596&h=399&c=sc&poi=face&q=85"
    )
    recipe29 = Recipe(title="Mango Ginger Rice",
                    food_group="Carbs",
                    amount=8,
                    unit="oz",
                    calories=256,
                    cook_time=35,
                    flavor_type="American",
                    food_category="Rice",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5574248.jpg&w=596&h=596&c=sc&poi=face&q=85"
    )
    recipe30 = Recipe(title="Mushroom Rice",
                    food_group="Carbs",
                    amount=8,
                    unit="oz",
                    calories=216,
                    cook_time=25,
                    flavor_type="American",
                    food_category="Rice",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F733477.jpg"
    )
    recipe31 = Recipe(title="Buttered Noodles",
                    food_group="Carbs",
                    amount=8,
                    unit="oz",
                    calories=294,
                    cook_time=10,
                    flavor_type="American",
                    food_category="Noodles",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2518260.jpg"
    )
    recipe32 = Recipe(title="Sriracha Noodles",
                    food_group="Carbs",
                    amount=8,
                    unit="oz",
                    calories=270,
                    cook_time=20,
                    flavor_type="Asian",
                    food_category="Noodles",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1264985.jpg"
    )
    recipe33 = Recipe(title="Rice Noodles with Shiitakes, Choy, and Chiles",
                    food_group="Carbs",
                    amount=8,
                    unit="oz",
                    calories=486,
                    cook_time=10,
                    flavor_type="Asian",
                    food_category="Noodles",
                    img_link="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F702308.jpg"
    )



    db.session.add(recipe1)
    db.session.add(recipe2)
    db.session.add(recipe3)
    db.session.add(recipe4)
    db.session.add(recipe5)
    db.session.add(recipe6)
    db.session.add(recipe7)
    db.session.add(recipe8)
    db.session.add(recipe9)
    db.session.add(recipe10)
    db.session.add(recipe11)
    db.session.add(recipe12)
    db.session.add(recipe13)
    db.session.add(recipe14)
    db.session.add(recipe15)
    db.session.add(recipe16)
    db.session.add(recipe17)
    db.session.add(recipe18)
    db.session.add(recipe19)
    db.session.add(recipe20)
    db.session.add(recipe21)
    db.session.add(recipe22)
    db.session.add(recipe23)
    db.session.add(recipe24)
    db.session.add(recipe25)
    db.session.add(recipe26)
    db.session.add(recipe27)
    db.session.add(recipe28)
    db.session.add(recipe29)
    db.session.add(recipe30)
    db.session.add(recipe31)
    db.session.add(recipe32)
    db.session.add(recipe33)
    db.session.commit20

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_recipes():
    db.session.execute('TRUNCATE recipes RESTART IDENTITY CASCADE;')
    db.session.commit()
