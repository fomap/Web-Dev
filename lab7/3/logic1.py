def cigar_party(cigars, is_weekend):
    if is_weekend:
        return cigars >= 40
    else:
        return 40 <= cigars <= 60
    
def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0  
    elif you >= 8 or date >= 8:
        return 2 
    else:
        return 1  

def squirrel_play(temp, is_summer):
    if is_summer:
        return 60 <= temp<= 100
    else:
        return 60 <= temp <= 90


def caught_speeding(speed, is_birthday):
    if is_birthday:
        speed -= 5

    if speed <= 60:
        return 0  
    elif 61 <= speed <= 80:
        return 1  
    else:
        return 2  
    
def sorta_sum(a, b):
    result = a + b
    if 10 <= result <= 19:
        return 20
    else:
        return result
    

def love6(a, b):
    return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

def in1to10(n, outside_mode):
    if outside_mode:
        return n <= 1 or n >= 10
    else:
        return 1 <= n <= 10
    
def near_ten(num):
    return num % 10 in [8, 9, 0, 1, 2]
