# SKT Blockchain Interworking Guide

This example code demonstrates how to store(invoke) a ledge into a blockchain network and retrieve(query) a ledge from the network

## Main Scripts

1. invoke_chain.js
   
   To store a ledge as written in the ``invoke_chain.js``

   ```
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

   ```

   and execute

   ```    
    hongbeomahn@Hongbeoms-MacBook  ~/SmartFleetProjects/skt_blockchain  node invoke_chain.js
    response:
    ```

2. query_chain.js
   
   To query a ledge with specific conditions as written in the ``query_chain.js``

   ```
   {
        "field" : "vehicleID",
        "operator" : "=",
        "operand" : "244bee00-3c7b-11e8-8994-85c175e72d28"
    }
   ```
   and execute

   ```
   hongbeomahn@Hongbeoms-MacBook  ~/SmartFleetProjects/skt_blockchain  node query_chain.js

    response [
        {
            "Key": "SF-1536389881956",
            "Record": {
            "accel": 0,
            "companyID": "dcae45b0-7650-11e8-96b3-bf7af28e956c",
            "createdTime": 1536389881956,
            "deAccel": 0,
            "dist": 3013,
            "key_doc": "SF-1536389881956_doc",
            "overSpeed": 13,
            "score": 66.34583471622967,
            "tripID": "30345660-b234-11e8-9bf8-956d65b68a0a",
            "vehicleID": "244bee00-3c7b-11e8-8994-85c175e72d28"
            }
        }
    ]
    ```

    if there are multiple ledges in the blockchain network with identical condition to specified above, the multiple ledges are returned as follow.

    ```
     hongbeomahn@Hongbeoms-MacBook  ~/SmartFleetProjects/skt_blockchain  node query_chain.js

    response [
    {
        "Key": "SF-1536389881956",
        "Record": {
        "accel": 0,
        "companyID": "dcae45b0-7650-11e8-96b3-bf7af28e956c",
        "createdTime": 1536389881956,
        "deAccel": 0,
        "dist": 3013,
        "key_doc": "SF-1536389881956_doc",
        "overSpeed": 13,
        "score": 66.34583471622967,
        "tripID": "30345660-b234-11e8-9bf8-956d65b68a0a",
        "vehicleID": "244bee00-3c7b-11e8-8994-85c175e72d28"
        }
    },
    {
        "Key": "SF-1536390309221",
        "Record": {
        "accel": 0,
        "companyID": "dcae45b0-7650-11e8-96b3-bf7af28e956c",
        "createdTime": 1536390309221,
        "deAccel": 0,
        "dist": 3013,
        "key_doc": "SF-1536390309221_doc",
        "overSpeed": 13,
        "score": 66.34583471622967,
        "tripID": "30345660-b234-11e8-9bf8-956d65b68a0a",
        "vehicleID": "244bee00-3c7b-11e8-8994-85c175e72d28"
        }
    },
    {
        "Key": "SF-1536390313214",
        "Record": {
        "accel": 0,
        "companyID": "dcae45b0-7650-11e8-96b3-bf7af28e956c",
        "createdTime": 1536390313214,
        "deAccel": 0,
        "dist": 3013,
        "key_doc": "SF-1536390313214_doc",
        "overSpeed": 13,
        "score": 66.34583471622967,
        "tripID": "30345660-b234-11e8-9bf8-956d65b68a0a",
        "vehicleID": "244bee00-3c7b-11e8-8994-85c175e72d28"
        }
      }
    ]
    ```