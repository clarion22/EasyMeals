from flask import Blueprint, request
from app.models import db, Plate, Recipe, Calendar

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
    return { plate.id: plate.to_join() for plate in plates}

@plate_routes.route('/user/favorite/<int:user_id>')
def load_favorites(user_id):
    plates = Plate.query.filter_by(user_id=user_id, favorite=True).all()
    return { plate.id: plate.to_join() for plate in plates}

@plate_routes.route('/user/<int:plate_id>', methods=["DELETE"])
def delete_plate(plate_id):
    plate = Plate.query.filter_by(id=plate_id).first()
    db.session.delete(plate)
    db.session.commit()
    return plate.to_dict()

@plate_routes.route('/user/<int:plate_id>', methods=["PATCH"])
def favorite_plate(plate_id):
    data = request.get_json()
    plate = Plate.query.filter_by(id=plate_id).first()
    if plate:
        plate.favorite = data["favorite"]
    db.session.add(plate)
    db.session.commit()
    return plate.to_join()

@plate_routes.route('/calendar', methods=["POST"])
def add_plate_event():
    data = request.get_json()
    calendar = Calendar(
        title=data['title'],
        user_id=data['user_id'],
        date=data['date'],
        plate_id=data['plate_id'],
        url=data['url'],
    )

    db.session.add(calendar)
    db.session.commit()
    return calendar.to_dict()

@plate_routes.route('/calendar/<int:user_id>')
def load_events(user_id):
    plateEvents = Calendar.query.filter_by(user_id=user_id).all()
    return {plateEvent.id : plateEvent.to_dict() for plateEvent in plateEvents}

@plate_routes.route('/events/<int:event_id>', methods=["DELETE"])
def remove_plate_event(event_id):
    event = Calendar.query.filter_by(id=event_id).first()
    if event:
        db.session.delete(event)
        db.session.commit()
        return event.to_dict()
    else:
        return {"error": "event not found"}
