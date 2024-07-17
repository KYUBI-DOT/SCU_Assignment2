#Siraj Mani Sharma
# 24554905

# Print a welcome message
print("Welcome to the Simple Grade Calculator")

# Ask the user to enter your score he/she has achieved in the examination
score = input("Please enter your score: ")

# Convert the input into a float so that we can calculate that are not integers as well
score = float(score)

# Determine the grade using if, elif, amd else statements
if score >= 85:
    grade = "High Distinction"

elif score >= 75:
    grade = "Distinction"

elif score >= 65:
    grade = "Credit"

elif score >= 50:
    grade = "Pass"

else:
    grade = "Fail"    

#Print the grade
print("Your grade is:", grade)           
