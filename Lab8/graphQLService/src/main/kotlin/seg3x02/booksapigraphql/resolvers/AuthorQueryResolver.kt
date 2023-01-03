package seg3x02.booksapigraphql.resolvers

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.stereotype.Component
import seg3x02.booksapigraphql.entity.Author

@Component
class AuthorQueryResolver(val mongoOperations: MongoOperations): GraphQLQueryResolver {
    fun authors(bookNumber: Int): List<Author> {
        val query = Query()
        query.addCriteria(Criteria.where("bookNumber").`is`(bookNumber))
        return mongoOperations.find(query, Author::class.java)
    }
}
