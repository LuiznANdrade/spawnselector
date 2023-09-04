document.querySelector('body').innerHTML = `
<div id="login">
<div class="content_select_login">
  <div class="login-header">
    <div class="login-header-left">
        <div class="header-left-image">
            <img src="images/icone.png" alt="Icone da City">
        </div>
        <div class="header-left-text"><span>Olá, seja bem vindo(a)</span><h2>Onde você irá querer spawnar?</h2></div>
    </div>
    <div class="login-header-right">
        <button id="selectSpawn">SELECIONAR LOCALIZAÇÂO</button>
    </div>
  </div>
  <div class="login-container" >
    <div class="image-selector menuoption" id="garagem01" data-action="garagem01"><img style="filter: saturate(100%);" src="https://cdn.discordapp.com/attachments/1127720158555807854/1148034830228013156/ultimalocalizacao.png" alt=""></div>
    <div class="image-selector menuoption" id="garagem02" data-action="garagem02"><img src="https://cdn.discordapp.com/attachments/1127720158555807854/1148034830475460648/lossantosgarage.png" alt=""></div>
    <div class="image-selector menuoption" id="garagem03" data-action="garagem03"><img src="https://cdn.discordapp.com/attachments/1127720158555807854/1148034830962016276/Sandyshores.png" alt=""></div>
    <div class="image-selector menuoption" id="garagem04" data-action="garagem04"><img src="https://cdn.discordapp.com/attachments/1127720158555807854/1148034830748110928/paletobay.png" alt=""></div>
</div>
</div>
</div>`;




$(function () {
    init();
    var actionContainer = $("body");
    window.addEventListener('message', function (event) {
        var item = event.data;
        if (item.showmenu) {
            ResetMenu()
            actionContainer.show();
        }
        if (item.hidemenu) {
            actionContainer.hide();
        }
    });
})


document.querySelector('title').innerHTML = "Big-Spawn Reformuled";
selectSpawn = 0
garagem01 = document.getElementById('garagem01');
garagem02 = document.getElementById('garagem02');
garagem03 = document.getElementById('garagem03');
garagem04 = document.getElementById('garagem04');
buttonGo = document.getElementById('selectSpawn');


buttonGo.addEventListener('click', () =>{
    if(selectSpawn == 1){
        $.post("http://spawn-selector/garagem01"); 
        console.log("Você voltou para a ultima localização");
    };
    if(selectSpawn == 2){
        $.post("http://spawn-selector/garagem02"); 
        console.log("Los Santos Garage");

    };
    if(selectSpawn == 3){
        $.post("http://spawn-selector/garagem03");
        console.log("Sandy Shores");

    };
    if(selectSpawn == 4){
        $.post("http://spawn-selector/garagem04"); 
        console.log("Paleto Bay");

    };
});


garagem01.addEventListener('click', () => {
    selectSpawn = 1;
    console.log(selectSpawn);
    $('#garagem01 img').css('filter', 'saturate(100%)');
    $('#garagem02 img').css('filter', 'saturate(0%)');
    $('#garagem03 img').css('filter', 'saturate(0%)');
    $('#garagem04 img').css('filter', 'saturate(0%)');

    $('#garagem01 img').css('filter', 'saturate(100%)');
    $('#garagem02 img').css('filter', 'saturate(0%)');
    $('#garagem03 img').css('filter', 'saturate(0%)');
    $('#garagem04 img').css('filter', 'saturate(0%)');
});

garagem02.addEventListener('click', () => {
    selectSpawn = 2;
    console.log(selectSpawn);
    $('#garagem01 img').css('filter', 'saturate(0%)');
    $('#garagem02 img').css('filter', 'saturate(100%)');
    $('#garagem03 img').css('filter', 'saturate(0%)');
    $('#garagem04 img').css('filter', 'saturate(0%)');
});

garagem03.addEventListener('click', () => {
    selectSpawn = 3;
    console.log(selectSpawn);
    $('#garagem01 img').css('filter', 'saturate(0%)');
    $('#garagem02 img').css('filter', 'saturate(0%)');
    $('#garagem03 img').css('filter', 'saturate(100%)');
    $('#garagem04 img').css('filter', 'saturate(0%)');
});

garagem04.addEventListener('click', () => {
    selectSpawn = 4;
    console.log(selectSpawn);
    $('#garagem01 img').css('filter', 'saturate(0%)');
    $('#garagem02 img').css('filter', 'saturate(0%)');
    $('#garagem03 img').css('filter', 'saturate(0%)');
    $('#garagem04 img').css('filter', 'saturate(100%)');
});
