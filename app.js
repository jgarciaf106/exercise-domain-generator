let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.org'];
let domain = [];


for (ext in extension) {
    for (pro in pronoun) {
        for (a in adj) {
            for (n in noun) {
                domain.push(pronoun[pro] + adj[a] + noun[n] + extension[ext]);
            }
        }
    }
}

console.log(domain);