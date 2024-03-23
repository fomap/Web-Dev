
a = int(input())
b = int(input())
c = a * a + b * b
result = c ** 0.5
print(result)


uno = int(input(""))
print("The next number for the number {} is {}.".format(uno, uno + 1))
print("The previous number for the number {} is {}.".format(uno, uno - 1))

studets = int(input(""))
apples = int(input(""))
res = int(apples / studets)
print(res)

studets = int(input(""))
apples = int(input(""))
res = apples % studets
print(res)

v = int(input(""))
t = int(input(""))
s = (v * t) % 109
print((s + 109)%109)