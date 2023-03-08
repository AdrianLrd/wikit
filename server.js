// Require et Instancie fastify et fastify Static
const fastify = require('fastify')({ logger: true });
const fastifyStatic = require('@fastify/static');

// Require openai
const { Configuration, OpenAIApi } = require("openai");

// Création de la configuration de l'API avec l'API_KEY
const configuration = new Configuration({
  apiKey: "API_KEY",
});

//Instancie l'API avec la configuration
const openai = new OpenAIApi(configuration);

//Instancie @fastify/static pour pouvoir utiliser la fonction sendFile
fastify.register(fastifyStatic, {
  root: __dirname,
});

// Déclaration d'une route / qui affiche le contenu de index.html
fastify.get('/', (_request, reply) => {
  reply.sendFile('index.html');
});

//Déclaration d'une route /completionOpenAI pour récupérer la requête du client
fastify.post('/completionOpenAI', async (request, reply) => {
  //Mets le corps du message dans la variable message
  const { messages } = request.body;

  /*Création du chat complétion en Node.js avec les paramètres :
   * "model": "gpt-3.5-turbo",
   * "messages": [{"role": "user", "content": message de l'utilisateur}]
  */
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
  });

  //Retour de la Promesse au client (avec le contenu de la réponse)
  reply.send({ response: completion.data.choices[0].message });
});


// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 }) //Serveur en localhost sur le port 3000
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()