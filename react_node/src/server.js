var express = require('express');
var cookieparser = require('cookie-parser');
var bodyparser = require('body-parser');
var extsession = require('express-session');
var mysql = require('./db');
var ejs = require('ejs');
var app = express();
var path = require('path');






/* 
nodejs服务器启动文件
*/