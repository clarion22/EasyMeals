from .db import db
from datetime import datetime


class Calendar(db.Model):
  __tablename__ = 'calendars'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(100), nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  date = db.Column(db.DateTime, nullable = False, default=datetime.utcnow)
  plate_id = db.Column(db.Integer, db.ForeignKey("plates.id"), nullable = False)
  url = db.Column(db.String, default="/")
  user = db.relationship("User", back_populates="calendar")
  plate = db.relationship("Plate", back_populates="calendar")

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "user_id": self.user_id,
      "date": self.date,
      "plate_id": self.plate_id,
      "url": self.url,
    }
