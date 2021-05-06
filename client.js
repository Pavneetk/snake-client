const net = require("net");
const {host, port} = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: host,// IP address here,
    port: port// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    conn.write("Name: PK");
    console.log("Successfully connected to game server");
    
    /*
    let modifier = 50;
    let delay = 50;
    for (let i = 0; i< 20; i++) {
       setTimeout(() => {
          conn.write("Move: up");
        }, delay)
        delay += modifier;
     }
    */
  });

  conn.on("data", (data) => {
    console.log(data);
  });


  return conn;
};

module.exports = {
  net,
  connect,
};