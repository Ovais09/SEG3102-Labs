package seg3x02.booksapigraphql.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import seg3x02.booksapigraphql.entity.Author

@Repository
interface AuthorRepository: MongoRepository<Author, Int>
