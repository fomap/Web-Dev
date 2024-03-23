n = int(input())
i = 1
while i ** 2 <= n:
    print(i ** 2)
    i += 1


n = int(input())
i = 2
while n % i != 0:
    i += 1
print(i)

n = int(input())
m = 1
while m < n:
    print(m, end=' ')
    m = m * 2

N = int(input())
print("YES" if (N & (N - 1)) == 0 else "NO")

n = int(input())
sum = 1
k = 0
while n > sum:
    sum *= 2
    k += 1
print(k)