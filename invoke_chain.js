var PROTO_PATH = __dirname + '/protos/COMMLayer.proto';

var grpc = require('grpc');
var commlayer_proto = grpc.load(PROTO_PATH).COMMLayer;
var time = new Date();
var config = require('./config');

var address = config.host + ':' + config.port;
var client = new commlayer_proto.COMMLayer(address, grpc.credentials.createInsecure());

var type = 8;   //invoke a chain the argument below toward SKT Block Chain Network
var jsonArgs = {
    "Args" : 
    [
        "admin",                                    //fixed value
        "aggchannel",                               //fixed value
        "genericcc", {                              //fixed value
            "Args" :        
            [
                "createDocument",                   //fixed value
                "SF-" + time.getTime("utf8"),       //This value shall be unique for each invocation request
                
                //below where Smart[Fleet] data will be contains.
                {
                    "companyID" : "dcae45b0-7650-11e8-96b3-bf7af28e956c",
                    "vehicleID" : "244bee00-3c7b-11e8-8994-85c175e72d28",
                    "tripID" : "30345660-b234-11e8-9bf8-956d65b68a0a",
                    "createdTime" : time.getTime(),
                    "score": 66.34583471622967,
                    "accel": 0,
                    "deAccel": 0,
                    "dist": 3013,
                    "overSpeed": 13
                }
            ]
        },
        "AK",                                       //fixed value
        "SK"                                        //fixed value
    ]
};

var request = {
    requestType: type,
    args: JSON.stringify(jsonArgs),
    document: 'sf-document'
};

//gRPC to SKT BlockChain Network
client.ProcessCOMM(request, function(err,response) {
    console.log('response:', response.payload.toString());
});
