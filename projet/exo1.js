let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

/*function countActiveUsers(users) {
    let nbr = 0;
     for (user of users)
     {
         if(user.isActive === true){
            nbr = nbr + 1;
         }
     }
     return nbr;
}
function hasBlueEyes(activeUsers) {
    let nbr1 = 0;
    for (user of users)
    {
        if(user.eyeColor === "blue" && user.isActive === true){
            nbr1 = nbr1 + 1;
        }
    }
    return nbr1;
}

console.log(`Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(users)} have blue eyes.`);*/

/*
function getActiveUsers(users) {
    let tab = []; // création d'un tableau
        for (let i = 0; i< users.length; i++)
        {
            if(users[i].isActive === true)
            {
                tab.push(users[i]);
            }
        }
        console.log(users);
        return tab;
}

function getActiveUsersAges(users) {
    let tab = [];
        for (let i = 0; i< users.length; i++)
        {
            
                tab.push(users[i].age);
        }
        console.log(users);
        return tab;
}


function computeActiveUsersAverageAge(ages) {
    console.log("avant age");
    console.log(ages);
    let total = 0
        for (let i = 0; i < ages.length; i++)
        {
            total = total + ages[i];
            console.log(total);
           
        }
        console.log(ages.length);
        total = total / ages.length;
        return total;
}

console.log(`Out of our currently ${getActiveUsers(users).length} active users, the average age is ${computeActiveUsersAverageAge(getActiveUsersAges(getActiveUsers(users)))}.`);
getActiveUsers(users) 
getActiveUsersAges(getActiveUsers(users))
computeActiveUsersAverageAge(getActiveUsersAges(getActiveUsers(users)))
*/

/*function getMultronUsers(users) {
    let multi = [];
    for( let i = 0; i < users.length; i++)
    {
        if(users[i].company === "MULTRON"){
            multi.push(users[i].users);
        }
    }
    return multi;
}

function setMultronToCenturia(users) {

}

console.log(`${getMultronUsers(users).length} user companies have been changed from MULTRON to CENTURIA.`);*/

/*function getBrownEyedUsers(users) {
 let multr = [];
 for (let i = 0; i < users.length; i++)
 {
     if(users[i].eyeColor === "brown" && users[i].company !== "CENTURIA"){
         multr.push(users[i].users);
     }
 }
 return multr
}

function excludeCenturiaWorkers(users) {

}

console.log(`${getBrownEyedUsers(users).length} users with brown eyes do not work at CENTURIA`);*/




function getBrownEyedUsers(users) {
 let multr = [];
 for (let i = 0; i < users.length; i++)
 {
     if(users[i].eyeColor === "brown" && users[i].isActive === true){
         multr.push(users[i].users);
     }
 }
 return multr;
}
console.log(users);
/*console.log(`Out of our brown eyed users ${getBrownEyedUsers(users).length} are active and ${} are inactive`);

console.log(`Out of our green eyed users ${} are active and ${} are inactive`);

console.log(`Out of our blue eyed users ${} are active and ${} are inactive`);
*/