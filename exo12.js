let profile = {name : "Rajaa" , age : 22 , email : "rajaasouini@gmail.com" , isActive : true };
let res = true;

if (
    typeof profile.name !== "string" || 
    profile.name.length === 0 || 
    profile.age <= 0 || 
    typeof profile.isActive !== "boolean"
) {
    res = false;
}

console.log(res); 