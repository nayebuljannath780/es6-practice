const person = { name: "Nayeb", phone: 01751708920, fbId: "NJ Showrav", job: "webDevolopre", address: "Sylhet" };
const { phone, job, address } = person;

// console.log(phone, job, address);

const complexObject = {
    name: "abcd",
    info: {
        address: "longi para",
        leader: "tiger"
    }
}
const {leader} = complexObject.info;
console.log(leader);


const friends = ["Nayeb", "Jannath", "Chowdhury", "Showrav", "Mahi", "Faysol", "Kamran", "Tasnim", "Fahad"];
const [friend1, friend2, friend3, ...olderFriend] = friends;
// console.log(olderFriend);