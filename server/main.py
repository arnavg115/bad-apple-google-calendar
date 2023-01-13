from flask import Flask, send_file
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def main():
    return send_file("out.json")


if '__main__' == __name__:
    app.run(debug=True)