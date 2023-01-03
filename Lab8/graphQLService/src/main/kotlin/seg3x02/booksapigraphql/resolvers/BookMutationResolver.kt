package seg3x02.booksapigraphql.resolvers

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component
import seg3x02.booksapigraphql.entity.Book
import seg3x02.booksapigraphql.repository.BookRepository
import java.util.*

@Component
class BookMutationResolver(private val bookRepository: BookRepository):
    GraphQLMutationResolver {
    fun newBook(bookNumber: Int,
                category: String,
                title: String,
                cost: Float,
                year: String?,
                description: String?) : Book {
        val book = Book(bookNumber, category, title, cost, year, description)
        book.bookId = UUID.randomUUID().toString()
        bookRepository.save(book)
        return book
    }

    fun deleteBook(id: String) : Boolean {
        bookRepository.deleteById(id)
        return true
    }

    fun updateBook(bookId: String,
                   bookNumber: Int,
                   category: String?,
                   title: String?,
                   cost: Float?,
                   year: String?,
                   description: String?) : Book {
        val book = bookRepository.findById(bookId)
        book.ifPresent {
            if (bookNumber != null) {
                it.bookNumber = bookNumber
            }
            if (category != null) {
                it.category = category
            }
            if (title != null) {
                it.title = title
            }
            if (cost != null) {
                it.cost = cost
            }
            it.year = year
            it.description = description
            bookRepository.save(it)
        }
        return book.get()
    }
}
