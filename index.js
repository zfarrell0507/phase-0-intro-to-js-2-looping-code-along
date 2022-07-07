  
  const name = ["Guadalupe", "Ollie", "Aki"];
  const event = ("surprise");
  const cards = [];
  function writeCards(name) {
    for (let i = 0; i < name.length; i++) {
        let writing = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        cards.push(writing);
    }

    return cards;
  }

  function countDown() {
  let count = 10;
  while (count >= 0) {
    console.log(count);
    count -= 1;
  }
    return count;
  }