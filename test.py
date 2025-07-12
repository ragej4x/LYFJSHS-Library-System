import requests

url = 'http://127.0.0.1:5000/test'

data = {
    "username": "Jimboy",
    "message": "Hello Flask!"
}

response = requests.post(url, json=data)
print(response.text)
