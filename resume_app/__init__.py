from flask_failsafe import failsafe
from flask import Flask
import os

@failsafe
def create_app():
    app = Flask(__name__)
    with app.app_context():
        from . import routes
        return app