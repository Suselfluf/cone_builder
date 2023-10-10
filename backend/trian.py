from flask import Flask, request
from flask_cors import CORS
import os 
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/trian", methods = ["POST"])
def trian():
    print(request.form.get('height'))
    print(request.form.get('radius'))
    # height = request.form.get("height")
    # radius = request.form.get("radius")
    # segmentsN = request.form.get("segmentsN")
    return 'Numbers send successfully', 200