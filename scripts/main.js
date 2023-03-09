
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about me");
  createCode("socials");
  createCode("education");
  createCode("experience");
  createCode("cv");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/emimikatz";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;

  if(value === "about me" || value === "aboutme" || value === "about-me" || value === "about-me " || value === "about me " || value === "About me"){
    trueValue(value);
    createText("My name is Emilie Couleard. I'm 25 years old.")
    createText("I'm an Infosec enthousiast and professional.")
  }
  else if(value === "socials" || value === "social" || value === "Socials" || value === "social " || value === "Socials "){
    trueValue(value);
    createText("<a href='https://github.com/emimikatz' target='_blank'><i class='fab fa-github white'></i> github.com/emimikatz</a>")
    createText("<a href='https://www.linkedin.com/in/%C3%A9milie-couleard-96047410b/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/émilie-couleard-96047410b/</a>")
    createText("<a href='https://www.instagram.com/emimikatz/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/emimikatz</a>")
    createText("<a href='https://www.twitter.com/emimikatz/' target='_blank'><i class='fab fa-twitter white'></i> twitter.com/emimikatz</a>")
  }
  else if(value === "education" || value === "Education" || value === "educations "  || value === "education " || value === "educations"){
    trueValue(value);
    createText("2017 - 2020 : EPITA - Cybersecurity Master")
    createText("2015 - 2017 : Paris Descartes University - Computer Science Technical Diploma")
  }
  else if(value === "experience" || value === "Experience" || value === "experiences "  || value === "experience " || value === "experiences"){
    trueValue(value);
    createText("Ceritar Technologies - Montreal (Canada) - Web Integrator - 2016")
    createText("Sanofi - Paris (France) - Information Protection & Cybercrime Analyst - 2017 2019 ")
    createText("French Ministry of Armed Forces - Paris (France) - Cybersecurity Engineer - 2019 2020")
    createText("Kudelski Security - Lausanne (Switzerland) - SOC Analyst - 2021 2022")
  }
  else if(value === "cv" || value === "CV" || value === "Cv "  || value === "Cv"  || value === "cv " || value === "CV "){
    window.location.href = "CV_couleard.pdf";
  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} `;
  app.appendChild(p);
}

open_terminal();