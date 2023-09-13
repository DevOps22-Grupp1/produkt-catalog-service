from flask import Flask, jsonify
from prometheus_flask_exporter import PrometheusMetrics
from flask_pymongo import PyMongo

app = Flask(__name__)
metrics = PrometheusMetrics(app)
mongodb_client = PyMongo(
    app, uri="mongodb://sudo_admin:password@mongo:27017/allProducts")
db = mongodb_client.db


@app.route('/')
def hello_world():
    return 'Hello, this is product catalog service'

@app.route('/api/products', methods=['GET'])
def display_lists():
    data = []
    todos = db.products.find()
    for doc in todos:
        doc['_id'] = str(doc['_id'])  # This does the trick!
        data.append(doc)
    return jsonify(data)

    # todos = db.products.find()
    # return jsonify(todos)



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5002, debug=True)