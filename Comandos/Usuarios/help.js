module.exports = ({
name: "help", 
aliases: ["ayuda", "comandos", "commands"],
code: `
  $color[GREEN]
  $description[**¡Chat Global es un bot de Discord por el que te podrás comunicar con más servidores que me hayan configurado por medio de un canal!**

  - **c/setChannel:** Establece un canal de interchat para el servidor.
  - **c/setInvite:** Establece una invitación de interchat para el servidor.
  - **c/setColor:** Personaliza el color de tu embed para el interchat.
  - **c/reset:** Desactiva el canal y la invitación de interchat en el servidor.
  - **c/config:** Mira sobre que configuración de interchat está puesta en el servidor.

  - **Invitame:** [Aquí](https://discord.com/oauth2/authorize?client_id=863880148822786078&scope=bot&permissions=8)
  - **Soporte:** https://discord.gg/huguitis]
  $suppressErrors
` 
})