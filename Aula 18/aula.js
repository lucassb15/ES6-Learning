


var data = {
    name: 'Lucas',
    surname: 'Barbosa',
    age: 25,
    email: 'lucasbarbosa@hotmail.com',
    social: {
        facebook: '/lucas.soares',
        instagram: 'lukas_soares19',
    }
};

    // const name = data.name;
    // const surname = data.surname;
    // const instagram = data.social.instagram;

    // console.log(name);
    // console.log(surname);
    // console.log(instagram);
    

    const { name, surname } = data;

    console.log(name);
    console.log(surname);

    const { facebook, instagram } = data.social;

    console.log(facebook);
    console.log(instagram);

    const { facebook: fb} = data.social;

    console.log(fb);

    const { city = 'Aparecida' } = data;

    console.log(city);

    