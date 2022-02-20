//import {axios} from 'axios'
var http = require('http')

export const campaigns = await http.get('http://147.182.129.43:8080/api/queryAll');