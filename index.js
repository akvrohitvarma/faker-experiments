const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 3000;

function getData() {
    const randomName = faker.name.findName();
    const randomEmail = faker.internet.email();
    const randomPhoneNumber = faker.phone.phoneNumber();

    var data = {
        'name':randomName,
        'email':randomEmail,
        'phone':randomPhoneNumber
    }
    return data;
}

app.get('/', (req, res) => {
  res.send(getData());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})