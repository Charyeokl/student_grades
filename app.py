from flask import Flask, render_template, request, jsonify
from models import Student, GradeTracker

app = Flask(__name__)
grade_tracker = GradeTracker()
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add_student():
    data = request.json
    student = Student(data['student_id'], data['name'], data['grade'])
    grade_tracker.add_student(student)
    return jsonify({'status': 'Student Added'})

@app.route('/update', methods = ['POST'])
def update_grade():
    data = request.json
    grade_tracker.update_grade(data['student_id'], data['grade'])
    return jsonify({'status': 'Grade Updated'})

@app.route('/delete', methods = ['POST'])
def delete_student():
    data = request.json
    grade_tracker.delete_student(data['student_id'])
    return jsonify({'status': 'Student Deleted'})

@app.route('/students/<int:student_id>')
def get_student(student_id):
    student = grade_tracker.get_student(student_id)
    if student:
        if student:
            return jsonify(student.to_dict())
        else:
            return jsonify({'error': 'Student not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)