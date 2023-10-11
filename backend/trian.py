from flask import Flask, request
from flask_cors import CORS
import os 
import math

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/trian", methods = ["POST"])
def trian():
    radius = int(request.form.get('radius'))
    segments = int(request.form.get('segmentsN'))
    res = []
    N = 0
    for index in range(segments):
        N = N + 1
        res.append([[radius * math.cos(2 * math.pi * N / segments),radius * math.sin(2 * math.pi * N / segments)],[radius * math.cos(2 * math.pi * (N + 1) / segments),radius * math.sin(2 * math.pi * (N + 1) / segments)], [radius * math.cos(2 * math.pi * (N + 2) / segments),radius * math.sin(2 * math.pi * (N + 2) / segments)]])
    print(res)
    print(N)
    
    
   
    return res, 200