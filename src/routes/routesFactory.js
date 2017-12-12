import { DomainsService } from '../services/domainsService';
import mongoose from 'mongoose';
import schemas from "../models/modelsFactory";

let domainInstance = new DomainsService();

let domains = domainInstance.getDomains();

let routes = [];

let ActualSchema;
let actualResource;

for (let i in domains) {

    routes[i] = (app) => {
        app.route(`/${domains[i].domain}`)
            .get((req, res) => {

                // create a schema from domain name
                ActualSchema = mongoose.model(domains[i].domain, schemas[domains[i].domain]);
                ActualSchema.find({}, (err, resource) => {
                    if(err)
                        res.status(400).send(err)
                    res.send(resource);
                })
            })
            .post((req, res) => {

                // create a schema from factory
                ActualSchema = mongoose.model(domains[i].domain, schemas[domains[i].domain]);

                actualResource = new ActualSchema(req.body);

                actualResource.save((err, contact) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.json(contact);
                });

            })

        app.route(`/${domains[i].domain}/:id`)
            .put((req, res) => {
                // create a schema from domain name
                ActualSchema = mongoose.model(domains[i].domain, schemas[domains[i].domain]);

                ActualSchema.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true }, (err, resource) =>{
                    if(err)
                        res.status(400).send(err)
                    res.send(resource);
                });
            })
            .get((req, res) => {
                // create a schema from domain name
                ActualSchema = mongoose.model(domains[i].domain, schemas[domains[i].domain]);

                ActualSchema.findById(req.params.id, (err, resource) => {
                    if(err)
                        res.status(400).send(err)
                    res.send(resource);
                })

            })
            .delete((req, res) => {
                // create a schema from domain name
                ActualSchema = mongoose.model(domains[i].domain, schemas[domains[i].domain]);

                ActualSchema.findOneAndRemove( { _id: req.params.id }, (err, resource) => {
                    if(err)
                        res.status(400).send(err)
                    res.status(204).send(' ')
                });
            })
    }

}

export default routes;