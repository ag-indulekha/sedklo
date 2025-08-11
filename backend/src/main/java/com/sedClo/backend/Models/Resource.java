package com.sedClo.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "resource")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Resource {
    @Id
    public Long id;
    public String resourceSubType;
    public int price;
    public String region;
}
