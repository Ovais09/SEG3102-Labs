package ca.uottawa.seg3102.temperatureconverterapi

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController





@RestController
@RequestMapping("/api/convert")
class AppController {
    @GetMapping("/celsius/{fahrenheit}")
    fun getCelsius(@PathVariable fahrenheit: Double) = ((fahrenheit - 32) * 5) / 9

    @GetMapping("/fahrenheit/{celsius}")
    fun getFahrenheit(@PathVariable celsius: Double) = ((celsius * 9) / 5 + 32)
}