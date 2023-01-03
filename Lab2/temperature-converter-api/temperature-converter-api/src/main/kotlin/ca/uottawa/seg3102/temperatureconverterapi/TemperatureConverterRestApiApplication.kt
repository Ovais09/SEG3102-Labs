package ca.uottawa.seg3102.temperatureconverterapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TemperatureConverterRestApiApplication

fun main(args: Array<String>) {
	runApplication<TemperatureConverterRestApiApplication>(*args)
}
