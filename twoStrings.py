def twoStrings(s1, s2):
    isMatch = 'NO'
    if(not s1 and not s2):
        return isMatch

    string1 = list(s1)
    string2 = list(s2)
    for elem in range(len(string1)):
        for elem2 in range(len(string2)):
            if (string1[elem] == string2[elem2]):
                isMatch = 'YES'

    return isMatch


# print(twoStrings('hello', 'world'))
print(twoStrings('hi', 'world'))