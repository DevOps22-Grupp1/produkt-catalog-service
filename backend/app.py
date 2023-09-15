from flask import Flask, jsonify, request, json
from prometheus_flask_exporter import PrometheusMetrics
import pymongo
from pymongo import MongoClient
app = Flask(__name__)
metrics = PrometheusMetrics(app)
# db_client = PyMongo(
#     app, uri="mongodb://root:example@mongo:27017/allProducts")
# db = mongodb_client.db
client = MongoClient('mongo', 27017, username='root', password='example')

db = client.allProducts
query = db.products




@app.route('/')
def hello_world():
    return 'Hello, this is product catalog service'

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
    data["id"] = increment_post()
    query.insert_one(data)
    return f"a new post has been added"


@app.route('/api/product/<product_id>', methods=['DELETE'])
def delete_products(product_id):
    query.delete_one({"id": int(product_id)})
    return f"delete the post from the database"

@app.route('/api/product/<product_id>', methods=['PUT'])
def update_products(product_id):
    data = json.loads(request.data)
    data["id"] = product_id
    query.find_one_and_update({'id': int(product_id)} , {'$set': data})
    return f"update the post from the database"


def increment_post():
    return str(query.count_documents({}))

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4005, debug=True)