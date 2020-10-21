'use strict';


/**
 * to get the details and list of VPCs in the organisation
 *
 * username String 
 * password String 
 * orgid String 
 * returns Object
 **/
exports.organisationOrgidVpcGET = function(username,password,orgid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "12345",
    "name" : "myProductionVpc",
    "region" : "us-east-1",
    "cidrBlock" : "192.168.1.0/24",
    "internalDns" : {
      "dnsServers" : [ "8.8.8.8", "8.8.8.4" ],
      "specialDomains" : [ "mydomain.local", "mydomain.localdomain" ]
    },
    "isDefault" : false,
    "associatedEnvironments" : [ "eeeeb145-6f79-402d-85fc-8c90905d2490" ],
    "ownerId" : "5555555-6666-7777-8888-99999999999",
    "sharedWith" : [ "0000000-1111-2222-3333-44444444444" ],
    "firewallRules" : [ {
      "cidrBlock" : "0.0.0.0/0",
      "protocol" : "tcp",
      "fromPort" : 8081,
      "toPort" : 8082
    }, {
      "cidrBlock" : "192.168.1.0/24",
      "protocol" : "tcp",
      "fromPort" : 8091,
      "toPort" : 8092
    } ]
  } ],
  "total" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * to create a VPC in teh organisation
 *
 * username String 
 * password String 
 * orgid String 
 * generated Type  (optional)
 * returns type_1
 **/
exports.organisationOrgidVpcPOST = function(username,password,orgid,generated) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "12345",
  "name" : "myProductionVpc",
  "region" : "us-east-1",
  "cidrBlock" : "192.168.1.0/24",
  "internalDns" : {
    "dnsServers" : [ "8.8.8.8", "8.8.8.4" ],
    "specialDomains" : [ "mydomain.local", "mydomain.localdomain" ]
  },
  "isDefault" : false,
  "associatedEnvironments" : [ "eeeeb145-6f79-402d-85fc-8c90905d2490" ],
  "ownerId" : [ "5555555-6666-7777-8888-99999999999" ],
  "sharedWith" : [ "0000000-1111-2222-3333-44444444444" ],
  "firewallRules" : [ {
    "cidrBlock" : "0.0.0.0/0",
    "protocol" : "tcp",
    "fromPort" : 8081,
    "toPort" : 8082
  }, {
    "cidrBlock" : "192.168.1.0/24",
    "protocol" : "tcp",
    "fromPort" : 8091,
    "toPort" : 8092
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete a vpc from the organistion
 *
 * username String 
 * password String 
 * orgid String 
 * vpcid String 
 * returns Object
 **/
exports.organisationOrgidVpcVpcidDELETE = function(username,password,orgid,vpcid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "vpc deleted successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * edits a VPC
 *
 * username String 
 * password String 
 * orgid String 
 * vpcid String 
 * generated Type_2  (optional)
 * returns type_3
 **/
exports.organisationOrgidVpcVpcidPUT = function(username,password,orgid,vpcid,generated) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "myProductionVpc",
  "internalDns" : {
    "dnsServers" : [ "8.8.8.8", "8.8.8.4" ],
    "specialDomains" : [ "mydomain.local", "mydomain.localdomain" ]
  },
  "isDefault" : false,
  "associatedEnvironments" : [ "eeeeb145-6f79-402d-85fc-8c90905d2490" ],
  "sharedWith" : [ "0000000-1111-2222-3333-44444444444" ],
  "firewallRules" : [ {
    "cidrBlock" : "0.0.0.0/0",
    "protocol" : "tcp",
    "fromPort" : 8081,
    "toPort" : 8082
  }, {
    "cidrBlock" : "192.168.1.0/24",
    "protocol" : "tcp",
    "fromPort" : 8091,
    "toPort" : 8092
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

