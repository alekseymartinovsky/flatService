package com.example.server.service;

import com.example.server.entity.CreditParams;
import com.example.server.model.Credit;
import com.example.server.model.ParamsForCalcCredit;
import com.example.server.repository.CreditParamsRepository;
import com.example.server.utils.Formatter;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.text.DecimalFormat;
import java.util.Date;
@Service
public class CreditService {

    @Autowired
    CreditParamsRepository creditParamsRepository;

    public CreditParams getCreditParams() throws JsonProcessingException {
        Date nowDate = new Date();
        CreditParams creditParams = creditParamsRepository.findFirstById(1l);
        if(creditParams == null || creditParams.getUpdateDate().getMonth() < nowDate.getMonth() || creditParams.getUpdateDate().getDay() < nowDate.getDay()){
            CreditParams newCreditParams = new CreditParams();
            String apiUrl = "https://belarusbank.by/api/kredits_info";
            URI url = UriComponentsBuilder.fromUriString(apiUrl)
                    .queryParam("typeRent", "на%20недвижимость")
                    .build()
                    .toUri();
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            if(response.getStatusCode() != HttpStatus.OK && creditParams != null){
                return creditParams;
            }

            String res = response.getBody();
            String resSplit[] = res.split("\n");
            String responseBody = resSplit[resSplit.length-1];

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode root = objectMapper.readTree(responseBody);

            for (JsonNode node : root) {
                if (node.has("inf_id") && node.get("inf_id").asText().equals("20220930083942553008")) {
                    newCreditParams.setId(1l);
                    newCreditParams.setUpdateDate(nowDate);
                    newCreditParams.setMaxMonths(node.get("inf_time").asInt());
                    newCreditParams.setRate(node.get("inf_proc_formula").asDouble());
                    break;
                }
            }
            return creditParamsRepository.save(newCreditParams);
        }
        return creditParams;
    }

    public Credit calcCredit(ParamsForCalcCredit creditParams){
        Credit credit = new Credit();
        Double rate = creditParamsRepository.findFirstById(1l).getRate();
        Double result = calculateInterest(creditParams.getSumCredit(), rate, creditParams.getMonth());
        Double overpayment = result - creditParams.getSumCredit();

        credit.setMonth(creditParams.getMonth());
        credit.setSumCredit(creditParams.getSumCredit());
        credit.setRate(rate);
        credit.setResultSum(Formatter.toDoubleView(result));
        credit.setOverpayment(Formatter.toDoubleView(overpayment));
        return credit;
    }

    public static double calculateInterest(double loanAmount, double interestRate, int loanPeriodInMonths) {
        double monthlyInterestRate = interestRate / 1200; // процентная ставка в месяц
        double monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanPeriodInMonths)); // ежемесячный платеж
        return monthlyPayment * loanPeriodInMonths;
    }

}
