from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # Enable CORS so your React app can communicate with Flask

# Initialize SQLite database
def init_db():
    conn = sqlite3.connect('samarkand_icj.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS registrations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pathway TEXT NOT NULL,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            mobile TEXT NOT NULL,
            role TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No input data provided'}), 400

    pathway = data.get('pathway')
    name = data.get('name')
    email = data.get('email')
    mobile = data.get('mobile')
    role = data.get('role')

    # Basic field validation
    if not all([pathway, name, email, mobile, role]):
        return jsonify({'error': 'Missing required fields'}), 400

    try:
        conn = sqlite3.connect('samarkand_icj.db')
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO registrations (pathway, name, email, mobile, role)
            VALUES (?, ?, ?, ?, ?)
        ''', (pathway, name, email, mobile, role))
        conn.commit()
        conn.close()

        return jsonify({
            'success': True,
            'message': 'Registration received successfully',
            'applicant': {
                'name': name,
                'email': email,
                'pathway': pathway,
                'role': role
            }
        }), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/registrations', methods=['GET'])
def get_registrations():
    """Optional endpoint to view all submitted applications"""
    conn = sqlite3.connect('samarkand_icj.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM registrations ORDER BY created_at DESC')
    rows = cursor.fetchall()
    conn.close()

    registrations = [dict(row) for row in rows]
    return jsonify(registrations), 200

if __name__ == '__main__':
    init_db()
    print("Starting Flask server on http://localhost:5000 ...")
    app.run(debug=True, port=5000)
