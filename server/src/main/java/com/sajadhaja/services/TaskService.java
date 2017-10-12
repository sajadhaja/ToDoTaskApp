package com.sajadhaja.services;

import java.util.List;

import com.sajadhaja.commands.TaskForm;
import com.sajadhaja.domain.Task;

/**
 * Created by jt on 1/10/17.
 */
public interface TaskService {

	Task save(Task task);

   
	Task delete(String id);

   
    List<Task> findAll();

    
    Task findById(String id);
}
