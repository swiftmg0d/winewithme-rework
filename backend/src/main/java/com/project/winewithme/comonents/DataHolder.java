package com.project.winewithme.comonents;

import com.project.winewithme.model.Address;
import com.project.winewithme.model.Contact;
import com.project.winewithme.model.Winery;
import com.project.winewithme.repository.AddresRepository;
import com.project.winewithme.repository.ContactRepository;
import com.project.winewithme.repository.WineryRepository;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

@Component
@AllArgsConstructor
public class DataHolder {
    private final AddresRepository addresRepository;
    private final WineryRepository wineryRepository;

    @PostConstruct
    private void fillData() throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new FileReader("data.csv"));
        if(addresRepository.count()==0 && wineryRepository.count()==0)
            bufferedReader.lines().skip(1).forEach(this::createWineries);
    }
    private void createWineries(String line){
        String[] data = line.split(",");
        Address newAddress=new Address(data[2],data[3],data[4],data[5],data[8],data[9],data[10]);
        addresRepository.save(newAddress);
        Winery newWinery=new Winery(data[0],data[1],data[6],data[7],data[11],data[12],newAddress);
        wineryRepository.save(newWinery);
    }
}
