
//  Start the socket.io connection between client and server

var socket = io.connect();

// Helper functions

// addMessge()
function addMessage(msg, pseudo){
	$("#charEntries").append('<div class="message"></p>' + pseudo + ' : ' + msg + '</p></div>');
}

// sendMessage()
function sendMessage() {
	if( $('#messageInput').val() != "") {
		socket.emit('message', $('$messageInput').val());
		addMessage('#messageInput').val(), "Me", new Date().toISOString(), true);
		$('#messageInput').val('');

	}
}

//setPesudo
function setPesudo(){
	if( $("#pseudoInput").val() != "" ) {
		socket.emit('setPesudo', $('#pseudoInput').val());
		$('#chatControls').show();
		$('#pseudoInput').hide();
		$('#pesudoSet').hide();
	}
}

// to receive incoming message
socekt.on('message', function(data){
	addMessage(data['message'], data['pseudo']);
})

$(function(){
	$("#chatControls").hide();
	$("#pseudoSet").click(function() { setPesudo(); });
	$("#submit").click(function() { setnMessage(); });
});