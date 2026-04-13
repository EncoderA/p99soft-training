package com.p99soft.demo.service;

import com.p99soft.demo.entity.Student;
import com.p99soft.demo.repository.StrudRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class StudentService {
    @Autowired
    private StrudRepo strudRepo;

    public boolean createStudent(Student student) {
        strudRepo.save(student);
        return true;
    }
    public List<Student> getStudents() {
        return strudRepo.findAll();
    }
    public Student getStudentById(UUID id) {
        return strudRepo.findById(id).orElse(null);
    }
    public Student updateStudent(UUID id, Student student) {
        return strudRepo.findById(id).map(existingStudent -> {
            existingStudent.setName(student.getName());
            existingStudent.setEmail(student.getEmail());
            existingStudent.setCourse(student.getCourse());
            return strudRepo.save(existingStudent);
        }).orElse(null);
    }
}
