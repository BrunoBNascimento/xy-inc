import mongoose from 'mongoose';
import { DomainsService } from '../services/domainsService';

let domainInstance = new DomainsService();

let domains = domainInstance.getDomains();

let schemas = [];

const Schema = mongoose.Schema;

let actualInstanceOfSchema;
for(let i in domains){

    actualInstanceOfSchema = new Schema(domains[i].properties);

    schemas[`${domains[i].domain}`] = actualInstanceOfSchema;
}

export default schemas;