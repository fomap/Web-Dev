def make_bricks(small, big, goal):
    max_big_bricks = goal // 5
    if big >= max_big_bricks:
        remaining_goal = goal - (max_big_bricks * 5)
        return small >= remaining_goal
    else:
        remaining_goal = goal - (big * 5)
        return small >= remaining_goal
    
def lone_sum(a, b, c):
    if a == b == c:
        return 0
    elif a == b:
        return c
    elif a == c:
        return b
    elif b == c:
        return a
    else:
        return a + b + c

def lucky_sum(a, b, c):
    if a == 13:
        return 0
    elif b == 13:
        return a
    elif c == 13:
        return a + b
    else:
        return a + b + c
    
def fix_teen(n):
    if 13 <= n <= 19 and n not in [15, 16]:
        return 0
    return n

def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)


def round_sum(a, b, c):
    def round10(num):
        return (num + 5) // 10 * 10
    return round10(a) + round10(b) + round10(c)  

def close_far(a, b, c):
   
    if abs(b - a) <= 1 and abs(c - a) >= 2 and abs(c - b) >= 2:
        return True
    
    elif abs(c - a) <= 1 and abs(b - a) >= 2 and abs(b - c) >= 2:
        return True
    else:
        return False

def make_chocolate(small, big, goal):
    max_big_bars = goal // 5

    if big >= max_big_bars:
        remaining_goal = goal - (max_big_bars * 5)
    else:
        remaining_goal = goal - (big * 5)

    if small >= remaining_goal:
        return remaining_goal
    else:
        return -1