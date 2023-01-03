package seg3x02.booksrestapi.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import seg3x02.booksrestapi.security.jwt.JwtUtils


@Configuration
@EnableWebSecurity
class ApiSecurityConfig(var userDetailsService: UserDetailsServiceImpl,
                        var unauthorizedHandler: AuthenticationEntry,
                        var jwtUtils: JwtUtils) {
    @Bean
    fun authenticationJwtTokenFilter(): AuthenticationFilter {
        return AuthenticationFilter(jwtUtils,userDetailsService)
    }

    @Bean
    @Throws(Exception::class)
    fun authenticationManager(authenticationConfiguration: AuthenticationConfiguration): AuthenticationManager {
        return authenticationConfiguration.authenticationManager
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    @Bean
    fun configure(http: HttpSecurity): SecurityFilterChain {
        http.cors().and().csrf().disable()
            .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .authorizeRequests().antMatchers("/auth/**").permitAll()
            .antMatchers(HttpMethod.GET,"/books-api/**").hasAnyRole("USER", "ADMIN")
            .antMatchers(HttpMethod.POST, "/books-api/**").hasRole("ADMIN")
            .antMatchers(HttpMethod.DELETE, "/books-api/**").hasRole("ADMIN")
            .antMatchers(HttpMethod.PUT, "/books-api/**").hasRole("ADMIN")
            .antMatchers(HttpMethod.PATCH, "/books-api/**").hasRole("ADMIN")
            .anyRequest().authenticated()
        http.addFilterBefore(authenticationJwtTokenFilter(),
            UsernamePasswordAuthenticationFilter::class.java)
        return http.build()
    }
}
