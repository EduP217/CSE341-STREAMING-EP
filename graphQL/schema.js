module.exports = `
    type Streaming {
        _id: String!
        name: String
        nickname: String
        event: String
        country: String
        "date-scheduled": String
        session: {
            viewers: Int
            followers: Int
            "datetim-start": String
            "datetime-end": String
        }
        status: String
    }

    type Query {
        allStreamings: [Streaming!]!
    }

    type Mutation {
        createStreaming(name: String, nickname: String, event: String)
    }
`;
