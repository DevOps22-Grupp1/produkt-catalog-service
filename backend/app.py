from flask import Flask, jsonify, request, json
from prometheus_flask_exporter import PrometheusMetrics
import pymongo
import os
from pymongo import MongoClient
app = Flask(__name__)
metrics = PrometheusMetrics(app)
# db_client = PyMongo(
#     app, uri="mongodb://root:example@mongo:27017/allProducts")
# db = mongodb_client.db
client = MongoClient('mongo', 27017, username='root', password='example')
db_port = os.environ.get("DB_PORT")

db = client.allProducts
query = db.products




@app.route('/')
def hello_world():
    return "Success", 200, {"Access-Control-Allow-Origin": "*"}

@app.route('/api/products', methods=['GET'])
def get_all_products():
    data = []
    todos = query.find()
    for doc in todos:
        doc['_id'] = str(doc['_id'])  # This does the trick! to what sais everyone else. 
        data.append(doc)
    return jsonify(data)


@app.route('/api/product/<product_id>', methods=['GET'])
def get_single_product(product_id):
    data = []
    todos = query.find({"id": int(product_id)})
    for doc in todos:
        doc['_id'] = str(doc['_id'])  # This does the trick!
        data.append(doc)
    return jsonify(data)


@app.route('/api/product', methods=['POST'])
def post_products():
    data = json.loads(request.data)
    data["id"] = int(increment_post())
    query.insert_one(data)
    return "a new post has been added", 201, {"Access-Control-Allow-Origin": "*"}


@app.route('/api/product/<product_id>', methods=['DELETE'])
def delete_products(product_id):
    print(product_id)
    query.delete_one({"id": int(product_id)})
    return "The post is deleted", 204, {"Access-Control-Allow-Origin": "*"}

@app.route('/api/product/<product_id>', methods=['PUT'])
def update_products(product_id):
    data = json.loads(request.data)
    data["id"] = product_id
    query.find_one_and_update({'id': int(product_id)} , {'$set': data})
    return f"update the post from the database"


def increment_post():
    id_fetch = query.find_one(sort=[("id", pymongo.DESCENDING)])
    return str(id_fetch["id"]+1)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=db_port, debug=True)
