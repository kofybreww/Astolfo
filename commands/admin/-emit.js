module.exports.run = async (message, args, flags) => {
  if (message.author.id !== "548675133481418752") return;
  try {
    message.client.emit(args[0], message);
    message.channel.send(`\`\`\`EVENT type [${args[0]}] emitted\`\`\``);
  } catch (err) {
    message.channel.send(
      `\`\`\`EVENT type [${args[0]}] failed to emit\n===================================\n ${err}\`\`\``
    );
  }
};
