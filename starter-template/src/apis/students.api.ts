import { Student } from './../types/students.type';
import { Students } from "types/students.type";
import http from "utils/http";

export const getStudents = (page : number | string, limit: number | string) => 
    http.get<Students>('students', {
    params: { 
        _page: page,
        _limit: limit 
    }
})

//bo ra id, dung Omit de bo
export const addStudent = (student: Omit<Student, 'id'>) => http.post<Student>('students', student)