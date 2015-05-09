var notify = require("./notify");

module.exports = function notifyStyleLint (stdout) {
  var messages = stdout.split("\n");

  messages.pop(); // Remove last empty new message.

  if(0 < messages.length) {
    var message = "{{length}} lint warning(s) found.".replace(/{{length}}/g, messages.length);

    notify.showNotification({
      subtitle: "Task style:lint",
      message: message,
      appIcon: notify.appIcon.sass
    });
  }
};
