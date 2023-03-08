/** ---- Récupération des balises ---- **/
const form = document.getElementById('formChat');
const input = document.getElementById('messageInput');
const ulChat = document.getElementById('convoChat');
const spinner = document.querySelector('.loader');
const submitForm = document.getElementById('submitForm');

/** ---- Création d'une classe pour contenir les messages de l'utilisateur et de ChatGPT ---- **/
/* 
  * 3 attributs publics: 
  * 'from': représente la source du message 
  * 'content': représente le contenu du message de la source
  * 'time': l'heure sous format hh:mm du message
  */
class Message {
  public content: string;
  public from: string;
  public time: string;
  constructor(content: string, from: string, time: string) {
    this.content = content;
    this.from = from;
    this.time = time;
  }
}

/** ---- Event Listener sur le form lors du clique ou de la soumission du form (appuye sur la touche ENTER) ----  **/
form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = (input as HTMLInputElement).value.trim(); // Supprime les espaces en trop et récupère le message de l'input

  /*
   * Création du champ time de la classe message avec Date()
   */
  const now = new Date();
  let h = ('0' + now.getHours()).slice(-2);
  let m = ('0' + now.getMinutes()).slice(-2);
  const timeUser = h + ':' + m;

  submitForm?.classList.add('none'); // Display none du bouton d'envoi
  spinner?.classList.add('spin'); // Ajout du chargement (loader)
  spinner?.classList.remove('none'); // Suppression du display none sur le loader


  //Mets la valeur de l'input vide
  (input as HTMLInputElement).value = '';

  //Envoi du message en minuscule dans la fonction sendMessage qui est une Promesse (async), attente du résultat avant de faire la suite (await)
  const response = await sendMessage(message.toLocaleLowerCase());

  submitForm?.classList.remove('none'); // Suppression du display none sur le bouton d'envoi
  spinner?.classList.remove('spin'); // Suppression du chargement (loader)
  spinner?.classList.add('none'); // Display none du chargement

  h = ('0' + now.getHours()).slice(-2);
  m = ('0' + now.getMinutes()).slice(-2);
  const timeChatBot = h + ':' + m;

  /* Création du message de l'utilisateur avec la classe Message 
   * content: Message de l'utilisateur
  */
  const util = new Message(message, 'Vous', timeChatBot)

  /* Création du message de ChatGPT avec la classe Message 
   * content: Réponse du message de l'utilisateur
  */
  const chatbot = new Message(response.content, 'ChatGPT', timeUser);

  //Appel des fonctions showMessage qui fait la création du message en front
  showMessage(util);
  showMessage(chatbot);

});

/* ---- Fonction asynchrone qui fait une requête au serveur pour récupérer la réponse de ChatGPT ---- 
 * Paramètre d'entrée : message de l'utilisateur, type string
*/
async function sendMessage(message: string) {

  // Attente de la réponse du serveur après envoi du message
  const response = await fetch('/completionOpenAI', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages: [{ role: 'user', content: message }] }),
  });

  //Conversion de la réponse reçue en Promise vers json
  const data = await response.json();
  return data.response;
}

/* ---- Fonction pour la création des balises du chat ---- 
 * Paramètre d'entrée : message à mettre en front sur la page, type classe Message 
*/
function showMessage(message: Message) {

  //Création d'une li et d'une div qui va contenir 3 paragraphes
  let li = document.createElement('li');
  let div = document.createElement('div')
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');

  //Paragraphe 1 : Source du message
  p1.innerHTML = message.from;
  //Paragraphe 2 : Contenu du message
  p2.innerHTML = message.content;
  //Paragraphe 3 : Heure du message
  p3.innerHTML = message.time;

  //Ajout de la classe fromMessage au paragraphe 1
  p1.classList.add('fromMessage')
  //Ajout de la classe timeMessage au paragraphe 2
  p3.classList.add('timeMessage')
  //Ajout de la classe chatMessage à la div

  div.classList.add('chatMessage')

  //Modification de l'affichage si la source est ChatGPT, tout le contenu est mis à gauche
  if (message.from == 'ChatGPT') {
    div.style.textAlign = "left";
    li.style.justifyContent = "flex-start";
  }

  //Ajout des paragraphes à la div
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  //Ajout de la div dans la balise li
  li.appendChild(div);

  //Ajout de la li dans la liste d'éléments sans ordre déjà contenu dans la page 
  ulChat?.appendChild(li);

}