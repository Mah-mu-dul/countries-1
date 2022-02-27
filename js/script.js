const names = () => {
    fetch('https://randomuser.me/api/?results=5000 ')
    .then(res => res.json())
    .then(data => displayData(data))
}
names()

const displayData = buddy => {
    console.log(buddy.results);
}