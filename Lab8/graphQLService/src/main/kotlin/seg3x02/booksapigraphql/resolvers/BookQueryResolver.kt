package seg3x02.booksapigraphql.resolvers

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.stereotype.Component
import seg3x02.booksapigraphql.entity.Author
import seg3x02.booksapigraphql.entity.Book
import seg3x02.booksapigraphql.repository.BookRepository

@Component
class BookQueryResolver(val bookRepository: BookRepository,
                        private val mongoOperations: MongoOperations
) : GraphQLQueryResolver {
    fun books(): List<Book> {
        val list = bookRepository.findAll()
        for (bk in list) {
            bk.authors = getAuthors(bk.bookNumber)
        }
        return list
    }

    private fun getAuthors(bookNumber: Int): List<Author> {
        val query = Query()
        query.addCriteria(Criteria.where("bookNumber").`is`(bookNumber))
        return mongoOperations.find(query, Author::class.java)
    }

    fun bookById(bookId: String): Book? {
        val book = bookRepository.findById(bookId)
        return if (book.isPresent) {
            val bk = book.get()
            bk.authors = getAuthors(bk.bookNumber)
            bk
        } else {
            null
        }
    }

    fun bookByNumber(bookNumber: Number): Book? {
        val query = Query()
        query.addCriteria(Criteria.where("bookNumber").`is`(bookNumber))
        val result = mongoOperations.find(query, Book::class.java)
        return if (result.isNotEmpty()) {
            val bk = result[0]
            bk.authors = getAuthors(bk.bookNumber)
            bk
        } else {
            null
        }
    }
}
