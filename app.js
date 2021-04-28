let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io']


let pro = Math.floor(Math.random() * pronoun.length);
let ad = Math.floor(Math.random() * adj.length);
let nou = Math.floor(Math.random() * noun.length);
let exten = Math.floor(Math.random() * extension.length);


console.log(pronoun[pro] + adj[ad] + noun[nou] + extension[exten]);





