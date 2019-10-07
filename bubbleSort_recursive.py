def bubble_sort(arr):

    for i in range(0, len(arr)):
        if (i <= len(arr) - 2):
            print(arr[i], arr[i+1])
            if (arr[i] > arr[i+1]):
                temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp
    if (sorted(arr) == arr):
        return arr
    else:
        return bubble_sort(arr)


print(bubble_sort([1, 5, 8, 4, 2, 9, 6, 0, 3, 7]))