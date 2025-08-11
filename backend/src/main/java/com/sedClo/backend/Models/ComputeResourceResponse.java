package com.sedClo.backend.Models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ComputeResourceResponse {
    private List<ComputeResponse> resources;
    private double totalPrice;
}
