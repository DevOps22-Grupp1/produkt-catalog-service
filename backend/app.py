from flask import Flask, jsonify, request, json
from prometheus_flask_exporter import PrometheusMetrics
import pymongo
import os
from pymongo import MongoClient

# environment variables
server_port = os.environ.get("SERVER_PORT")
db_username = os.environ.get("DB_USERNAME")
db_password = os.environ.get("DB_PASSWORD")
host = os.environ.get("DB_HOST")
db_port = os.environ.get("DB_PORT")

app = Flask(__name__)
metrics = PrometheusMetrics(app)
client = MongoClient(host, int(db_port), username=db_username, password=db_password)


db = client.allProducts
query = db.products


@app.route("/")
def hello_world():
    return "Success", 200, {"Access-Control-Allow-Origin": "*"}


@app.route("/api/products", methods=["GET"])
def get_all_products():
    data = []
    todos = query.find().sort({"category": 1, "order": 1})
    for doc in todos:
        doc["_id"] = str(doc["_id"])  # This does the trick! to what sais everyone else.
        data.append(doc)
    return jsonify(data)


@app.route("/api/product_category/<category>", methods=["GET"])
def get_all_product_categories(category):
    data = []
    todos = query.find({"category": category}).sort({"order": 1})
    for doc in todos:
        doc["_id"] = str(doc["_id"])  # This does the trick! to what sais everyone else.
        data.append(doc)
    return jsonify(data)


@app.route("/api/product/<product_id>", methods=["GET"])
def get_single_product(product_id):
    data = []
    todos = query.find({"id": int(product_id)})
    for doc in todos:
        doc["_id"] = str(doc["_id"])  # This does the trick!
        data.append(doc)
    return jsonify(data)


@app.route("/api/product", methods=["POST"])
def post_products():
    data = json.loads(request.data)
    data["id"] = int(increment_post())
    query.insert_one(data)
    return "a new post has been added", 201, {"Access-Control-Allow-Origin": "*"}


@app.route("/api/product/<product_id>", methods=["DELETE"])
def delete_products(product_id):
    print(product_id)
    query.delete_one({"id": int(product_id)})
    return "The post is deleted", 204, {"Access-Control-Allow-Origin": "*"}


@app.route("/api/product/<product_id>", methods=["PUT"])
def update_products(product_id):
    data = json.loads(request.data)
    data["id"] = int(product_id)
    query.update_one({"id": int(product_id)}, {"$set": data})
    # query.find_one_and_update({'id': int(product_id)} , {'$set': data})
    return (
        f"update the post from the database",
        200,
        {"Access-Control-Allow-Origin": "*"},
    )


def increment_post():
    id_fetch = query.find_one(sort=[("id", pymongo.DESCENDING)])
    return str(id_fetch["id"] + 1)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=server_port, debug=False)
