def quick_sort(arr: list) -> list:
    if len(arr) < 2:
        return arr
    else:
        pivo = arr[0]
        menores = [i for i in arr[1:] if i <= pivo]
        maiores = [i for i in arr[1:] if i > pivo]

    return quick_sort(menores) + [pivo] + quick_sort(maiores)


print(quick_sort([3, 5, 1, 2, 4]))
