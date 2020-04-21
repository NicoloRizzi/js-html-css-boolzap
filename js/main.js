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
});