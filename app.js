let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io']

// let pro = Math.floor(Math.random() * pronoun.length);
// let ad = Math.floor(Math.random() * adj.length);
// let nou = Math.floor(Math.random() * noun.length);
// let exten = Math.floor(Math.random() * extension.length);

for (let i = 0; i < pronoun.length; i++){
    for (let j = 0; j < adj.length; j++){
        for (let g = 0; g < noun.length; g++){
            for (let e = 0; e < extension.length; e++){
                console.log(pronoun[i] + adj[j] + noun[g] + extension[e]);

            }
        }
    }
    
}






