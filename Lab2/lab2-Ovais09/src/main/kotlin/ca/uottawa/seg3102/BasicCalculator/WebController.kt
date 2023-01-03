package ca.uottawa.seg3102.BasicCalculator

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam

@Controller
class WebController {
    @ModelAttribute
    fun addAttributes(model: Model) {
        model.addAttribute("error", "")
        model.addAttribute("numberone", "")
        model.addAttribute("numbertwo", "")
        model.addAttribute("result", "")
    }

    @RequestMapping("/")
    fun home(): String {
        return "home"
    }

    @GetMapping(value = ["/convert"])
    fun doConvert(
        @RequestParam(value = "numberone", required = false) numberone: String,
        @RequestParam(value = "numbertwo", required = false) numbertwo: String,
        @RequestParam(value = "result", required = false) result: String,
        @RequestParam(value = "operation", required = false) operation: String,
        model: Model
    ): String {
    var numberoneval: Double
    var numbertwoval: Double
    var resultval: Double
    when (operation) {
    "add" ->
    try {
    numberoneval = numberone.toDouble()
    numbertwoval = numbertwo.toDouble()
    resultval = (numberoneval + numbertwoval)
    println("the result is $resultval")
    model.addAttribute("numberone", numberone)
    model.addAttribute("numbertwo", numbertwo)
    model.addAttribute("result", resultval)
  
    } catch (exp: NumberFormatException) {
    
    if((numberone.matches(Regex("[a-zA-Z]+")) && numbertwo.matches(Regex("[a-zA-Z]+"))) || (numberone.length == 0 && numbertwo.length == 0)  ) {
        model.addAttribute("error", "BothFormatError")
    }

    else {
        if (numberone.matches(Regex("[a-zA-Z]+")) || numberone.length == 0) {
            model.addAttribute("error", "numberoneerror")
        }
    
        else if (numbertwo.matches(Regex("[a-zA-Z]+")) || numbertwo.length == 0) {
            model.addAttribute("error", "numbertwoerror")
        }
    }


    model.addAttribute("numberone", numberone)
    model.addAttribute("numbertwo", numbertwo)
    }
    "subtract" ->
    try {
        numberoneval = numberone.toDouble()
        numbertwoval = numbertwo.toDouble()
        resultval = (numberoneval - numbertwoval)
        println("the result is $resultval")
        model.addAttribute("numberone", numberone)
        model.addAttribute("numbertwo", numbertwo)
        model.addAttribute("result", resultval)

        } catch (exp: NumberFormatException) {
        
        if((numberone.matches(Regex("[a-zA-Z]+")) && numbertwo.matches(Regex("[a-zA-Z]+"))) || (numberone.length == 0 && numbertwo.length == 0)  ) {
            model.addAttribute("error", "BothFormatError")
        }
    
        else {
            if (numberone.matches(Regex("[a-zA-Z]+")) || numberone.length == 0) {
                model.addAttribute("error", "numberoneerror")
            }
        
            else if (numbertwo.matches(Regex("[a-zA-Z]+")) || numbertwo.length == 0) {
                model.addAttribute("error", "numbertwoerror")
            }
        }
    
    
        
        model.addAttribute("numberone", numberone)
        model.addAttribute("numbertwo", numbertwo)
        }
        "multiply" ->
    try {
        numberoneval = numberone.toDouble()
        numbertwoval = numbertwo.toDouble()
        resultval = (numberoneval * numbertwoval)
        println("the result is $resultval")
        model.addAttribute("numberone", numberone)
        model.addAttribute("numbertwo", numbertwo)
        model.addAttribute("result", resultval)
        } catch (exp: NumberFormatException) {
        
        if((numberone.matches(Regex("[a-zA-Z]+")) && numbertwo.matches(Regex("[a-zA-Z]+"))) || (numberone.length == 0 && numbertwo.length == 0)  ) {
            model.addAttribute("error", "BothFormatError")
        }
    
        else {
            if (numberone.matches(Regex("[a-zA-Z]+")) || numberone.length == 0) {
                model.addAttribute("error", "numberoneerror")
            }
        
            else if (numbertwo.matches(Regex("[a-zA-Z]+")) || numbertwo.length == 0) {
                model.addAttribute("error", "numbertwoerror")
            }
        }
    
    
        
        model.addAttribute("numberone", numberone)
        model.addAttribute("numbertwo", numbertwo)
        }
        "divide" ->
    try {
        numberoneval = numberone.toDouble()
        numbertwoval = numbertwo.toDouble()
        resultval = (numberoneval / numbertwoval)
        println("the result is $resultval")
        model.addAttribute("numberone", numberone)
        model.addAttribute("numbertwo", numbertwo)
        model.addAttribute("result", resultval)
        } catch (exp: NumberFormatException) {
        
        if((numberone.matches(Regex("[a-zA-Z]+")) && numbertwo.matches(Regex("[a-zA-Z]+"))) || (numberone.length == 0 && numbertwo.length == 0)  ) {
            model.addAttribute("error", "BothFormatError")
        }
    
        else {
            if (numberone.matches(Regex("[a-zA-Z]+")) || numberone.length == 0) {
                model.addAttribute("error", "numberoneerror")
            }
        
            else if (numbertwo.matches(Regex("[a-zA-Z]+")) || numbertwo.length == 0) {
                model.addAttribute("error", "numbertwoerror")
            }
        }
    
    
        
        model.addAttribute("numberone", numberone)
        model.addAttribute("numbertwo", numbertwo)
        }
        
    }
    return "home"
    }
}