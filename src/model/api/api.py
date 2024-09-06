from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

@app.route('/api/signin', methods=['POST'])
def signin():
    if request.content_type != 'application/json':
        return jsonify({"error": "Content-Type must be application/json"}), 415
    
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON data"}), 400

    email = data.get('email')
    password = data.get('password')
    
    print(f"Email: {email}, Password: {password}")
    
    return jsonify({"message": "Sign in successful"}), 200

if __name__ == '__main__':
    app.run(debug=True)
