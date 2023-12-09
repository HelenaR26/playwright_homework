const axios = require("axios");
const { expect } = require("chai");

describe('Requests for jsonplaceholder.typicode.com', async () => {
    let baseUrl = "https://jsonplaceholder.typicode.com";
    let userId;

    it("Create post", async () => {
        const createPost = await axios.post(`${baseUrl}/posts`,
            JSON.stringify({
                title: 'Test',
                body: 'This is testing post',
                userId: 1,
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        console.log(createPost.data)
        expect(createPost.status).equal(201)
        console.log(createPost.status)
        userId = createPost.data.userId
    })

    it('Update post', async () => {
        const updatePost = await axios.put(`${baseUrl}/posts/${userId}`,
            JSON.stringify({
                id: 1,
                title: 'Updated post',
                body: 'This is updated post',
                userId: 1,
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        console.log(updatePost.data)
        expect(updatePost.status).equal(200)
        console.log(updatePost.status)
    })

    it("Get post", async () => {
        const getPost = await axios.get(`${baseUrl}/posts/${userId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        expect(getPost.status).equal(200)
        console.log(getPost.status)

    })
})