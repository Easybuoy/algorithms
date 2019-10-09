def merge(arrA, arrB):
    merged_arr = []

    while len(arrA) and len(arrB) != 0:
        if(arrA[0] <= arrB[0]):
            merged_arr.append(arrA.pop(0))
        else:
            merged_arr.append(arrB.pop(0))

    return [*merged_arr, *arrA, *arrB]


def merge_sort(arr):
    if len(arr) < 2:
        return arr
    midPoint = len(arr) // 2
    arr1 = arr[:midPoint]
    arr2 = arr[midPoint:]

    start = merge_sort(arr1)
    end = merge_sort(arr2)

    return merge(start, end)


print(merge_sort([1, 5, 8, 4, 2, 9, 6, 0, 3, 7]))
