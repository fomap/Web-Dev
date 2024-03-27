def count_evens(nums):
    count = 0
    for num in nums:
        if num % 2 == 0:
            count += 1
    return count

def big_diff(nums):
    min_val = min(nums)
    max_val = max(nums)
    return max_val - min_val

def centered_average(nums):
    nums.sort()
    return sum(nums[1:-1]) // (len(nums) - 2)

def sum13(nums):
    total = 0
    skip_next = False
    for num in nums:
        if num == 13:
            skip_next = True
            continue
        if skip_next:
            skip_next = False
            continue
        total += num
    return total

def sum67(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 6:
            skip = True
            continue
        if skip and num == 7:
            skip = False
            continue
        if not skip:
            total += num
    return total

def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False