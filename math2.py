numbers = [1,2,3,4,5]

def value_of_list_x_3 (Lis):
    new_list = []
    for value in Lis:
        new_list.append(value * 3)
    return new_list

result = value_of_list_x_3(numbers)

'''
f = range(0, 10)
for i1 in reversed(f):
    for i2 in reversed(f):
        for i3 in reversed(f):
            for i4 in reversed(f):
                for i5 in reversed(f):
                    for i6 in reversed(f):
                        sum = i1 + i2 + i3 + i4 + i5 + i6
                        if sum == 20:
                            print(i1, i2, i3, i4, i5, i6)
'''

h = range(0, 10)
for i1 in reversed(h):
    for i2 in reversed(h):
        for i3 in reversed(h):
            for i4 in reversed(h):
                sum = i1 + i2 + i3 + i4
                if sum == 2 and i1 == i4:
                    print(i1, i2, i3, i4)