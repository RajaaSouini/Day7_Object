let scores = {math : 90 , art : 70 , sport : 85};
let subjects = ["math" , "art" , "sport"];


for( i = 0 ; i < subjects.length ; i++){
    console.log(subjects[i] , scores[subjects[i]]);
}


/*

for( i = 0 ; i < subjects.length ; i++){
    let res;
    if(subjects[i] in scores){
        res = scores[subjects[i]];
    }
    console.log(subjects[i] , res);
} */