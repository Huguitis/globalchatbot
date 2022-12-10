module.exports = [{
name: "register", 
code: `
$addButton[1;Register;success;Register_$authorID]

$color[1;YELLOW]
$description[1;
**<@$authorID>; __To send messages with the bot for the first time, you must register.__**

> **Do you want to do it now?**]

$onlyIf[$getGlobalUserVar[Registered]!=Yes;{newEmbed:{description:$getVar[ErrorEmoji] **You are already registered!**}{color:RED}}]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:GREEN}{description:$getVar[SuccessEmoji] **__Successfully registered!__**}]
           
$setGlobalUserVar[Registered;Yes]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]
        
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Register;]
`
}]