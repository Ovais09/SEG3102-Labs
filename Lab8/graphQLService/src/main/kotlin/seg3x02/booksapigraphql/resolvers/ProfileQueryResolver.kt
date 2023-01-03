package seg3x02.booksapigraphql.resolvers

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.stereotype.Component

import seg3x02.booksapigraphql.entity.Profile
import seg3x02.booksapigraphql.repository.ProfileRepository

@Component
class ProfileQueryResolver(val profileRepository: ProfileRepository,
                           private val mongoOperations: MongoOperations
) : GraphQLQueryResolver {
    fun profiles(): List<Profile> {
        return profileRepository.findAll()
    }

    fun profileById(profileId: String): Profile? {
        val profile = profileRepository.findById(profileId)
        return if (profile.isPresent) {
            profile.get()
        } else {
            null
        }
    }

    fun profileByEmail(email: String): Profile? {
        val query = Query()
        query.addCriteria(Criteria.where("email").`is`(email))
        val result = mongoOperations.find(query, Profile::class.java)
        return if (result.isNotEmpty()) {
            result[0]
        } else {
            null
        }
    }
}
