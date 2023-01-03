# name: Ovais Azeem
## student number: 300112311

To run this aplication, download this repository twice (one for the client and the other one for the server). For the client one, do
1. <code> git checkout client </code>
2. <code> npm install </code>
3. <code> ng serve </code>

Before doing the server one, make sure that docker is installed on your system and if it is installed, run this command 
<code> docker run -d -p 6033:3306 --name=docker-mysql --
env="MYSQL_ROOT_PASSWORD=root" --env="MYSQL_PASSWORD=root" --
env="MYSQL_DATABASE=booksDb" mysql </code>

This will ensure that the docker container is running

For the server one do 
1. <code> git checkout server </code>
2. <code> ./gradlew bootRun </code>

In order to get the author ID, you first must add an author. <br>
To do this, use a tool like Insomnia or Postman <br>
and then do a POST request to http://localhost:8080/books-api/authors <br>
in the form

```
{
  "firstName": "string",
  "lastName": "string"
}
```
![img](https://github.com/SEG3102F22/lab7-Ovais09/blob/main/Insomnia_tndIomRavk.png)

After this is done, go to the link: http://localhost:4200/
and then click on the Authors nav link. Once you are there, enter the authorId derived from the response of the POST request made earlier.
This should ghive you the author's information
