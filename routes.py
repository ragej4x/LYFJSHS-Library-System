from run import app
from flask import request, jsonify
import random


@app.route('/generate_random', methods=['GET'])
def generate_random():
    number = random.randint(1, 100)
    return jsonify({'number': number})

