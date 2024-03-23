print("Hello, World!")

n = int(input())
if n % 2 != 0:
    print("Weird")
elif (n % 2 == 0) and (n >= 2 and n <= 5):
    print("Not Weird")
elif (n % 2 == 0) and (n >= 6 and n <= 20):
    print("Weird")
elif n % 2 == 0 and n > 20:
    print("Not Weird")


a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

a = int(input())
b = int(input())
print(int(a/b))
print(a/b)

a = int(input())
for i in range(a):
    print(i * i)

def is_leap(year):
    if (year % 400 == 0) and (year % 100 == 0):
        return True
    elif (year % 4 ==0) and (year % 100 != 0):
        return True
    else:
        return False

year = int(input())
print(is_leap(year))


n = int(input())
for i in range(1, n+1):
    print(i, end="")


a = input()
b = input()
def print_full_name(a, b):
    print("Hello " + a + " " + b + "! You just delved into python.")
print_full_name(a, b)

def count_substring(string, sub_string):
    return string.find(sub_string)

str = input()
substr= input()

print(count_substring(str, substr))