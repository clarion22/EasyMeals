from flask import Blueprint, request
from app.models import db, Plate, Recipe

plate_routes = Blueprint('plates', __name__)

@plate_routes.route('/', methods=["POST"])
def save_plate():
    data = request.get_json()
    plate = Plate(
      protein_id=data['protein_id'],
      carbs_id=data['carbs_id'],
      fruit_id=data['fruit_id'],
      vegetables_id=data['vegetables_id'],
      dairy_id=data['dairy_id'],
      serving=data['serving'],
      user_id=data['user_id']
    )

    db.session.add(plate)
    db.session.commit()
    return plate.to_dict()

@plate_routes.route('/<int:user_id>')
def load_plates(user_id):
    plates = Plate.query.filter_by(user_id=user_id).all()
    print('-------------------------------------')
    for plate in plates:
        print('-------------------------------------')
        print(dir(plate))
        print(plate.fruit.title)
        print(plate.dairy.title)
        print(plate.carbs.title)
    return { plate.id: plate.to_dict() for plate in plates}
