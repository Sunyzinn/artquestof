var gameState = "menu"

var aTenta 

var monaLisa

var noiteEstrelada

var interiorJogo

var vv

function preload() {

    noiteestrelada = loadImage ( "NE.png" )

    monalisa = loadImage ( "ML.png" )

    atenta = loadImage ( "AT.png" )

    fundo = loadImage ( "IDCL.png" )

    fonte = loadFont ( 'PixelifySans-Bold.ttf' )

    vvpng = loadImage ( "vv.png" )

}


function setup() {

    createCanvas ( windowWidth, windowHeight )

}

function draw() {
  
    background ( "gray" )

    drawSprites()

    if ( gameState === "menu" ) {
    
        menu()

    }

    else if ( gameState === "faseNE" ) {

        NEfase ()

    }

    else if ( gameState === "faseML" ) {

        MLfase ()

    }

    else if ( gameState === "faseAT" ) {

        ATfase ()

    }


}

function windowResized() {

    resizeCanvas ( windowWidth, windowHeight )

}

function menu() {

    textAlign (CENTER) 

    fill ("white") 

    textFont (fonte)

    textSize (150)

    text ("• Arte Quest •", width/2, height/7 )
   
    interiorJogo = createSprite ( width/2, height/2 )

    interiorJogo.addImage ( fundo )

    interiorJogo.scale = 1

    noiteEstrelada = createSprite ( width/5, height/2 ) 

    noiteEstrelada.addImage ( noiteestrelada )

    noiteEstrelada.scale = 0.68 //escala

    monaLisa = createSprite ( width/2, height/2 )

    monaLisa.addImage ( monalisa )

    monaLisa.scale = 0.2 //escala

    aTenta = createSprite ( width/1.25, height/2.01 )

    aTenta.addImage ( atenta )

    aTenta.scale = 0.4 //escala

}

function mouseClicked () {

    if (gameState === "menu" ) {

        if ( noiteEstrelada.overlapPoint ( mouseX, mouseY ) ) {

            gameState = "faseNE"

        }

        else if ( monaLisa.overlapPoint ( mouseX, mouseY ) ) {

            gameState = "faseML"

        }

        else if ( aTenta.overlapPoint ( mouseX, mouseY ) ) {

            gameState = "faseAT"

       }

    }

}

function NEfase () {

    //alert ("• PARA VOCÊ JOGAR ESTE JOGO, PRECISO DA SENHA DO SEU BANCO : ) •")

    noiteEstrelada.remove ()
   
    monaLisa.remove ()

    aTenta.remove ()

    vv = createSprite ( width/3.6, height/1.5 )

    vv.addImage ( vvpng )

    if ( keyIsDown ( 65 ) ) {

        vv.position.x -= 5

    }

}

function MLfase () {

    //alert ("• PARA VOCÊ JOGAR ESTE JOGO, PRECISO DO NÚMERO DO SEU CARTÃO : ) •")

    noiteEstrelada.remove ()
   
    monaLisa.remove ()

    aTenta.remove ()

}

function ATfase () {

    //alert ("• PARA VOCÊ JOGAR ESTE JOGO, PRECISO DOS DOCUMENTOS DA SUA CASA : ) •")

    noiteEstrelada.remove ()
   
    monaLisa.remove ()

    aTenta.remove ()

}