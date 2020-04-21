$(document).ready(function(){
  // referenze
  var messageInput = $('.new-message-input');  
  var sendIcon = $('.footer-icons.send i');
  
  


  /**
   * MOSTRA ICONA FRECCIA QUNADO SEI IN FOCUS INPUT
   */
  messageInput.on('focus blur',function(){
    //sostituzione della classe attuale con classe fontawsome paper-plane 
    sendIcon.toggleClass('fa-microphone fa-paper-plane');
  })

  /**
   * STATO DI INVIO CLICCANDO NELLA ICONA
   */
  sendIcon.click(function () {
    sendMessage(messageInput);
  });

  // STATO DI INVIO CLICCANDO ENTER
  messageInput.keypress(function (e) {
    if (e.which == 13) {
      sendMessage(messageInput);
    }
  });

});


// FUNCTION
// invia nuovo messaggio
function sendMessage(input) {
  // MEMORIZZO IN UNA VARIABILE IL VALORE PASSATO TRAMITE PARAMETRO
  var testoMessaggio = input.val().trim();

  // CONTROLLO SE IL CAMPO HA CONTENUTO
  if (testoMessaggio.length > 0) {
    // clone template
    var nuovoMessaggio = $('.template .message').clone();

    // aggiunta testo messaggio
    nuovoMessaggio.children('.message-text').text(testoMessaggio);

    // Creazione e inserimento ora attuale
    var data = new Date();
    var ora = addZero(data.getHours());
    var minuti = addZero(data.getMinutes());
    var orario = ora + ':' + minuti;
    nuovoMessaggio.children('.message-time').text(orario);

    // Aggiungi classe sent (inviata dall'utente)
    nuovoMessaggio.addClass('sent');

    // Aggiunta nuovo messaggio al contenitore messaggi attivo
    $('.message.user-msg .active').append(nuovoMessaggio);

    // reset input messaggio
    input.val('');
  } 
}  


// funzione aggiungi zero
function addZero(numero) {
  if (numero < 10) {
    numero = '0' + numero;
  }

  return numero;
}