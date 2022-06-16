import { sushiClient } from 'fsh-sushi';

var fsh = `Instance: Bundle-5
InstanceOf: Bundle
Usage: #example
* entry.resource = Patient-5
* type = "collection


Instance: Patient-5
InstanceOf: Patient
Usage: #inline
* name.given = "NotEnrolled"
* name.family = "IPFail"
* birthDate = "1971-12-31"
* gender = #female`;

function main() {
    sushiClient.fshToFhir(fsh).then((results) => {
        let a = 0;
        console.log("Successfully converted fsh");
    }).catch((err) => {
        // handle thrown errors
        console.log("error: " + err);
    });
}

main();