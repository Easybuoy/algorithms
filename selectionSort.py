def selection_sort(arr):
    # loop through n-1 elements
    for i in range(0, len(arr) - 1):
        cur_index = i
        smallest_index = cur_index
        for j in range(cur_index, len(arr)):
            if (arr[j] < arr[smallest_index]):
                smallest_index = j
              
        temp = arr[cur_index]
        arr[cur_index] = arr[smallest_index]
        arr[smallest_index] = temp


    return arr