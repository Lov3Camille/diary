package com.lov3camille.diary.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "d_user")
public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "mail")
    private String mail;
}
