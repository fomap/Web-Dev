n = int(input())
a = input().split()
for i in range(0, n):
    if i % 2 == 0:
        print(a[i], end=' ')
        

n = int(input())
a = input().split()
for i in range(0, n):
    if int(a[i]) % 2 == 0:
        print(a[i], end=' ')


n = int(input())
a = input().split()
cnt = 0
for i in range(0, n):
    if int(a[i]) > 0:
        cnt += 1
print(cnt)

n = int(input())
a = input().split()
cnt = 0
for i in range(1, n):
    if int(a[i]) > int(a[i-1]):
        cnt += 1
print(cnt)

n = int(input())
a = input().split()
cnt = 0
for i in range(1, n):
    if int(a[i]) > 0:
        if int(a[i-1]) > 0 and int(a[i-1]) > 0:
            cnt += 1 
    elif int(a[i]) < 0:
        if int(a[i-1]) < 0 and int(a[i-1]) < 0:
            cnt += 1 

if cnt > 0:
    print("YES")
else:
    print("NO")

n = int(input())
a = input().split()
cnt = 0
for i in range(1, len(a)-1):
    if (a[i] > a[i-1]) and (a[i] > a[i+1]):
        cnt += 1

print(cnt) 

n = int(input())
a = input().split()
new = a[::-1]

for i in new:
    print(i, end=" ")
