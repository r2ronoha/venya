var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var mycnx = 'mongodb://127.0.0.1:27017/';
var mydb = 'venya';

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/getCustomer"] = requestHandlers.getCustomer;
handle["/getFullCustomerData"] = requestHandlers.getFullCustomerData;
handle["/register"] = requestHandlers.register;
handle["/getLostPassword"] = requestHandlers.getLostPassword;
handle["/getLostUsername"] = requestHandlers.getLostUsername;
handle["/getLostCredentials"] = requestHandlers.getLostCredentials;
handle["/updateSetting"] = requestHandlers.updateSetting;
handle["/createCustomer"] = requestHandlers.createCustomer;

server.start(router.route, handle, mycnx, mydb);