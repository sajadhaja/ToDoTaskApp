package com.sajadhaja.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sajadhaja.commands.TaskForm;
import com.sajadhaja.domain.Task;
import com.sajadhaja.services.TaskService;

import java.util.List;

import javax.validation.Valid;


@RestController 
@RequestMapping("/task")
public class TaskController {
    private TaskService taskService;
    
    private static final Logger LOGGER = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    public void setTaskService(TaskService taskService) {
        this.taskService = taskService;
    }
    
    @CrossOrigin
    @RequestMapping(value="/save"
    			 ,produces= MediaType.APPLICATION_JSON_VALUE
    			 ,consumes = MediaType.APPLICATION_JSON_VALUE
    			 ,headers={"Access-Control-Allow-Origin:*","Access-Control-Allow-Headers"})
    			 
    Task create(@RequestBody @Valid Task todoEntry) {
        LOGGER.info("Creating a new todo entry with information: {}", todoEntry);

        Task created = taskService.save(todoEntry);
        LOGGER.info("Created a new todo entry with information: {}", created);

        return created;
    }

    @RequestMapping(value = "/delete/{id}")
    Task delete(@PathVariable("id") String id) {
        LOGGER.info("Deleting todo entry with id: {}", id);

        Task deleted = taskService.delete(id);
        LOGGER.info("Deleted todo entry with information: {}", deleted);

        return deleted; 
    }
    
    @CrossOrigin(allowedHeaders="*")
    @RequestMapping(value="/fetch",produces= MediaType.APPLICATION_JSON_VALUE)
    List<Task> findAll() {
        LOGGER.info("Finding all todo entries");

        List<Task> todoEntries = taskService.findAll();
        LOGGER.info("Found {} todo entries", todoEntries.size());

        return todoEntries;
    }

    @RequestMapping(value = "/find/{id}")
    Task findById(@PathVariable("id") String id) {
        LOGGER.info("Finding todo entry with id: {}", id);

        Task todoEntry = taskService.findById(id);
        LOGGER.info("Found todo entry with information: {}", todoEntry);

        return todoEntry;
    }

    /*@RequestMapping(value = "{id}", method = RequestMethod.PUT)
    Task update(@RequestBody @Valid Task todoEntry) {
        LOGGER.info("Updating todo entry with information: {}", todoEntry);

        Task updated = taskService.save(todoEntry);
        LOGGER.info("Updated todo entry with information: {}", updated);

        return updated;
    }*/
}
