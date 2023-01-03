package seg3x02.booksapigraphql.entity

import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "author")
data class Author(var bookNumber: Int,
                  var firstName: String,
                  var lastName: String)
