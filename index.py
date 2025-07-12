from run import app
from flask import request, jsonify




@app.route('/home', methods=['GET'])
def home():

    structure = f"""
    <link rel="stylesheet" href="style/index.css">
    <div class="container">
        <h1>NUMBER</h1>

        <form action="/generate_random" method="get">
        <button type='submit'>Click me</button>
        </form>
    </div>
    """
    return structure
