package com.contact.ContactService.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;



@EnableWebSecurity
@Configuration
@Order(2)
public class RunnerAuthenticationSecurityConfig extends WebSecurityConfigurerAdapter{
	
//	@Autowired
//	private UserDetailsService userDetailsService;
	
//	@Autowired
//	private TokenAuthenticationService tokenAuthenticationService;
//	
	public RunnerAuthenticationSecurityConfig(){
		super(true);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.csrf().disable();
		http
				.exceptionHandling()
					.authenticationEntryPoint(new RestAuthenticationEntryPoint())
					.accessDeniedHandler(new RestAuthenticationAccessDeniedHandler())
					.and()
				.anonymous().and()
				.servletApi().and()
				.headers().cacheControl();
			http	
				.authorizeRequests()
								
				//allow anonymous resource requests
				.antMatchers("/").permitAll()
				//.antMatchers("/index.html").permitAll()
//				.antMatchers("/favicon.ico").permitAll()
//				.antMatchers("/excel/**").permitAll()
//				.antMatchers("/logos/**").permitAll()				

				//allow anonymous  GETs to read barcode 
				//.antMatchers(HttpMethod.GET, "/api/user/barcode").permitAll()

////	===================================================================================							
//				this is for swagger -- document API - only LABORATORY
//				.antMatchers(HttpMethod.GET,"/swagger-ui.html").permitAll()
//				.antMatchers(HttpMethod.GET,"/v2/api-docs").permitAll()
//				.antMatchers(HttpMethod.GET,"/webjars/**").permitAll()
//				.antMatchers(HttpMethod.GET,"/images/**").permitAll()
//				.antMatchers(HttpMethod.GET,"/configuration/**").permitAll()
//				.antMatchers(HttpMethod.GET,"/swagger-resources/**").permitAll()
////	===================================================================================							
				//allow anonymous OPTIONSs to API
				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				
				.antMatchers("/public/**").permitAll()
				
				.antMatchers("/api/**").permitAll().and()
				
				//all other request need to be authenticated
//				.anyRequest().hasAnyRole("ADMIN","EVENT_ADMIN","EVENT_MEMBER","EXPOSITOR","ATTENDEE","SPEAKER","PROVIDER").and()	
//				
//				.exceptionHandling().accessDeniedPage("/").and()
				
//				
				.addFilterBefore(new CORSFilter(),  UsernamePasswordAuthenticationFilter.class);
		
				// custom JSON based authentication by POST of {"username":"<name>","password":"<password>"} which sets the token header upon authentication
//				.addFilterBefore(new StatelessLoginFilter("/api/login", tokenAuthenticationService, userDetailsService, authenticationManager()), UsernamePasswordAuthenticationFilter.class)
				
				// custom Token based authentication based on the header previously given to the client
//				.addFilterBefore(new RunnerAuthenticationFilter(tokenAuthenticationService), UsernamePasswordAuthenticationFilter.class);
		
	}
	
//	@Bean
//	@Override
//	public AuthenticationManager authenticationManagerBean() throws Exception {
//		return super.authenticationManagerBean();
//	}

//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
//	}
//
//	@Override
//	protected UserDetailsService userDetailsService() {
//		return userDetailsService;
//	}

}
