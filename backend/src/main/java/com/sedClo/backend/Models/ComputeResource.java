package com.sedClo.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ComputeResource {
    private String id;
    private String resourceType;
    private String resourceSubType;
    private String quantity;
    private String region;
}
