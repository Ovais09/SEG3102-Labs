package seg3102.calculatorapplicationapi.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("calculator")
class ConverterController {
    @GetMapping("/add/{number1}/{number2}")
    fun add(@PathVariable number1: Double, @PathVariable number2: Double): Double {
        return number1 + number2
    }

    @GetMapping("/subtract/{number1}/{number2}")
    fun subtract(@PathVariable number1: Double, @PathVariable number2: Double): Double {
        return number1 - number2
    }

    @GetMapping("/multiply/{number1}/{number2}")
    fun multiply(@PathVariable number1: Double, @PathVariable number2: Double): Double {
        return number1 * number2
    }

    @GetMapping("/divide/{number1}/{number2}")
    fun divide(@PathVariable number1: Double, @PathVariable number2: Double): Double {
        return number1 / number2
    }
}
