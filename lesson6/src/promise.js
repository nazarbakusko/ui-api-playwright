fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => printJson(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

function printJson(data) {
    console.log(data);
}
