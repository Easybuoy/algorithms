def bubble_sort(arr):

    while True:
        for i in range(0, len(arr)):
            if (i <= len(arr) - 2):
                if (arr[i] > arr[i+1]):
                    temp = arr[i+1]
                    arr[i+1] = arr[i]
                    arr[i] = temp

        if (sorted(arr) == arr):
            return arr