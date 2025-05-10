from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = []
id_counter = 1

@app.route('/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

@app.route('/todos', methods=['POST'])
def add_todo():
    global id_counter
    data = request.get_json()
    new_todo = {
        'id': id_counter,
        'task': data['task'],
        'completed': False
    }
    todos.append(new_todo)
    id_counter += 1
    return jsonify(new_todo), 201

@app.route('/todos/<int:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    data = request.get_json()
    for todo in todos:
        if todo['id'] == todo_id:
            todo['task'] = data.get('task', todo['task'])
            todo['completed'] = data.get('completed', todo['completed'])
            return jsonify(todo)
    return jsonify({'error': 'Not found'}), 404

@app.route('/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    global todos
    todos = [todo for todo in todos if todo['id'] != todo_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)