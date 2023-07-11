package com.lov3camille.diary.controller;

import com.lov3camille.diary.model.User;
import com.lov3camille.diary.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestParam String userName, @RequestParam String password) {
        return userService.loginUser(userName, password);
    }

    @GetMapping("/")
    public List<User> getUsers() {
        return userService.getAllUser();
    }
}
