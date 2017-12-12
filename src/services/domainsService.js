import fs from 'fs';

export class DomainsService {

    constructor () {

    }

    getDomains(){
        // read file of domains
        let domains = fs.readFileSync(__dirname + '/domains.json', 'utf-8')
        domains = JSON.parse(domains);
        return domains;
    }

    setDomains(newDomain){
        let currentDomains = this.getDomains();

        currentDomains.push(newDomain)

        fs.writeFile(__dirname + '/domains.json', JSON.stringify(currentDomains), function (err) {
            if (err)
                return console.log(err);
            console.log('Server is restarting after changing domains.json');
        });
    }
}