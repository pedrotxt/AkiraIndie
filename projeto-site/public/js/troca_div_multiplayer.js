  //Ação
  function populares() {
    
    document.getElementById("seila").innerHTML = `
    <div class="selecionado">
            <button class="topjogos button" onclick="populares()">Jogos populares</button>
        </div>

        <div class="n_selecionado">
            <button class="topjogos button" onclick="jogosnovos()">Jogos novos</button>
        </div>

    <a href="https://store.steampowered.com/app/105600/Terraria/" class="link">
    <div class="caixas caixa1">
        <img class="imgs_caixas" src="imgs/terraria.jpg"> <br>
        <img class="classific" src="imgs/livre.png">
        <p class="nome_jogo">Terraria</p>
        <div class="caixa_preço">R$ 9,99</div>
    </div>
    </a>

    <a href="https://store.steampowered.com/app/245170/Skullgirls/" class="link">
    <div class="caixas caixa2">
        <img class="imgs_caixas" src="imgs/skullgirls.jpg"> <br>
        <img class="classific" src="imgs/12anos.png">
        <p class="nome_jogo">Skullgirls</p>
        <div class="caixa_preço">R$ 5,99</div>
    </div>
    </a>
    
    <a href="https://store.steampowered.com/app/233450/Prison_Architect" class="link">
    <div class="caixas caixa3">
        <img class="imgs_caixas" src="imgs/prision.jpg"> <br>
        <img class="classific" src="imgs/16anos.PNG">
        <p class="nome_jogo">Prison Architect</p>
        <div class="caixa_preço">R$ 57,99</div>
    </div>
    </a>

    <a href="https://store.steampowered.com/app/557340/My_Friend_Pedro/" class="link">
    <div class="caixas caixa4">
        <img class="imgs_caixas" src="imgs/pedro.jpg"> <br>
        <img class="classific" src="imgs/14anos.png">
        <p class="nome_jogo">My Friend Pedro</p>
        <div class="caixa_preço">R$ 26,59</div>
    </div>
    </a>

    <a href="https://store.steampowered.com/app/413150/Stardew_Valley/" class="link">
    <div class="caixas caixa5">
        <img class="imgs_caixas" src="imgs/stardew;jpg.png"> <br>
        <img class="classific" src="imgs/livre.png">
        <p class="nome_jogo">Stardew Valley</p>
        <div class="caixa_preço">R$ 22,49</div>
    </div>
    </a>

    <a href="https://store.steampowered.com/app/40800/Super_Meat_Boy/" class="link">
    <div class="caixas caixa6">
        <img class="imgs_caixas" src="imgs/SMB.jpg"> <br>
        <img class="classific" src="imgs/16anos.png">
        <p class="nome_jogo">Super Meat Boy</p>
        <div class="caixa_preço">R$ 24,49</div>
    </div>
    </a>`;
  }

    function jogosnovos() {
    
        document.getElementById("seila").innerHTML = `
        <div class="n_selecionado2">
            <button class="topjogos button" onclick="populares()">Jogos populares</button>
        </div>

        <div class="selecionado2">
            <button class="topjogos button" onclick="jogosnovos()">Jogos novos</button>
        </div>
    
        <a href="https://store.steampowered.com/app/105600/Terraria/" class="link">
        <div class="caixas caixa5">
            <img class="imgs_caixas" src="imgs/terraria.jpg"> <br>
            <img class="classific" src="imgs/livre.png">
            <p class="nome_jogo">Terraria</p>
            <div class="caixa_preço">R$ 9,99</div>
        </div>
        </a>
    
        <a href="https://store.steampowered.com/app/245170/Skullgirls/" class="link">
        <div class="caixas caixa3">
            <img class="imgs_caixas" src="imgs/skullgirls.jpg"> <br>
            <img class="classific" src="imgs/12anos.png">
            <p class="nome_jogo">Skullgirls</p>
            <div class="caixa_preço">R$ 5,99</div>
        </div>
        </a>
        
        <a href="https://store.steampowered.com/app/233450/Prison_Architect" class="link">
        <div class="caixas caixa4">
            <img class="imgs_caixas" src="imgs/prision.jpg"> <br>
            <img class="classific" src="imgs/16anos.PNG">
            <p class="nome_jogo">Prison Architect</p>
            <div class="caixa_preço">R$ 57,99</div>
        </div>
        </a>
    
        <a href="https://store.steampowered.com/app/557340/My_Friend_Pedro/" class="link">
        <div class="caixas caixa1">
            <img class="imgs_caixas" src="imgs/pedro.jpg"> <br>
            <img class="classific" src="imgs/14anos.png">
            <p class="nome_jogo">My Friend Pedro</p>
            <div class="caixa_preço">R$ 26,59</div>
        </div>
        </a>
    
        <a href="https://store.steampowered.com/app/413150/Stardew_Valley/" class="link">
        <div class="caixas caixa2">
            <img class="imgs_caixas" src="imgs/stardew;jpg.png"> <br>
            <img class="classific" src="imgs/livre.png">
            <p class="nome_jogo">Stardew Valley</p>
            <div class="caixa_preço">R$ 22,49</div>
        </div>
        </a>
    
        <a href="https://store.steampowered.com/app/40800/Super_Meat_Boy/" class="link">
        <div class="caixas caixa6">
            <img class="imgs_caixas" src="imgs/SMB.jpg"> <br>
            <img class="classific" src="imgs/16anos.png">
            <p class="nome_jogo">Super Meat Boy</p>
            <div class="caixa_preço">R$ 24,49</div>
        </div>
        </a>`;
    }