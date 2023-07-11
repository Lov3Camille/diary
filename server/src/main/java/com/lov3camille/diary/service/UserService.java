package com.lov3camille.diary.service;

import com.lov3camille.diary.model.User;

import java.util.List;

public interface UserService {
    User registerUser(User user);

    User loginUser(String userName, String password);

    List<User> getAllUser();
}
