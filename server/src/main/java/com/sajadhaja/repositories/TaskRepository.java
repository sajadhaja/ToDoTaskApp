package com.sajadhaja.repositories;

import org.springframework.data.repository.CrudRepository;

import com.sajadhaja.domain.Task;

/**
 * Created by jt on 1/10/17.
 */
public interface TaskRepository extends CrudRepository<Task, String> {
}
