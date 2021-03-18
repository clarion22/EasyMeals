from .db import db
from datetime import datetime


class Plate(db.Model):
  __tablename__ = 'plates'

  id = db.Column(db.Integer, primary_key = True)
  date = db.Column(db.DateTime, nullable = False, default=datetime.utcnow)
  protein_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable = False)
  carbs_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable = False)
  fruit_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable = False)
  vegetables_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable = False)
  dairy_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable = False)
  serving = db.Column(db.Float, default=1, nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable =False)
  favorite = db.Column(db.Boolean, default=False, nullable=False)

  user = db.relationship("User", back_populates="plate")
  protein = db.relationship("Recipe", foreign_keys='[Plate.protein_id]')
  carbs = db.relationship("Recipe", foreign_keys='[Plate.carbs_id]')
  dairy = db.relationship("Recipe", foreign_keys='[Plate.dairy_id]')
  fruit = db.relationship("Recipe", foreign_keys='[Plate.fruit_id]')
  vegetables = db.relationship("Recipe", foreign_keys='[Plate.vegetables_id]')
  calendar = db.relationship("Calendar", cascade="all, delete", back_populates="plate")

  def to_dict(self):
    return {
      "id": self.id,
      "date": self.date,
      "protein_id": self.protein_id,
      "carbs_id": self.carbs_id,
      "fruit_id": self.fruit_id,
      "vegetables_id": self.vegetables_id,
      "dairy_id": self.dairy_id,
      "serving": self.serving,
      "user_id": self.user_id,
      "favorite": self.favorite,
    }

  def to_join(self):
    return {
      "id": self.id,
      "date": self.date,
      "protein": [{
        "id": self.protein.id,
        "title": self.protein.title,
        "food_group": self.protein.food_group,
        "unit": self.protein.unit,
        "calories": self.protein.calories,
        "cook_time": self.protein.cook_time,
        "img_link": self.protein.img_link,
        "food_category": self.protein.food_category,
        "amount": self.protein.amount
      }],
      "carbs": [{
        "id": self.carbs.id,
        "title": self.carbs.title,
        "food_group": self.carbs.food_group,
        "unit": self.carbs.unit,
        "calories": self.carbs.calories,
        "cook_time": self.carbs.cook_time,
        "img_link": self.carbs.img_link,
        "food_category": self.carbs.food_category,
        "amount": self.carbs.amount
      }],
      "vegetables": [{
        "id": self.vegetables.id,
        "title": self.vegetables.title,
        "food_group": self.vegetables.food_group,
        "unit": self.vegetables.unit,
        "calories": self.vegetables.calories,
        "cook_time": self.vegetables.cook_time,
        "img_link": self.vegetables.img_link,
        "food_category": self.vegetables.food_category,
        "amount": self.vegetables.amount
      }],
      "fruit": [{
        "id": self.fruit.id,
        "title": self.fruit.title,
        "food_group": self.fruit.food_group,
        "unit": self.fruit.unit,
        "calories": self.fruit.calories,
        "cook_time": self.fruit.cook_time,
        "img_link": self.fruit.img_link,
        "food_category": self.fruit.food_category,
        "amount": self.fruit.amount
      }],
      "dairy": [{
        "id": self.dairy.id,
        "title": self.dairy.title,
        "food_group": self.dairy.food_group,
        "unit": self.dairy.unit,
        "calories": self.dairy.calories,
        "cook_time": self.dairy.cook_time,
        "img_link": self.dairy.img_link,
        "food_category": self.dairy.food_category,
        "amount": self.dairy.amount
      }],
      "serving": self.serving,
      "user_id": self.user_id,
      "favorite": self.favorite,
    }
