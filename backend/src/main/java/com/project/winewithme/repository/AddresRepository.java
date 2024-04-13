package com.project.winewithme.repository;

import com.project.winewithme.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddresRepository extends JpaRepository<Address,Long> {
}
