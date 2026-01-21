package com.f1calender.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RaceController {

    // Static data for now; later, fetch from Ergast API using RestTemplate
    private final List<Map<String, Object>> races = List.of(
        Map.of("round", 1, "name", "Australian Grand Prix", "circuit", "Albert Park", "location", "Melbourne, Australia", "date", "2026-03-06T00:00:00Z"),
        // Add the rest of the races here, same as in script.js
        Map.of("round", 24, "name", "Abu Dhabi Grand Prix", "circuit", "Yas Marina Circuit", "location", "Abu Dhabi, UAE", "date", "2026-12-04T00:00:00Z")
    );

    @GetMapping("/races")
    public List<Map<String, Object>> getRaces() {
        return races;
    }
}