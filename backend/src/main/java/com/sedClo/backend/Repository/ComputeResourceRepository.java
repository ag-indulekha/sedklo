package com.sedClo.backend.Repository;

import com.sedClo.backend.Models.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ComputeResourceRepository extends JpaRepository<Resource,Long> {
    Optional<Resource> findByResourceSubTypeIgnoreCaseAndRegionIgnoreCase(String resourceSubType, String region);
}
