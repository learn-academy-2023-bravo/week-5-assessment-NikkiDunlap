# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudocode: 
    # Define a function named 'includes_this_letter' that has 2 parameters 'array_of_words' and 'letter'
    # Create an empty array named 'our_result' to hold the words that contain the 'letter' we are looking for 
    # Iterate over each word in the given array by using .each
    # Check if each word contains the letter in our given variables by using the .include? method
    # If it does have the letter in our given variable, the string will be added to 'our_result' using <<
    # The return will consist of the array containing the words that include the given letters

        def includes_this_letter(array_of_words, letter)
            our_result = []
            array_of_words.each do |word|
            if word.include?(letter)
                our_result << word
            end
        end
            return our_result
        end


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = 
{ northwest: ['Washington', 'Oregon', 'Idaho'], 
southwest: ['California', 'Arizona', 'Nevada'], 
notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

        # Pseudocode:
            # Define a method called "sort_array_no_nested" that takes in "hash" as a single argument
            # Create an empty array called values from the new hash that we will have to sort and un-nest
            # Use .each to iterate over each kay value pair within the hash
            # The key variable is to represent the given value array
            # Use the .concat method to add all of the values in the values array. We have to use this instead of push so we don't produce nested arrays
            # Use the .sort method to sort the method in alphabetical order 

            def sort_array_no_nested(hash)
                values = []
                hash.each do |key, value|
                    values.concat(value)
                end
                values.sort
            end



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

    # Pseudocode:
            # Create a class called "Bike"
            # Use the attr_accessor to define the 3 instance variables named "model", "wheels", and "current_speed." This is a shortcut for making getter and setter methods
            # Initialize method takes 3 arguments and sets the value of the instance variables using "@"
            # Create a variable called "bike_info" that uses string interpolation to make a string that details information about the bike

            class Bike
                attr_accessor :model, :wheels, :current_speed
                def initialize(model, wheels = 2, current_speed = 0)
                    @model: model
                    @wheels: wheels
                    @current_speed: current_speed
                end

                def bike_info
                    "The #{model} has #{wheels} wheels and is going #{current_speed} mph."
                end
                
            end



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

    #Pseudocode:
            # Define "pedal_faster" method
            # pedal_faster takes in "amount" as the argument. This method increases the current speed by taking the amount value and adding it to the current speed instance variable
            # Define "brake" method with the argument of "amount." This method reduces the current speed and checks to see what the end speed is. If the number is less than zero, sets it to zero because there cannot be a negative speed

            class Bike
                attr_accessor :model, :wheels, :current_speed
              
                def initialize(model, wheels = 2, current_speed = 0)
                  @model = model
                  @wheels = wheels
                  @current_speed = current_speed
                end
              
                def bike_info
                  "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
                end
              
                def pedal_faster(amount)
                  @current_speed += amount
                end
              
                def brake(amount)
                  @current_speed = [@current_speed - amount, 0].max
                end
              end
            