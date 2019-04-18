const fs = require('fs');

function save(data){
  return new Promise((resolve, reject) => {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Gets all quotes
 * @param None
 */
function getPersons(){
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

async function getPerson(id){
  const quotes = await getQuotes();
  return quotes.records.find(record => record.id == id);
}


async function createPerson(newPerson) {
  const quotes = await getQuotes(); 
  
  personsdata.push(newPerson);
  await save(persons); 
  return newPerson; 
}

async function updatePerson(newPerson){
  const persons = await getPerson();
  let person = persons.data.find(item => item.id == newPerson.id);
  
  quote.quote = newQuote.quote;
  quote.author = newQuote.author;
  quote.year = newQuote.year;
 
  await save(quotes);
}

/**
 * Deletes a single record
 * @param {Object} record - Accepts record to be deleted. 
 */
async function deleteQuote(record){
  const quotes = await getQuotes();
  quotes.records = quotes.records.filter(item => item.id != record.id);
  await save(quotes);
}

module.exports = {
  getPersons,
  getPerson, 
  createPerson, 
  updateQuote, 
  deleteQuote,
}
