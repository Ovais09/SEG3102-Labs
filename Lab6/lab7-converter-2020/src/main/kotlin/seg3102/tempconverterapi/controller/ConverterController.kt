package seg3102.tempconverterapi.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("temperature-converter")
class ConverterController {
    @GetMapping("/celsius-fahrenheit/{celsius}")
    fun getFahrenheit(@PathVariable celsius: Double) = ((celsius * 9) / 5 + 32)

    @GetMapping("/fahrenheit-celsius/{fahrenheit}")
    fun getCelsius(@PathVariable fahrenheit: Double) = ((fahrenheit - 32) * 5) / 9
}
