module.exports = {
    Query: {
        allStreamings: async (obj, args, { Streaming }) => {
            const streamings = await Streaming.find();
            return streamings.map((x) => x._id = x._id.toString())
        },
    },
    Mutation: {
        createStreaming: async (parent, args, { Streaming }) => {
            const streaming = await new Streaming(args).save();
            streaming._id = streaming._id.toString()
            return streaming;
        }
    }
}