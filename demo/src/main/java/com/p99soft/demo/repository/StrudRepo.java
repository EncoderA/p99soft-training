package com.p99soft.demo.repository;

import com.p99soft.demo.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StrudRepo extends JpaRepository<Student, UUID> {
}
