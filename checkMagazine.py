# def checkMagazineFirstPass(magazine, note):
#     for magazineItem in magazine:
#         if magazineItem in note:
#             note.remove(magazineItem)
#     if len(note) > 0:
#         print("No")
#         return
#     print("Yes")
#     return 


# checkMagazineFirstPass(['give', 'me', 'one', 'grand', 'today', 'night'], [
#                        'give', 'one', 'grand', 'today'])

# checkMagazineFirstPass(['two', 'times', 'three', 'is', 'not', 'four'], [
#                        'two', 'times', 'two', 'is', 'four'])


def checkMagazine(magazine, note):
    magazineDict = {}
    noteDict = {}

    for magazineItem in magazine:
        if magazineItem in magazineDict:
            magazineDict[magazineItem] += 1
        else:
            magazineDict[magazineItem] = 1

    for noteItem in note:
        if noteItem in noteDict:
            noteDict[noteItem] += 1
        else:
            noteDict[noteItem] = 1

    for noteItem in noteDict.keys():
        if noteItem in magazine and noteDict[noteItem] <= magazineDict[noteItem]:
            continue
        else:
            print('No')
            return
    print('Yes')
    return



checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], [
    'give', 'one', 'grand', 'today'])
# checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], [
#     'two', 'times', 'two', 'is', 'four'])

# For each of the items, loop through magazine
# add items to the Hashtables
