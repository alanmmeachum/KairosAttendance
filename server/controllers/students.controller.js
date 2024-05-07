import Students from "../models/students.model.js";

async function getAllStudents(req, res) {
  try {
    const allStudents = await Blog.find();
    res.json(allStudents);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getOneStudent(req, res) {
  try {
    const oneStudent = await Students.findById(req.params.id);
    res.json(oneStudent);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function addStudent(req, res) {
  try {
    const newStudent = new Students(req.body);
    const student = await newStudent.save();
    res.json(newStudent);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateStudent(req, res) {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteStudent(req, res) {
  try {
    const deletedStudent = await Students.findByIdAndDelete(req.params.id);
    res.json(deletedStudent);
  } catch (err) {
    res.status(400).json(err);
  }
}

export {
    getAllStudents,
    getOneStudent,
    addStudent,
    updateStudent,
    deleteStudent
}