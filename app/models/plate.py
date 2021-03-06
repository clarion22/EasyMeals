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

  user = db.relationship("User", back_populates="plate")
  protein = db.relationship("Recipe", foreign_keys='[Plate.protein_id]')
  carbs = db.relationship("Recipe", foreign_keys='[Plate.carbs_id]')
  dairy = db.relationship("Recipe", foreign_keys='[Plate.dairy_id]')
  fruit = db.relationship("Recipe", foreign_keys='[Plate.fruit_id]')
  vegetables = db.relationship("Recipe", foreign_keys='[Plate.vegetables_id]')


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
    }
