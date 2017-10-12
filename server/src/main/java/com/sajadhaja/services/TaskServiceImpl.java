package com.sajadhaja.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sajadhaja.domain.Task;
import com.sajadhaja.repositories.TaskRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jt on 1/10/17.
 */
@Service
public class TaskServiceImpl implements TaskService {

	private TaskRepository productRepository;

	@Autowired
	public TaskServiceImpl(TaskRepository productRepository) {
		this.productRepository = productRepository;
	}

	@Override
	public Task save(Task task) {
		productRepository.save(task);
		return task;
	}

	@Override
	public Task delete(String id) {
		productRepository.delete(id);
		return null;
	}

	@Override
	public List<Task> findAll() {
		List<Task> products = new ArrayList<>();
		productRepository.findAll().forEach(products::add); // fun with Java 8
		return products;
	}

	@Override
	public Task findById(String id) {
		return productRepository.findOne(id);
	}
}
