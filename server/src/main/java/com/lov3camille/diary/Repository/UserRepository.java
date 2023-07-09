package com.lov3camille.diary.Repository;

import com.lov3camille.diary.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
