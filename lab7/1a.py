
# a = int(input("enter side 1: "))
# b = int(input("enter side 2: "))
# c = a * a + b * b
# result = c ** 0.5
# print(result)


# uno = int(input("enter number: "))
# print("The next number for the number {} is {}.".format(uno, uno + 1))
# print("The previous number for the number {} is {}.".format(uno, uno - 1))

# studets = int(input("Enter num of studets: "))
# apples = int(input("Enter num of apples: "))
# res = int(apples / studets)
# print(res)

# studets = int(input("Enter num of studets: "))
# apples = int(input("Enter num of apples: "))
# res = apples % studets
# print(res)

v = int(input("Enter velocity: "))
t = int(input("Enter time: "))
s = v * t
if s > 109:
    print(s - 109)
elif s < 0:
    print(109+s)