package com.p99soft.demo.controller;

import com.p99soft.demo.entity.Student;
import com.p99soft.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/v1/api/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/create")
    public ResponseEntity<Map<String, Object>> create(@RequestBody Student student) {
        HashMap<String, Object> response = new HashMap<>();
        try {
            if (studentService.createStudent(student)) {
                response.put("status", "success");
                response.put("message", "Student created successfully");
                response.put("data", student);
                return new ResponseEntity<>(response, HttpStatus.CREATED);
            }

            response.put("status", "failed");
            response.put("message", "Student could not be created");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-all-students")
    public ResponseEntity<Map<String, Object>> getAllStudents() {
        HashMap<String, Object> response = new HashMap<>();
        try {
            response.put("all-students",studentService.getStudents());
            response.put("status", "failed");
            response.put("message", "Student could not be created");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/get-student/{id}")
    public ResponseEntity<Map<String, Object>> getStudent(@PathVariable UUID id) {
        HashMap<String, Object> response = new HashMap<>();
        try {
            response.put("Student", studentService.getStudentById(id));
            response.put("status", "success");
            response.put("message", "Student found successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.put("status", "failed");
            response.put("message", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable UUID id, @RequestBody Student student) {
        HashMap<String, Object> response = new HashMap<>();
        try {
            response.put("status", "success");
            response.put("message", "Student updated successfully");
            response.put("data", studentService.updateStudent(id, student));
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
