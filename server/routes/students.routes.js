import { Router } from "express";
import { addStudent, getAllStudents, getOneStudent, updateStudent, deleteStudent } from "../controllers/students.controller.js";

const router = Router()

router.route('/students')
    .get(getAllStudents)
    .post(addStudent)

router.route('/students/:id')
    .get(getOneStudent)
    .delete(deleteStudent)
    .patch(updateStudent)

export default router;