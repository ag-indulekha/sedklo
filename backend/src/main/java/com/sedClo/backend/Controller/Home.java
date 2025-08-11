package com.sedClo.backend.Controller;

import com.sedClo.backend.Models.ComputeResource;
import com.sedClo.backend.Models.ComputeResourceResponse;
import com.sedClo.backend.Models.ComputeResponse;
import com.sedClo.backend.Models.Resource;
import com.sedClo.backend.Repository.ComputeResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Home {
    @Autowired
    private ComputeResourceRepository priceRepo;

    @PostMapping("/")
    public String hello(){
        return "Hello server is running properly";
    }

    @PostMapping("/prices")
    public ComputeResourceResponse ResourceType(@RequestBody List<ComputeResource> resources) {
        double totalPrice=0;
        List<ComputeResponse> response = new ArrayList<>();
        System.out.println("Received request with " + resources.size() + " objects");
        for (ComputeResource r : resources) {
            Optional<Resource> price = priceRepo.findByResourceSubTypeIgnoreCaseAndRegionIgnoreCase(r.getResourceSubType(),r.getRegion());
            if(price.isPresent()){
                Resource pr = price.get();
                double individualTotal = pr.getPrice()*Integer.parseInt(r.getQuantity());
                totalPrice += individualTotal;
                System.out.println(r.getResourceSubType() + " | " + r.getQuantity() + " | " + r.getRegion() + " | Total: " + individualTotal);
                ComputeResponse res = new ComputeResponse(r.getResourceType(),r.getResourceSubType(),r.getQuantity(),r.getRegion(),pr.getPrice(),individualTotal);
                response.add(res);
            }
            else{
                System.out.println("No price found for " + r.getResourceSubType() + " in " + r.getRegion());
            }

        }
        ComputeResourceResponse finalRes = new ComputeResourceResponse();
        finalRes.setResources(response);
        finalRes.setTotalPrice(totalPrice);
        return finalRes;
    }


}
