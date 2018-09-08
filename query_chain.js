var PROTO_PATH = __dirname + '/protos/COMMLayer.proto';

var grpc = require('grpc');
var commlayer_proto = grpc.load(PROTO_PATH).COMMLayer;
var time = new Date();
var config = require('./config');

var address = config.host + ':' + config.port;
var client = new commlayer_proto.COMMLayer(address, grpc.credentials.createInsecure());

var type = 7;   //retrieve a chain following condition below
var jsonArgs = {
    "Args" : 
    [
        "admin",                                    //fixed-value
        "aggchannel",                               //fixed-value
        "genericcc", {                              //fixed-value
            "Args" :
            [
                "queryDocument",
                //specify the query
                [
                    {
                        "field" : "vehicleID",
                        "operator" : "=",
                        "operand" : "244bee00-3c7b-11e8-8994-85c175e72d28"
                    }
                ]
            ]
        },
        "AK",                                       //fixed-value
        "SK"                                        //fixed-value
    ]
};

var request = {
    requestType: type,
    args: JSON.stringify(jsonArgs),
    document: 'sf-document'
};

//gRPC to SKT BlockChain Network to get response 
client.ProcessCOMM(request, function(err,response) {
    var message = JSON.stringify(JSON.parse(response.payload),null,2);  
    console.log("response", message);
});