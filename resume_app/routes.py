from flask import current_app as app
from flask import render_template, redirect
from pprint import pprint

@app.route('/')
def index():
    return render_template('home.html')