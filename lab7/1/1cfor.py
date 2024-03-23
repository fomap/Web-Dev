a =  int(input())
b =  int(input())


for i in range(a, b+1):
    if i % 2 == 0:
        print(i)


a =  int(input())
b =  int(input())
c = int(input())
d = int(input())

for i in range(a, b+1):
    if i % d == c:
        print(i) 


a =  int(input())
b =  int(input())
for i in range(a, b+1):
    square_root = int(i ** 0.5)
    if square_root * square_root == i:
        print(i)


a =  input()
b =  input()
cnt = 0
for char in a:
    if char == b:
        cnt += 1

print(cnt)


a =  input()
sum = 0
for char in a:
    num = int(char)
    sum += num

print(sum)

a =  input()
str = a[::-1]

def deleteLeadingZeros(inputString):
   for k in range(len(inputString)):
      if inputString[k] != '0':
         outputString= inputString[k::]
         return outputString
      
print(deleteLeadingZeros(str))


n = int(input())
i = 1
while i <= n:
    i = i + 1
    if n % i == 0:
        print(i)
        break


n = int(input())
for i in range (1, n+1):
    if n % i == 0:
        print(i)


n = int(input())
cnt = 0
for i in range (1, n+1):
    if n % i == 0:
        cnt += 1

print(cnt)


sum = 0
for i in range(100):
    sum += int(input())
print(sum)


n = int(input())
sum = 0
for i in range(n):
    sum += int(input())
print(sum)


n = input()
number = int(n, 2)
print(number)


n = int(input())
zero = 0
for i in range(n):
    number =  int(input())
    if number == 0:
        zero += 1
print(zero)
