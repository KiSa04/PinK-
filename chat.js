let usersAtIndex1;
let unread;
let contenttxt;
let curr;
const urlParams = new URLSearchParams(window.location.search);

// Get a specific parameter value by name
const sourceUrlParam = urlParams.get('l');

function moveFocusDown(event) {
    // Obtenha todos os elementos div dentro do contêiner
    var divs = document.getElementById('image-container').getElementsByTagName('div');

    // Encontre o div atualmente focado
    var focusedIndex = -1;
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains('focused')) {
            focusedIndex = i;
            break;
        }
    }

    // Remova a classe focused do div atualmente focado
    if (focusedIndex !== -1) {
        divs[focusedIndex].classList.remove('focused');
    }
var nextIndex;
    // Calcule o índice do próximo div
	if (event.key === 'ArrowDown'){
		nextIndex = (focusedIndex + 2) % divs.length;
	}
	else if (event.key === 'ArrowUp'){
		nextIndex = (focusedIndex - 2) % divs.length;
		if (nextIndex < 0){
			nextIndex = divs.length -2;
		}
	}

    // Adicione a classe focused ao próximo div
    divs[nextIndex].classList.add('focused');
}

function lol(e) {
        switch (e.key) {
			case 'SoftRight':
			if(document.getElementById('image-container').style.display == 'none')
			{
				console.log("here");
				document.getElementById('image-container').style.display = 'flex';
				document.getElementsByClassName('input-container')[0].style.display = 'none';
				document.getElementById('chat-body').innerHTML= '';
				
			}
			else{
				console.log("there");
				window.location.href = 'kinterest-index.html';
			}
			break;
			case 'ArrowDown':
			if(document.getElementsByClassName('input-container')[0].style.display == '' || document.getElementsByClassName('input-container')[0].style.display == 'none')
			{
			moveFocusDown(e);
			}
			break;
			case 'ArrowUp':
			if(document.getElementsByClassName('input-container')[0].style.display == '' || document.getElementsByClassName('input-container')[0].style.display == 'none')
			{
			moveFocusDown(e);
			}
			break;
			case 'Enter':
			if(document.getElementsByClassName('input-container')[0].style.display == 'flex')
			{
				var url2 = `https://www.pinterest.pt/resource/ConversationMessagesResource/create/`;
				contenttxt = `source_url=%2F&data=%7B%22options%22%3A%7B%22conversation_id%22%3A%22${curr}%22%2C%22text%22%3A%22${encodeURIComponent(document.getElementById('message-input').value)}%22%7D%2C%22context%22%3A%7B%7D%7D`;
					var xhr = new XMLHttpRequest({
                                mozSystem: true
                            });

                            xhr.open("POST", url2);

                            Object.keys(headers).forEach((key) => {
                                xhr.setRequestHeader(key, headers[key]);
                            });

                            let cookieValue = savedCookies;
                            //console.log(cookieValue);
                            xhr.setRequestHeader("Cookie", cookieValue);
							xhr.setRequestHeader("X-CSRFToken", cookieValue.match(/csrftoken=([^;]+)/)[1]);
							xhr.onreadystatechange = function () {
								if (xhr.readyState == 4 && xhr.status == 200) {
									document.getElementById('message-input').value = '';
									document.getElementById('chat-body').innerHTML= ''
									document.getElementsByClassName('focused')[0].click();
									curr = document.getElementsByClassName('focused')[0].getAttribute('data-notcustom');
									    }
							};

							xhr.send(contenttxt);
			}
			else 
			{
				document.getElementsByClassName('focused')[0].click();
				curr = document.getElementsByClassName('focused')[0].getAttribute('data-notcustom');
			}
			break;
			case 'ArrowRight':
				if(document.getElementsByClassName('input-container')[0].style.display == 'flex')
				{
					document.getElementsByClassName('send-button')[0].focus();
					document.getElementById('message-input').blur();
				}
			break;
			case 'ArrowLeft':
				if(document.getElementsByClassName('input-container')[0].style.display == 'flex')
				{
					document.getElementsByClassName('send-button')[0].blur();
					document.getElementById('message-input').focus();
				}
			break;
		}
}

document.addEventListener("keydown", lol);
const apiUrl = 'https://www.pinterest.pt/resource/ConversationsResource/get/?source_url=/pin//&data={%22options%22:{%22field_set_key%22:%22default%22},%22context%22:{}}&_=';

savedCookies = sourceUrlParam;

                            var headers = {
                                "Pragma": "no-cache",
                                "Accept": "*/*",
                                "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "Referer": "https://www.pinterest.pt/",
                                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0"
                            };

                            var xhr = new XMLHttpRequest({
                                mozSystem: true
                            });

                            xhr.open("GET", apiUrl);

                            Object.keys(headers).forEach((key) => {
                                xhr.setRequestHeader(key, headers[key]);
                            });

                            let cookieValue = savedCookies;
                            //console.log(cookieValue);
                            xhr.setRequestHeader("Cookie", cookieValue);

                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === XMLHttpRequest.DONE) {
                                    if (xhr.status === 200) {
										/*if (window.opener) {
  mainWindow= window.opener;
}*/
					let firstData = JSON.parse(xhr.responseText).resource_response.data;
					usersAtIndex1 = firstData.map(item => (item.users && item.users.length > 1) ? item.users[1] : undefined);
					unread = firstData.map(item => item.unread);
					const validUsersAtIndex1 = usersAtIndex1.filter(user => user !== undefined);
					console.log(usersAtIndex1);
					const container = document.getElementById('image-container');
					usersAtIndex1.forEach((user, index)=> {
  // Create an <img> element
const div = document.createElement('div');
const div1 = document.createElement('div');
  const imgElement = document.createElement('img');

  // Set the src attribute using the user's image_large_url
  imgElement.src = user.image_large_url;

  // Optionally, you can set other attributes or styles for the <img> element
  imgElement.alt = 'User Image';
  //imgElement.style.font-size = '10px'; // Adjust the width as needed

  var nameElement = document.createElement('span');
    ; // Replace 'name' with the actual property name
if (unread[index] === 0) {
 nameElement.textContent = user.full_name
}
else{
	 div.className = 'unread'; //unread[index]
  nameElement.textContent = `${user.full_name} (${unread[index]})`
}
    var usernameElement = document.createElement('span');
    usernameElement.textContent = user.username; // Replace 'username' with the actual property name
    usernameElement.style.fontSize = '10px';
	
    div1.appendChild(nameElement);
    div1.appendChild(usernameElement);
    div.appendChild(imgElement);
	div.setAttribute('data-custom', user.id);
	div.setAttribute('data-notcustom', firstData[index].id);
    div.appendChild(div1);
	if (index === 0) {
        div.classList.add('focused');
    }
	div.onclick = function () {
    console.log(`Clicked div at position ${user.id}`);
var url1 = `https://www.pinterest.pt/resource/ConversationMessagesResource/get/?source_url=%2Fpin%2F%2F&data={%22options%22%3A{%22conversation_id%22%3A%22${firstData[index].id}%22%2C%22page_size%22%3A25%2C%22refresh%22%3Afalse}%2C%22context%22%3A{}}&_=1702344227494`;

var xhr = new XMLHttpRequest({
                                mozSystem: true
                            });

                            xhr.open("GET", url1);

                            Object.keys(headers).forEach((key) => {
                                xhr.setRequestHeader(key, headers[key]);
                            });

                            let cookieValue = savedCookies;
                            //console.log(cookieValue);
                            xhr.setRequestHeader("Cookie", cookieValue);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Handle the response here
        var response = JSON.parse(xhr.responseText);
        console.log(response);
		var messages = response.resource_response.data;
		 var chats = [];

messages.forEach((item) => {
var isMe = (item.sender.id == div.getAttribute('data-custom'));

if (isMe === true)
{
	console.log("not sent by me")
	if (item.pin !== null) {
    // If the message has a non-null pin, map image_signature
    chats.push(`img ${item.pin.image_signature}`);
  } else {
    // If the message has a null pin, map text
    chats.push(`txt ${item.text}`);
  }
}
else{
  if (item.pin !== null) {
    // If the message has a non-null pin, map image_signature
    chats.push(`limg ${item.pin.image_signature}`);
  } else {
    // If the message has a null pin, map text
    chats.push(`ltxt ${item.text}`);
  }
}
});

            // Display the messages in the chat container
            displayMessages(chats);
		
    }
};

xhr.send();

	};
    container.appendChild(div);
	console.log(unread[index]);
	
	
});
                                        
                                    } else {
                                        console.error("Erro na solicitação:", xhr.status, xhr.statusText);
                                    }
                                }
                            };

                            xhr.send();
function scrollw()
{
	document.body.scrollTop = document.body.scrollHeight;
  // For modern browsers
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
  document.getElementById('message-input').focus()
  document.removeEventListener("keydown", scrollw);
}

function displayMessages(messages) {
    var chatContainer = document.getElementById('chat-body');
    document.getElementById('image-container').style.display = 'none';
	document.getElementsByClassName('input-container')[0].style.display = 'flex';
	var a = messages.length;
	document.addEventListener("keydown", scrollw);
    messages.forEach(function (message) {
        var messageElement;
		a--;
        if (message.includes('img')) {
            // If the message contains 'img', create a div with an image
            messageElement = document.createElement('div');
            messageElement.className = 'message';
            if (message.includes('limg')) {messageElement.id = 'sent_by_other';}
            var imgElement = document.createElement('img');
			var signature = extractImageSource(message);
            imgElement.src = `http://i.pinimg.com/400x/${signature.slice(0, 2)}/${signature.slice(2, 4)}/${signature.slice(4, 6)}/${signature}.jpg`; // Extract image source from the message
			imgElement.className = 'img_chat';
            messageElement.appendChild(imgElement);
        } else {
            // Otherwise, create a div with text
            messageElement = document.createElement('div');
			var imgElement = document.createElement('div');
            messageElement.className = 'message';
			imgElement.className = 'txt_chat';
			if (message.includes('ltxt')) {messageElement.id = 'sent_by_other';}
            imgElement.textContent = extractTextContent(message); // Extract text content from the message
			messageElement.appendChild(imgElement);
        }

        chatContainer.appendChild(messageElement);
		})
		
}

// Extract image source from the 'img' message
function extractImageSource(message) {
    return message.split(' ')[1]; // Assuming the format is 'img <image_source>'
}

// Extract text content from the 'txt' message
function extractTextContent(message) {
    return message.replace(message.split(' ')[1], ""); // Assuming the format is 'txt <text_content>'
} //error handling multiple words
