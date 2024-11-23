var gameState = "menu";


var cen1


var aTenta, monaLisa, noiteEstrelada, interiorJogo, vv, dvpng, sdpng;


var xao;


var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10


var s


var atf


var mlf


var nef




function preload() {
    noiteestrelada = loadImage("NE.png");
    monalisa = loadImage("ML.png");
    atenta = loadImage("AT.png");
    fundo = loadImage("IDCL.png");
    fonte = loadFont('PixelifySans-Bold.ttf');
    vvpng = loadAnimation ("vv1.png", "vv2.png", "vv3.png");
    cen1 = loadImage ("cenárioof1.png");
    mlF = loadImage ("mlf.png")
    atF = loadImage ("atf.png")
    neF = loadImage ("nef.png")
    dvpng = loadAnimation ("dv1.png", "dv2.png", "dv3.png");
    cen2 = loadImage ("cenárioof2.png")
    cen3 = loadImage ("cenárioof3.png")
    sdpng = loadAnimation ("sd1.png", "sd2.png", "sd3.png");
    vvvpng = loadAnimation ("vvv.png");
 
}


function setup() {
    createCanvas(windowWidth, windowHeight);


    s = new Group ()


    // Criar os sprites apenas uma vez


    mlf= createSprite ( width *3.2 , height /2 + 50 );
    mlf.addImage (mlF);
    mlf.scale = 0.4;
    mlf.visible = false


    atf = createSprite ( width *3.2 , height /2 + 50 );
    atf.addImage (atF);
    atf.scale = 0.7;
    atf.visible = false


    interiorJogo = createSprite(width / 2, height / 2);
    interiorJogo.addImage(fundo);
    interiorJogo.scale = 1;


    noiteEstrelada = createSprite(width / 5, height / 2);
    noiteEstrelada.addImage(noiteestrelada);
    noiteEstrelada.scale = 0.68;


    monaLisa = createSprite(width / 2, height / 2);
    monaLisa.addImage(monalisa);
    monaLisa.scale = 0.2;


    aTenta = createSprite(width / 1.25, height / 2.01);
    aTenta.addImage(atenta);
    aTenta.scale = 0.4;


    nef = createSprite ( width *3.2 , height /2 );
    nef.addImage (neF);
    nef.scale = 0.4;
    nef.visible = false


    vv = createSprite ( width / 3.6, height / 1.4 );
    vv.addAnimation ( "vva", vvpng);
    vv.addAnimation ( "dva", dvpng );
    vv.addAnimation ( "sda", sdpng );
    vv.addAnimation ("av",vvvpng);
 


    vv.scale = 1.5
    vv.visible = false;


    xao = createSprite ( 0, height/1.25, width *9999, 5 );
    xao.visible = false;


    vv.setCollider ( 'rectangle', -30,0,56,110 )
    vv.debug = false


    p1 = createSprite ( width / 1.8, height / 1.5, 600, 20 )
    p1.visible = false


    p2 = createSprite ( width* 1, height / 1.9, 600, 20 )
    p2.visible = false


    p3 = createSprite ( width* 1.4, height / 2.5, 600, 20 )
    p3.visible = false


    p4 = createSprite ( width * 1.7, height / 1.7, 600, 20 )
    p4.visible = false


    p5 = createSprite ( width * 2, height / 1.5, 600, 20 )
    p5.visible = false


    p6 = createSprite ( width * 2.4, height / 1.7, 600, 20 )
    p6.visible = false


    s.add ( p1 )
   
    s.add ( p2 )
   
    s.add ( p3 )
   
    s.add ( p4 )
   
    s.add ( p5 )
   
    s.add ( p6 )


    //vv.debug = true


}


function draw() {
    background("gray");
    drawSprites();




    if (gameState === "menu") {
        menu();
    } else if (gameState === "faseNE") {
        NEfase();
    } else if (gameState === "faseML") {
        MLfase();
    } else if (gameState === "faseAT") {
        ATfase();
    }


}




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}




function menu() {
    textAlign(CENTER);
    fill("white");
    textFont(fonte);
    textSize(150);
    text("• Arte Quest •", width / 2, height / 7);




    // Mostrar os sprites do menu
    interiorJogo.visible = true;
    noiteEstrelada.visible = true;
    monaLisa.visible = true;
    aTenta.visible = true;
}




function mouseClicked() {
    if (gameState === "menu") {
        if (noiteEstrelada.overlapPoint(mouseX, mouseY)) {
            gameState = "faseNE";
            esconderMenu();
        } else if (monaLisa.overlapPoint(mouseX, mouseY)) {
            gameState = "faseML";
            esconderMenu();
        } else if (aTenta.overlapPoint(mouseX, mouseY)) {
            gameState = "faseAT";
            esconderMenu();
        }
    }
}




function esconderMenu() {
    // Esconder os sprites do menu ao entrar em uma fase
    noiteEstrelada.visible = false;
    monaLisa.visible = false;
    aTenta.visible = false;
}




function NEfase() {
    //alert ("• PARA VOCÊ JOGAR ESTE JOGO, PRECISO DO NÚMERO DO SEU CARTÃO : ) •")


    xao.visible = false


    interiorJogo.addImage (cen1)
    interiorJogo.scale = 1
    vv.visible = true; // Mostrar o sprite vv
    vv.changeAnimation ("av")




    if (keyIsDown(65)) {
        vv.velocityX = -10;


    vv.changeAnimation ("vva")


    } else if (keyIsDown(68)) {
        vv.velocityX = 10;


    vv.changeAnimation ("vva")


    }
   
    else {
        vv.velocityX = 0;  
    }
     
    //console.log (vv.y)
    vv.velocityY += 0.7;




    if (keyIsDown(32) && (vv.collide(xao)|| vv.collide(s))) {
        vv.velocityY = -14; // Define a força do pulo
    }
   
    if(vv.isTouching(s)){
        s.setVelocityYEach(0)
        vv.collide(s)
    }
   
    camera.position.x = vv.position.x


    vv.collide (xao)


    p1.visible = true


    p2.visible = true
   
    p3.visible = true


    p4.visible = true


    p5.visible = true


    p6.visible = true


    nef.visible = true


    textAlign(CENTER);
    fill("white");
    textFont(fonte);
    textSize(15);
    text("A Noite Estrelada é uma das obras mais famosas do pintor holandês Vincent van Gogh,\n criada em 1889 enquanto ele estava em um hospital psiquiátrico em Saint-Rémy-de-Provence, na França.\n A pintura retrata uma paisagem noturna, com um céu repleto de estrelas brilhantes e um redemoinho de cores vibrantes.\n Van Gogh utilizou pinceladas expressivas e intensas, uma técnica característica de seu estilo pós-impressionista, para transmitir emoção e movimento.\n O contraste entre o céu turbulento e a calma do vilarejo reflete a luta interna do artista.\n A obra explora temas como solidão, angústia e a beleza da natureza.\n A Noite Estrelada é um exemplo do talento de Van Gogh em capturar a essência emocional do mundo ao seu redor.\n A pintura continua a inspirar gerações de artistas e admiradores, sendo uma das mais reconhecidas da história da arte.", width *3.2 , height /6
)


    if (vv.isTouching (nef)) {


        vv.velocityX = 0


    }


}




function MLfase() {
    //alert ("• PARA VOCÊ JOGAR ESTE JOGO, PRECISO DO NÚMERO DO SEU CARTÃO : ) •")


    xao.visible = false


    interiorJogo.addImage (cen2)
    interiorJogo.scale = 1
    vv.changeAnimation ("dva")
    vv.visible = true; // Mostrar o sprite vv
    xao.y = height/1.1;


    if (keyIsDown(65)) {
        vv.velocityX = -10;


    } else if (keyIsDown(68)) {
        vv.velocityX = 10;


    } else {
        vv.velocityX = 0;  
    }
     
    //console.log (vv.y)
    vv.velocityY += 0.7;




    if (keyIsDown(32) && (vv.collide(xao)|| vv.collide(s))) {
        vv.velocityY = -14; // Define a força do pulo
    }
   
    if(vv.isTouching(s)){
        s.setVelocityYEach(0)
        vv.collide(s)
    }
   
    camera.position.x = vv.position.x


    vv.collide (xao)


    p1.visible = true


    p2.visible = true
   
    p3.visible = true


    p4.visible = true


    p5.visible = true


    p6.visible = true


    nef.visible = false
    mlf.visible = true


    textAlign(CENTER);
    fill("white");
    textFont(fonte);
    textSize(15);
    text("A Mona Lisa é uma das pinturas mais famosas do artista renascentista Leonardo da Vinci,\n criada entre 1503 e 1506, embora tenha continuado a ser trabalhada por ele até cerca de 1517.\n A obra retrata uma mulher com um sorriso enigmático, cuja identidade permanece um mistério até hoje.\n Da Vinci usou a técnica do sfumato, criando transições suaves entre as cores e sombras, o que dá um efeito de profundidade realista.\n A composição e a postura da figura refletem a perfeição da anatomia humana, um dos interesses de Da Vinci.\n A pintura é famosa também pela sua aura de mistério, que envolve tanto o sorriso quanto o fundo paisagístico.\n A Mona Lisa está atualmente no Museu do Louvre, em Paris, e é um ícone cultural global.\n A obra é um exemplo notável da maestria técnica e da busca pelo realismo na Renascença.",
    width *3.2 , height /6
    )
    if (vv.isTouching (nef)) {


        vv.velocityX = 0


    }


}




function ATfase() {
    //alert ("• PARA VOCÊ JOGAR ESTE JOGO, PRECISO DOS DOCUMENTOS DA SUA CASA : ) •")


    xao.visible = false


    interiorJogo.addImage (cen3)
    interiorJogo.scale = 1
    vv.changeAnimation ("sda")
    vv.visible = true; // Mostrar o sprite vv
    xao.y = height/1.1;


    if (keyIsDown(65)) {
        vv.velocityX = -10;


    } else if (keyIsDown(68)) {
        vv.velocityX = 10;


    } else {
        vv.velocityX = 0;  
    }
     
    //console.log (vv.y)
    vv.velocityY += 0.7;




    if (keyIsDown(32) && (vv.collide(xao)|| vv.collide(s))) {
        vv.velocityY = -14; // Define a força do pulo
    }
   
    if(vv.isTouching(s)){
        s.setVelocityYEach(0)
        vv.collide(s)
    }
   
    camera.position.x = vv.position.x


    vv.collide (xao)


    p1.visible = true


    p2.visible = true
   
    p3.visible = true


    p4.visible = true


    p5.visible = true


    p6.visible = true


    nef.visible = false
    mlf.visible = false
    atf.visible = true


    textAlign(CENTER);
    fill("white");
    textFont(fonte);
    textSize(15);
    text("O quadro São João da Cruz, pintado por Salvador Dalí em 1951, é uma obra surrealista que reflete a busca espiritual e o sofrimento humano.\n A pintura retrata São João da Cruz, um místico espanhol, em uma posição contemplativa, suspenso no espaço, como se estivesse em um transe espiritual.\n Dalí utiliza uma técnica detalhista para criar um contraste entre o misticismo e a realidade, um tema comum em sua obra.\n O fundo de paisagem desértica e as figuras alongadas são elementos típicos do estilo surrealista, que busca representar o subconsciente e a imaginação.\n A obra é também uma reflexão sobre a solidão e a meditação espiritual, mostrando a conexão entre a religião e a arte.\n Dalí, conhecido por suas imagens oníricas e distorcidas, aborda temas profundos de forma única, unindo o divino ao terreno.\n São João da Cruz é um exemplo de como o surrealismo pode explorar conceitos filosóficos e religiosos com uma linguagem visual inovadora.",
    width *3.2 , height /6
    )
    if (vv.isTouching (atf)) {


        vv.velocityX = 0


    }


}


