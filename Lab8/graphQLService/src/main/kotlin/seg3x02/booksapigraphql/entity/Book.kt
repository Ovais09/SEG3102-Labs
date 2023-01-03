package seg3x02.booksapigraphql.entity

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "book")
data class Book(var bookNumber: Int,
                var category: String,
                var title: String,
                var cost: Float,
                var year: String?,
                var description: String?) {
    @Id
    var bookId: String = ""

    @Transient
    var authors: List<Author> = ArrayList()
}
