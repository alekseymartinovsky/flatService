package com.example.server.service;

import com.example.server.entity.CurrencyEntity;
import com.example.server.model.PriceConverter;
import com.example.server.repository.CurrencyRepository;
import com.example.server.utils.Formatter;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Date;

@Service
public class CurrencyService {

    @Autowired
    CurrencyRepository currencyRepository;

    private CurrencyEntity getActualCurrencyRate() throws Exception {
        Date nowDate = new Date();
        CurrencyEntity saveCurrency = currencyRepository.findFirstById(1l);
        Boolean isUpdate = false;

        if(saveCurrency != null){
            long diffInMilliseconds = Math.abs(nowDate.getTime() - saveCurrency.getUpdateDate().getTime());
            long diffInHours = diffInMilliseconds / (60 * 60 * 1000);
            if(diffInHours >= 1 || nowDate.getDay() != saveCurrency.getUpdateDate().getDay() || nowDate.getMonth() != saveCurrency.getUpdateDate().getMonth()){
                isUpdate = true;
            }
        }else{
            isUpdate = true;
        }

        if(!isUpdate){
            return saveCurrency;
        }

        Double eurRate = this.getCurrencyRateByApi("eur");
        Double usdRate = this.getCurrencyRateByApi("usd");
        if(eurRate == null || usdRate == null){
            return saveCurrency;
        }
        CurrencyEntity newCurrency = new CurrencyEntity();
        newCurrency.setId(1l);
        newCurrency.setUSD(usdRate);
        newCurrency.setEUR(eurRate);
        newCurrency.setUpdateDate(nowDate);
        return currencyRepository.save(newCurrency);
    }

    private Double getCurrencyRateByApi(String currencyName) throws Exception {
        String apiUrl = "https://www.nbrb.by/api/exrates/rates/";
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl + currencyName +"?parammode=2", String.class);
        String body = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode root = objectMapper.readTree(body);
        return root.get("Cur_OfficialRate").asDouble();
    }

    public PriceConverter getPrice(Double price) throws Exception {
        CurrencyEntity currencyEntity = this.getActualCurrencyRate();
        Double eur = Formatter.toDoubleView(currencyEntity.getEUR() * price);
        Double usd = Formatter.toDoubleView(currencyEntity.getUSD() * price);
        PriceConverter priceConverter = new PriceConverter(price, eur, usd);
        return priceConverter;
    }


}
