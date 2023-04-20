# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: When calling 'super' in Ruby within a method, it is used to invoke the original method in the superclass of that class. An example can be seen below.

class Robot
  def speak
    puts "I am a robot"
  end
end

class Humanoid < Robot
  def speak
    puts "I am a humanoid"
  end
end

robot = robot.new
robot.speak = "I am a robot"

humanoid = humanoid.new
humanoid.speak = "I am a humanoid"

Researched answer: A super in Ruby is used to call a method in the superclass of the current class. Ruby looks for the same method in the superclass and uses it with the same arguments that were passed to the current method.

2. What is a gem?

Your answer: A gem is an open-source library that contains bits of Ruby code. A gem lets a developer to use the code pre-packaged in the gem within the program that they are building. A few examples of gems are JSON, Rails, and RSpec.

Researched answer: In Ruby, a gem is a package of Ruby code that is used to increase the functionality of Ruby applications. A gem contains Ruby code, their data files, and other files that allow the code to function properly.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a large table that stores information in rows and columns. Each row is a single item and each column hold specific information about that item in the row. A relational database connects information between different tables. An example would be if you have a table named "People." In each row, there would be a different person's name and in each column, data about the person would be listed, such as favorite color and age. 

Researched answer: A relational database stores and organizes data using tables. The tables consist of rows and columns, with each row representing a single instance of data. Relational databases are used in software applications. An example of a relational database is PostgreSQL.

4. What are primary keys? Why are they important?

Your answer: A primary key is the backbone of a database. It is a column or set of columns that identifies each row in a table. It is important because it allows data to be to be organized. We can also sift and search through the data in the table by using the primary key. An example of a primary key is like a social security number. Specific data is attached to the number, and it helps people identify you. No one has the EXACT same SSN; however, many of them are similar. 

Researched answer: Primary keys are used as a reference point for other parts of the application. They are an important part of a database because they allow us to organize and manage data effectively.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTML verbs are the following:
Post (Create): sends data to the server to make a new source
Get (Read): gets a resource from the server
Put (Update): sends data to the server to update an existing resource
Delete (Delete): deletes the resource completely from the server

Researched answer: The HTML verbs are post, get, put, and delete. Get is used to get information from the server. When we type in a website into the browser, the browser sends a get request to load the page.
Post is used to send the data to the server to create a new resource. If we needed to log in on a website in order to see our order history or anything that is attached to our username/password on the website, the user would send a POST request. If we wanted to login on that same website and update our user profile, we would do a PUT request. Delete is used to remove a source from the server. When we go on Instagram and delete posts from the server, this is an example of a delete request.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: a way to ensuee that the data being saved in a database meets certain requirements. 

2. RESTful routes: used for defining URLs and HTTP methods that correspond to different CRUD operations in an application.

3. ERB: Embedded Ruby is a system used that allows us to embed Ruby code into HTML.

4. Params: a way to pass in additional information into a method to query the database or modify the view.

5. API: an application of only controllers and models.
