# Siraj Mani Sharma
# 24554905
# Printing the welcome message
print("Welcome to the currency Calculator")
def currency_converter(amount, exchange_rate):
    return amount * exchange_rate
# Defining amount and exchange rate
def main():
    try:
        amount = float(input("Enter the amount in the currency you have: "))
        exchange_rate = float(input("Enter the exchange rate to the currency you want to convert to: "))
# Generating a command so that user enters the value which is not less than 0
        if amount < 0 or exchange_rate < 0:
            print("Please enter positive values for amount and exchange rate.")
            return
#Conversion process of the currency and print the output
        converted_amount = currency_converter(amount, exchange_rate)
        print(f"The amount in the target currency is: {converted_amount:.2f}")
    except ValueError:
        print("Please enter valid numbers for the amount and exchange rate.")

if __name__ == "__main__":
    main()

    



