const { signToken, AuthenticationError } = require('../utils/auth');

const { User, Post } = require('../models/index');

const resolvers = {
    Query: {
        posts: async () => {
            try {
                return Post.find();
            } catch (err) {
                console.error("Error fetching posts:", err);
            }
        },
        post: async (parent, { postId }) => {
            try {
                return Post.findOne({ _id: postId });
            } catch (err) {
                console.error("Error fetching post:", err);
            }
        },
        users: async () => {
            try {
                return User.find();
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        },
        user: async (parent, { _id }) => {
            try {
                return User.findOne({ _id: _id });
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        },
        items: async () => {
            try {
                return Item.find();
            } catch (err) {
                console.error("Error fetching items:", err);
            }
        },
        item: async (parent, { itemId }) => {
            try {
            return Item.findOne({ _id: itemId })
        } catch (err) {
            console.error("Error fetching item:", err);
        }
    },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }
            const token = signToken(user);
            return { token, user };
        },
        // addGame: async (parent, args) => {
        //     return Game.create(args);
        // },
        addUser: async (parent, args) => {
            const { username, email, password } = args;
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, args) => {
            try {
                return Post.create(args);
            } catch (err) {
                console.error("Error creating post:", err);
            }
        },
        editPost: async (parent, { _id, title, body }) => {
            try {
                return Post.findOneAndUpdate
                    (
                        { _id: _id },
                        { title, body },
                        { new: true }
                    );
            } catch (err) {
                console.error("Error updating post:", err);
            }
        },
        removePost: async (parent, { postId }) => {
            try {
                return Post.findOneAndDelete({ _id: postId });
            } catch (err) {
                console.error("Error deleting post:", err);
            }
        },
        addItems: async (parent, args) => {
            try {
                return Item.create(args);
            } catch (err) {
                console.error("Error creating item:", err);
            }
        },
        editItems: async (parent, { _id, name, price, description, category, quantity }) => {
            try {
            }
            


}
};

module.exports = resolvers;