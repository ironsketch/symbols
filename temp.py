rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R']

colors = [
        ["blue", "pink", "grey", "white", "purple", "green", "red", "orange", "yellow", "pink", "grey", "yellow", "white", "green", "purple", "blue", "red", "orange"],
        ["pink", "green", "yellow", "orange", "red", "grey", "blue", "purple", "white", "green", "yellow", "white", "orange", "grey", "red", "pink", "blue", "purple"], 
        ["green", "grey", "white", "purple", "blue", "yellow", "pink", "red", "orange", "blue", "green", "grey", "yellow", "pink", "orange", "red", "purple", "white"], 
        ["white", "orange", "red", "pink", "grey", "purple", "yellow", "green", "blue", "purple", "blue", "pink", "green", "red", "yellow", "orange", "white", "grey"], 
        ["yellow", "white", "purple", "blue", "green", "orange", "grey", "pink", "red", "orange", "red", "blue", "pink", "purple", "grey", "white", "yellow", "green"], 
        ["purple", "red", "pink", "grey", "white", "blue", "orange", "yellow", "green", "white", "purple", "red", "blue", "orange", "green", "yellow", "grey", "pink"], 
        ["red", "blue", "green", "yellow", "orange", "pink", "purple", "white", "grey", "red", "pink", "green", "grey", "blue", "white", "purple", "orange", "yellow"], 
        ["orange", "purple", "blue", "green", "yellow", "red", "white", "grey", "pink", "yellow", "orange", "purple", "red", "white", "pink", "grey", "green", "blue"], 
        ["grey", "yellow", "orange", "red", "pink", "white", "green", "blue", "purple", "grey", "white", "orange", "purple", "yellow", "blue", "green", "pink", "red"], 
        ["green", "purple", "yellow", "pink", "grey", "orange", "white", "red", "blue", "white", "blue", "red", "pink", "purple", "grey", "orange", "yellow", "green"], 
        ["grey", "red", "white", "green", "yellow", "purple", "orange", "blue", "pink", "purple", "green", "pink", "grey", "blue", "white", "red", "orange", "yellow"], 
        ["white", "pink", "purple", "yellow", "orange", "blue", "red", "green", "grey", "red", "grey", "green", "yellow", "pink", "orange", "blue", "purple", "white"], 
        ["red", "yellow", "pink", "purple", "blue", "grey", "green", "white", "orange", "grey", "purple", "orange", "red", "white", "pink", "yellow", "green", "blue"], 
        ["purple", "grey", "blue", "orange", "red", "green", "pink", "yellow", "white", "orange", "pink", "blue", "green", "red", "yellow", "purple", "white", "grey"], 
        ["yellow", "blue", "orange", "grey", "white", "red", "purple", "pink", "green", "yellow", "red", "purple", "blue", "orange", "green", "white", "grey", "pink"], 
        ["orange", "green", "red", "white", "purple", "pink", "blue", "grey", "yellow", "blue", "yellow", "grey", "white", "green", "purple", "pink", "red", "orange"], 
        ["blue", "white", "green", "red", "pink", "yellow", "grey", "orange", "purple", "pink", "white", "yellow", "orange", "grey", "red", "green", "blue", "purple"], 
        ["pink", "orange", "grey", "blue", "green", "white", "yellow", "purple", "red", "green", "orange", "white", "purple", "yellow", "blue", "grey", "pink", "red"] 
    ]
shapes = [
        ["bolt", "cog", "heart", "eye", "star", "circle", "moon", "sun", "triangle", "moon", "cog", "circle", "heart", "bolt", "eye", "star", "sun", "triangle"], 
        ["circle", "heart", "eye", "star", "bolt", "triangle", "cog", "moon", "sun", "cog", "heart", "triangle", "eye", "circle", "star", "bolt", "moon", "sun"], 
        ["triangle", "eye", "star", "bolt", "circle", "sun", "heart", "cog", "moon", "sun", "moon", "bolt", "cog", "star", "heart", "eye", "triangle", "circle"], 
        ["cog", "circle", "triangle", "sun", "moon", "heart", "bolt", "star", "eye", "circle", "triangle", "eye", "sun", "heart", "moon", "cog", "bolt", "star"], 
        ["moon", "bolt", "circle", "triangle", "sun", "cog", "star", "eye", "heart", "bolt", "circle", "heart", "triangle", "cog", "sun", "moon", "star", "eye"], 
        ["eye", "sun", "moon", "cog", "heart", "star", "triangle", "circle", "bolt", "star", "bolt", "cog", "circle", "moon", "triangle", "sun", "eye", "heart"], 
        ["star", "moon", "cog", "heart", "eye", "bolt", "sun", "triangle", "circle", "triangle", "sun", "star", "moon", "eye", "cog", "heart", "circle", "bolt"], 
        ["heart", "triangle", "sun", "moon", "cog", "eye", "circle", "bolt", "star", "eye", "star", "moon", "bolt", "sun", "circle", "triangle", "heart", "cog"], 
        ["sun", "star", "bolt", "circle", "triangle", "moon", "eye", "heart", "cog", "heart", "eye", "sun", "star", "triangle", "bolt", "circle", "cog", "moon"], 
        ["eye", "cog", "star", "triangle", "sun", "bolt", "moon", "circle", "heart", "sun", "cog", "bolt", "circle", "moon", "triangle", "star", "eye", "heart"], 
        ["star", "heart", "bolt", "sun", "moon", "circle", "cog", "triangle", "eye", "cog", "eye", "triangle", "sun", "heart", "moon", "circle", "bolt", "star"], 
        ["circle", "star", "triangle", "cog", "heart", "sun", "eye", "moon", "bolt", "heart", "star", "sun", "moon", "eye", "cog", "triangle", "circle", "bolt"], 
        ["moon", "triangle", "cog", "star", "bolt", "heart", "circle", "eye", "sun", "circle", "sun", "eye", "star", "triangle", "bolt", "heart", "cog", "moon"], 
        ["sun", "circle", "moon", "eye", "star", "cog", "bolt", "heart", "triangle", "moon", "heart", "circle", "triangle", "cog", "sun", "bolt", "star", "eye"], 
        ["bolt", "eye", "circle", "moon", "cog", "triangle", "heart", "sun", "star", "triangle", "moon", "star", "bolt", "sun", "circle", "eye", "heart", "cog"], 
        ["triangle", "bolt", "sun", "heart", "eye", "moon", "star", "cog", "circle", "eye", "bolt", "moon", "cog", "star", "heart", "sun", "triangle", "circle"], 
        ["cog", "sun", "heart", "bolt", "circle", "eye", "triangle", "star", "moon", "star", "circle", "cog", "heart", "bolt", "eye", "moon", "sun", "triangle"], 
        ["heart", "moon", "eye", "circle", "triangle", "star", "sun", "bolt", "cog", "bolt", "triangle", "heart", "eye", "circle", "star", "cog", "moon", "sun"]  
    ]

f = open("inserts.txt", "w")
i = 0
for shape in shapes:
    j = 0
    for s in shape:
        col = j
        row = i
        color = colors[i][j]
        insert = "INSERT INTO cards (`row`, col, color, shape)\n VALUES ('{}', {}, '{}', '{}');\n".format(rows[row], col, color, s)
        f.write(insert)
        j += 1
    i += 1

f.close()
