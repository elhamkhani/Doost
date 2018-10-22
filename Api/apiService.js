import { POST_QUESTION_URL } from './apiUrls';


const PostQuestion = (question) => {
    const uuidv1 = require('uuid/v1');
    const request = new Request(POST_QUESTION_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            "id": uuidv1(),
            "question": question,
            "username": "elham"
        })
    });
    console.log(request);
    call(request);
}

const call = (request) => {
    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(response => {
            console.debug(response);
            // ...
        }).catch(error => {
            console.error(error);
        });
}
export default { PostQuestion }