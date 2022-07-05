
console.log("EcmaScript 6");
console.log(" ");


async function getUsers(user) {
    const promises = user.map(user => fetch(`https://api.github.com/users/${user}`).then(r => r.json()));

     const people = await Promise.all(promises);
     console.log(people.map(p => p.name));
     console.log(people.map(p => p.location));
}

getUsers(['lucassb15', 'willianjusten' ]);

