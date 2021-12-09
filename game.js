function play () {
    var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
    "Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
    "CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue",
    "Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
    "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen",
    "DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen",
    "DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
    "DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
    "FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold",
    "GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink",
    "IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush",
    "LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
    "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
    "LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray",
    "LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen",
    "Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
    "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
    "MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose",
    "Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange",
    "OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise",
    "PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum",
    "PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue",
    "SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna",
    "Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
    "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat",
    "White","WhiteSmoke","Yellow","YellowGreen"]
    var corRandom = []
    var corSorted = null
    var user = null
    var lives = 3
    

    for (i = 0; i < 10 ; i++) {
        corRandom.push(colors[Math.floor(Math.random() * colors.length) +1].toLowerCase())
        corRandom.sort()
        corSorted = corRandom[Math.floor((Math.random() * corRandom.length) + 1)]
    }

    do{
        user = prompt(`Escolha uma cor!:\n\n${corRandom.toString()}\n\n\nVidas Restantes: ${lives}`).toLowerCase()

         if (user != corSorted) { 
            verify(corSorted, user, lives)
            alert('Incorreto!')
            lives--
    }
        
        else if (user == corSorted){
            document.body.style.backgroundColor = user
            alert('Você acertou!')
            lives = 0
        }
  
         
       
}while (lives != 0);

    function verify() { 
        
        if (user == ""){
            alert('Digite uma cor!')
       
}

        }
}
    
