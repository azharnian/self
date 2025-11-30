package com.example.helloapi.todo;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class TodoController {
    private final Map<Long, Todo> store = new ConcurrentHashMap<>();
    private final AtomicLong seq = new AtomicLong(1);

    @GetMapping
    public Collection<Todo> list() {
        return store.values();
    }

    @PostMapping
    public Todo create(@RequestBody Todo in) {
        long id = seq.getAndIncrement();
        Todo t = new Todo(id, in.getTitle(), in.isDone());
        store.put(id, t);
        return t;
    }

    @GetMapping("/{id}")
    public Todo get(@PathVariable Long id) {
        Todo t = store.get(id);
        if (t == null) throw new NoSuchElementException("Not found");
        return t;
    }

    @PutMapping("/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo in) {
        if (!store.containsKey(id)) throw new NoSuchElementException("Not found");
        Todo t = new Todo(id, in.getTitle(), in.isDone());
        store.put(id, t);
        return t;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        store.remove(id);
    }
}
