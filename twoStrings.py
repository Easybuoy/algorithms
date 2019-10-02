def twoStrings(s1, s2):
    isMatch = 'NO'
    string1 = list(s1)
    for elem in range(len(string1)):
        print(s2.find(s1[elem]))
        if (s2.find(s1[elem]) != -1):
            isMatch = 'YES'

    return isMatch


# print(twoStrings('hello', 'world'))
print(twoStrings('hi', 'world'))