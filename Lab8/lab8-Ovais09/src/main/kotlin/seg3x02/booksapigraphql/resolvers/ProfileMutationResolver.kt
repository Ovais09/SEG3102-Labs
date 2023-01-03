package seg3x02.booksapigraphql.resolvers

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component
import seg3x02.booksapigraphql.entity.Profile
import seg3x02.booksapigraphql.repository.ProfileRepository

@Component
class ProfileMutationResolver(val profileRepository: ProfileRepository) : GraphQLMutationResolver {
    fun createProfile(firstName: String, lastName: String, email: String?, phoneNumber: String?): Profile {
        val profile = Profile(firstName, lastName, email, phoneNumber)
        profileRepository.save(profile)
        return profile
    }
}