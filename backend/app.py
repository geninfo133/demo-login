from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# --- Database Connection ---
def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    return conn

# --- Create Table if Not Exists ---
def create_table():
    conn = get_db_connection()
    conn.execute('''CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        username TEXT UNIQUE,
                        password TEXT
                    )''')
    conn.close()

create_table()  # Run at startup

# --- Register Endpoint ---
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    hashed_pw = generate_password_hash(password)

    conn = get_db_connection()
    try:
        conn.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        conn.commit()
        message = {"message": "User registered successfully"}
    except sqlite3.IntegrityError:
        message = {"error": "Username already exists"}
    finally:
        conn.close()

    return jsonify(message)

# --- Login Endpoint ---

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username', '').strip()
    password = data.get('password', '').strip()

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    # Debugging log (to see what values are received)
    print("Received login:", username, password)

    cursor.execute(
        "SELECT * FROM users WHERE TRIM(username)=? AND TRIM(password)=?",
        (username, password)
    )
    user = cursor.fetchone()
    conn.close()

    if user:
        print("✅ User found:", dict(user))
        return jsonify({"message": "Login successful"})
    else:
        print("❌ Invalid credentials for:", username)
        return jsonify({"error": "Invalid credentials"}), 401





# --- List Users Endpoint ---
@app.route('/api/users', methods=['GET'])
def list_users():
    conn = get_db_connection()
    users = conn.execute("SELECT id, username FROM users").fetchall()
    conn.close()

    user_list = [dict(u) for u in users]
    return jsonify(user_list)

# --- Root Endpoint ---
@app.route('/')
def home():
    return jsonify({"status": "Backend running successfully 🚀"})

# --- Main Run ---
if __name__ == '__main__':
    app.run(debug=True, port=5000)
