// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    switch (key){
      case '\u0003': process.exit();
      case 'w': key = 'Move: up'; break;
      case 'a': key = 'Move: left'; break;
      case 's': key = 'Move: down'; break;
      case 'd': key = 'Move: right'; break;
      case 'j': key = 'Say: Bye'; break;
      case 'h': key = 'Say: Hello'; break;
    }
    connection.write(key);
  
  });

  return stdin;
};

module.exports = {setupInput,};