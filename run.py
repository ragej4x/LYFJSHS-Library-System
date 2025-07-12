from flask import Flask, request, jsonify

app = Flask(__name__)

from routes import *
from index import *


if __name__ == '__main__':
    app.run(debug=True)
