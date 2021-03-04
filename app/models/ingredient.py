from .db import db

class Ingredient(db.Model):
  __tablename__ = 'ingredients'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(150), nullable = False)
  amount = db.Column(db.Integer, nullable = False)
  measurement_unit = db.Column(db.Integer, nullable = False)
  recipe_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable = False)

  recipe = db.relationship("Recipe", back_populates="ingredient")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "amount": self.amount,
      "measurement_unit": self.measurement_unit,
      "recipe_id": self.recipe_id
    }
