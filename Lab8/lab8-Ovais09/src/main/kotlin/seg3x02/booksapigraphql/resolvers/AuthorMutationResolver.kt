package seg3x02.booksapigraphql.resolvers

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component
import seg3x02.booksapigraphql.entity.Author
import seg3x02.booksapigraphql.repository.AuthorRepository

@Component
class AuthorMutationResolver(private val authorRepository: AuthorRepository):
    GraphQLMutationResolver {
    fun newAuthor(bookNumber: Int,
                  firstName: String,
                  lastName:String) : Author {
        val author = Author(bookNumber, firstName, lastName)
        authorRepository.save(author)
        return author
    }
}
