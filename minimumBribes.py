# Version 1 -> Incomplete
# def minimumBribes(q):
#     isPossible = 0

#     for i in range(0, len(q)):
#         if (i < len(q) -1):
#             if (q[i] > q[i+ 1]):
#                 temp = q[i]
#                 q[i] = q[i+1]
#                 q[i+1] = temp
#                 isPossible += 1

#     if (sorted(q) != q):
#         print('Too chaotic')
#     else:
#         print(int(isPossible))


# Version 2 => Complete
def minimumBribes(q):
    
    def loop (q, possibility=0):
        isPossible = possibility
        moves = {}
        for i in range(0, len(q)):
            if (i < len(q) -1):
                if (q[i] > q[i+ 1]):
                    if (q[i] in moves):
                        moves[q[i]] += 1
                        if (moves[q[i]] > 2):
                            # return {'ispossible': 'Too chaotic'}
                            return 'Too chaotic'
                    else:
                        moves[q[i]] = 1
                    
                    temp = q[i]
                    q[i] = q[i+1]
                    q[i+1] = temp
                    isPossible += 1
        

        if (sorted(q) == q):
            return isPossible
        else:
            return loop(q, isPossible)

    response = loop(q)
    return response


# print(minimumBribes([2, 1, 5, 3, 4]))
# print(minimumBribes([2, 5, 1, 3, 4]))

# print(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])) 
print(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])) 


