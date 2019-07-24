
numbers = {
'green': [1, 6, 7, 8, 15, 16, 34],
'peach': [3, 11, 19, 37, 55, 87],
'dark-pink': [4, 12, 20, 38, 56, 88],
'teal': [21, 22, 23,24, 25,26, 27 ,28, 29,30, 39,40,41,42,43,44,45,46,47,48],
'light-pink':   [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71],
'light-purple': [89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],
'brown-green-grey': [5,14,32,33,51,52,84],
'blue': [12,31,49,50,81,82,83],
'yellow': [9,17,35,53,85],
'light-green': [2,10,18,36,54,86],
'white': [113,114,115,116,117,118]
}

hex = {
'green': 'ACFF4E',
'peach': 'FFC490',
'dark-pink': 'E48FFF',
'teal': '95F3E3',
'light-pink': 'EAAFCD',
'light-purple': 'C7B7F6',
'brown-green-grey': 'BEC987',
'blue': '8DCBFC',
'yellow': 'EEFF00',
'light-green': 'D4F8AE',
'white': 'E5EBEB'

}




for key, value in numbers.items():
    print('/*'+key+'*/')
    color = hex.get(key)
    for ids in value:
        print(',#' + "id" + str(ids), end=" ")
    print( '{ \n' + 'background-color: #'  + color + ' \n }\n')