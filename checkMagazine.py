# def checkMagazineFirstPass(magazine, note):
#     for mag in range(0, len(magazine)):
#         if magazine[mag] in note:
#             note.remove(magazine[mag])
#     if len(note) > 0:
#         print("No")
#         return "No"
#     print("Yes")
#     return "YEs"


# checkMagazineFirstPass(['give', 'me', 'one', 'grand', 'today', 'night'], [
#                        'give', 'one', 'grand', 'today'])

# checkMagazineFirstPass(['two', 'times', 'three', 'is', 'not', 'four'], [
#                        'two', 'times', 'two', 'is', 'four'])


def checkMagazine(magazine, note):
    magazineCount = {}
    noteCount = {}

    for mag in magazine:
        if mag in magazineCount:
            magazineCount[mag] += 1
        else:
            magazineCount[mag] = 1

    for noteItem in note:
        if noteItem in noteCount:
            noteCount[noteItem] += 1
        else:
            noteCount[noteItem] = 1

    if note

    # for mag in range(0, len(magazine)):
    #     dictn.insert(magazine[mag], mag)

    # dictn.insert('give', 0)


# checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], [
#     'give', 'one', 'grand', 'today'])
checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], [
    'two', 'times', 'two', 'is', 'four'])

# For each of the items, loop through magazine
# add items to the Hashtables
