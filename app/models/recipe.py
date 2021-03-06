from .db import db

class Recipe(db.Model):
  __tablename__ = 'recipes'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(200), nullable = False)
  food_group = db.Column(db.String(100), nullable = False)
  amount = db.Column(db.Integer, nullable = False)
  unit = db.Column(db.String(80), nullable = False)
  calories = db.Column(db.Integer, nullable = False)
  cook_time = db.Column(db.Integer, nullable = False)
  flavor_type = db.Column(db.String(100), nullable = False)
  food_category = db.Column(db.String(100), nullable =False)
  img_link = db.Column(db.Text, nullable = False)

  ingredient = db.relationship("Ingredient", back_populates="recipe")
  instruction = db.relationship("Instruction", back_populates="recipe")
  # plate1 = db.relationship("Plate", back_populates="protein")
  # plate2 = db.relationship("Plate", back_populates="carbs")
  # plate3 = db.relationship("Plate", back_populates="dairy")
  # plate4 = db.relationship("Plate", back_populates="fruit")
  # plate5 = db.relationship("Plate", back_populates="vegetables")


  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "food_group": self.food_group,
      "amount": self.amount,
      "unit": self.unit,
      "calories": self.calories,
      "cook_time": self.cook_time,
      "flavor_type": self.flavor_type,
      "food_category": self.food_category,
      "img_link": self.img_link,
    }
