package com.lov3camille.diary.service.Impl;

import com.lov3camille.diary.Repository.UserRepository;
import com.lov3camille.diary.model.User;
import com.lov3camille.diary.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User loginUser(String userName, String password) {
        Optional<User> optionalUser = userRepository.findByName(userName);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (password.equals(user.getPassword())) return user;
        }
        log.warn("No user found with name: {}", userName);
        return null;
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }
}
