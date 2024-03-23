def min_four(a, b, c, d):
    return min(a, b, c, d)

a, b, c, d = map(int, input().split())
print(min_four(a, b, c, d))


def power(a, n):
    return a ** n

a, n = map(float, input().split())
result = power(a, int(n))
print(result)



def xor(x, y):
    return int((x or y) and not (x and y))

x, y = map(bool, map(int, input().split()))
print(xor(x, y))
