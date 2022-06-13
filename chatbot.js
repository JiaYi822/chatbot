document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        output(input);
        addChat(input,output(input));
      }
    });
  });

  function output(input){
    let reply ='';
    input = input.toLowerCase();
    console.log(input);
    if(input.includes('?!')){
        reply = "Calm down, I know what I'm doing!";
    }else if(input.includes('!')){
        reply = 'Whoa, chill out!';
    }else if(input.includes('?')){
        reply = "Sure.";
    }else if(input.includes('bob') && input.length == 3){
        reply = "Fine. Be that way!";
    }else{
        reply = 'Whatever.'
    }

    document.getElementById("input").value = "";

    return reply;
  }

function addChat(input,reply) {
    
    const mainDiv = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `Bob: <span id="bot-response">${reply}</span>`;
    mainDiv.appendChild(botDiv);

    mainDiv.scrollTop = mainDiv.scrollHeight - mainDiv.clientHeight;
  }
