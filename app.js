let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.org'];

const domainGenerator = (arr1, arr2, arr3, arr4)=>{
    let domain = [];
    arr1.forEach(pronoun => {
        arr2.forEach(adj => {
            arr3.forEach(noun => {
                arr4.forEach(extension => {
                    domain.push(pronoun + adj + noun + extension);
                });
            });
        });
    });
    return  domain;
}

console.log(domainGenerator(pronoun,adj,noun,extension));