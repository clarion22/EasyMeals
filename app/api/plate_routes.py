from flask import Blueprint, request
from app.models import db, Plate

plate_routes = Blueprint('plates', __name__)

@plate_routes.route('/', methods=["POST"])
def save_plate():
    data = request.get_json()
    plate = Plate(
      protein_id=data['protein_id'],
      carbs_id=data['carb_id'],
      fruit_id=data['fruit_id'],
      vegetables_id=data['vegetables_id'],
      dairy_id=data['dairy_id'],
      serving=data['serving'],
      user_id=data['user_id']
    )

    db.session.add(plate)
    db.session.commit()
    return plate.to_dict()
