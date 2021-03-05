from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Recipe

food_routes = Blueprint('foods', __name__)


@food_routes.route('/')
def foods():
    recipes = Recipe.query.all()
    return {recipe.id : recipe.to_dict() for recipe in recipes}
