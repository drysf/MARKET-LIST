from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configuration de la base de données MySQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/marketList'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Pour éviter un avertissement

# Initialisation de SQLAlchemy avec l'application Flask
db = SQLAlchemy(app)

# Définition du modèle utilisateur
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

# Créer la base de données et les tables au démarrage de l'application
with app.app_context():
    db.create_all()

# Route pour ajouter un nouvel utilisateur
@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Validation des données
    if not email or not password:
        return jsonify({'error': 'Email et mot de passe requis'}), 400

    # Vérifier si l'utilisateur existe déjà
    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Utilisateur déjà existant'}), 400

    # Créer un nouvel utilisateur
    new_user = User(email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Utilisateur créé avec succès'}), 201

# Point d'entrée de l'application
if __name__ == '__main__':
    app.run(debug=True)
