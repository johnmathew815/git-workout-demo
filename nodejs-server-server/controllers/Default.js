'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const {postVpc,getVpc,deleteVpc} = require('./implementation')


module.exports.organisationOrgidVpcGET = function organisationOrgidVpcGET (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var orgid = req.swagger.params['orgid'].value;
  Default.organisationOrgidVpcGET(username,password,orgid)
    .then(function (response) {
      getVpc(username,password,orgid)

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organisationOrgidVpcPOST = function organisationOrgidVpcPOST (req, res, next) {

  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var orgid = req.swagger.params['orgid'].value;
  var generated = req.swagger.params['generated'].value;
  Default.organisationOrgidVpcPOST(username,password,orgid,generated)
    .then(function (response) {
      postVpc(username,password,generated,orgid)
      //console.log(generated)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organisationOrgidVpcVpcidDELETE = function organisationOrgidVpcVpcidDELETE (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var orgid = req.swagger.params['orgid'].value;
  var vpcid = req.swagger.params['vpcid'].value;
  Default.organisationOrgidVpcVpcidDELETE(username,password,orgid,vpcid)
    .then(function (response) {
      deleteVpc(username,password,orgid,vpcId)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organisationOrgidVpcVpcidPUT = function organisationOrgidVpcVpcidPUT (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var orgid = req.swagger.params['orgid'].value;
  var vpcid = req.swagger.params['vpcid'].value;
  var generated = req.swagger.params['generated'].value;
  Default.organisationOrgidVpcVpcidPUT(username,password,orgid,vpcid,generated)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
