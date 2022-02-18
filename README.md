# RefreshToken

## Goal
This is a simple api made with Express, Typescript, PostgreSQL, Json Web Token(jwt) and NodeJs. On top of that, the ORM Prisma has also been used.
Nevertheless, the main goal of this project is learning how to authenticate requests with jwt and how to generate and manage a refresh token.
Moreover, this application is supposed to follow the best practices with regard to software architecture just like the SOLID principles and clean code.

## Why refresh token?
Refresh tokens are a quite useful feature. The concept is that, when logging into the application,
a token for that user will be generated and returned for the caller. 
With this token, the client is now capable of making specific requests to our api and see the responses. 
Nevertheless, this approach can be a little insecure, because if some malicious user get the token, 
he'll be able to access our user's data indefinitely. That's not a good thing. 
The solution is the refresh token.

Now we'll once again generate a token, however, this time it'll have a short expiration time. So that even if a malicious user has access to the token, he will not be able to access sensible data for a long period of time. So, once the original token expires, we create another one, that's the refresh token. It'll have a longer expiration time, so that our user will be logged into our application longer and with security.


## How has this api been structured?
Before jumping into the implementation details of this application, it's important to understand a little bit about its structure.


### Folder structure
There are 3 main folders in this project. 

The first one is the __helpers__ folder. It holds helper functions/scripts to help test and develop the api.
In our case, we see just a single file called __start_pg_container.sh__ 
this is just a simple script to start a PostgreSQL container in order to allow make tests locally. 
Later, the same logic could be used in a development environment.

The second one is the __prisma__ folder, it holds the prisma ORM configurations for this project.
There, you'll find all migrations as well as the Schemas definitions.

The third, and most important one, is the __src__ folder. It holds our entire api. So it's worth to take a closer look 
at it.

#### source folder (src)
Opening the __src__ folder, we see that, there are a bunch of folder in it. So, let's understand
what exactly each of these folders are supposed to hold and why they are important.

##### entities
This folder holds all entities for our api. In our case, there are two entities: __User__ and
__RefreshToken__ both entities in this case will be related to a table inside our database. But, 
this does not mean that they must be. 
That's why it's a good practice to extract the idea of an entity and place it inside this folder, 
so that, when talking about them, we don't even need to consider a database. Which makes sense even because an entity is a concept completely different than a database!

##### middlewares
This folder holds all the middlewares that our application is going to consume.

##### providers
This folder holds features that are provided for external resources that our application is 
not supposed to be aware of.

##### repositories
Here, we have put all the definitions/contract that will allow us access data or retrieve it.
An important thing to notice in this folder is that, there are two interfaces, for the __UsersRepositories__ and __RefreshTokenRepositories__.
That's because in this project, some SOLID principles have been applied. Here, we're applying two of the most important ones: The dependency inversion principle and the liskov substitution principle.

That's amazing because, an interface is like a contract. In each of the interfaces, we don't have any code, there are just definitions for the operations that whichever class that implements the 
interface is supposed to do.
So that, when using an interfaces, it does not matter what class really implements the operations, as long as the contract is the same, our application will work no matter what.
That's a killer feature, because for instance: Now we're using a PostgreSQL database with Prisma as an ORM. But, later if we wish to change the database it would be as easy as creating a new class and implementing all the methods accordingly!

##### repositories
This folder holds all the api features. Every feature has its own folder that has everything related to that specific use case. 
There you'll find all the logic for the use case and the class that deals with the requests and responses.
