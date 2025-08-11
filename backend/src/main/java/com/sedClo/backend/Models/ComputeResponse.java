package com.sedClo.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ComputeResponse {
    private String resourceType;
    private String resourceSubType;
    private String quantity;
    private String Region;
    private int price;
    private double totalPrice;
}
