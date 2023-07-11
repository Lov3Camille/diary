package com.lov3camille.diary.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "d_user")
public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, unique = true)
    private String password;

    @Column(nullable = false, unique = true)
    private String mail;
}
