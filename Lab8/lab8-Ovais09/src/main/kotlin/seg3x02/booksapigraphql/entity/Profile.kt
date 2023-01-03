package seg3x02.booksapigraphql.entity

import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "profile")
data class Profile(var firstName: String,
                   var lastName: String,
                   var email: String?,
                   var phoneNumber: String?) {
}