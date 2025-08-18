from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.user_util import load_users, save_users, load_database, save_database

app = Flask(__name__)
CORS(app)

# Users


@app.route('/api/users', methods=['GET'])
def get_users():
    users = load_users()
    return jsonify(users)


@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.get_json()
    users = load_users()
    new_user = {
        "id": len(users) + 1,
        "username": data["username"],
        "password": data["password"]
    }
    users.append(new_user)
    save_users(users)
    return jsonify(new_user), 201

# Database


@app.route('/api/database', methods=['POST'])
def add_to_database():
    data = request.get_json()
    database = load_database()
    new_data = {
        "id": len(database) + 1,
        "username": data["username"],
        "calories_limit": 0,
        "custom_recipes": [],
        "intake_history": []
    }
    database.append(new_data)
    save_database(database)
    return jsonify(new_data), 201


@app.route('/api/database', methods=['GET'])
def get_database():
    database = load_database()
    return jsonify(database)


@app.route('/api/database/<int:user_id>', methods=["PUT"])
def update_database(user_id):
    user_new_data = request.get_json()
    database = load_database()

    for user in database:
        if user["id"] == user_id:
            user.update(user_new_data)
            save_database(database)
            return jsonify(user), 200

    return jsonify({"error": "User not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)
