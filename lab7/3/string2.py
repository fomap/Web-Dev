def double_char(str):
    result = ''
    for char in str:
        result += char * 2
    return result
  

def count_hi(str):
    count = 0
    for i in range(len(str) - 1):
        if str[i:i + 2] == 'hi':
            count += 1
    return count

def cat_dog(str):
    cat_count = str.count('cat')
    dog_count = str.count('dog')
    return cat_count == dog_count

def count_code(str):
    count = 0
    for i in range(len(str) - 3):
        if str[i:i + 2] == 'co' and str[i + 3] == 'e':
            count += 1
    return count
  
def end_other(a, b):
    a_lower = a.lower()
    b_lower = b.lower()
    return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)

def xyz_there(str):
    for i in range(len(str) - 2):
        if str[i:i+3] == "xyz" and (i == 0 or str[i-1] != "."):
            return True
    return False