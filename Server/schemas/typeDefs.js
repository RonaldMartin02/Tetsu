const typeDefs = `#graphql
type Auth {
    token: ID!
    user: User
}
type User {
    _id: ID!
    username: String
    email: String
    posts: [Post]
}
type Post {
    _id: ID
    title: String
    body: String
    PostType: String
    postDate: String
    username: String
}
type Item {
    _id: ID
    name: String
    price: Float
    description: String
    category: String
    quantity: Int    
}

type Query {
    posts: [Post]
    post(postId: ID!): Post
    users: [User]
    user(_id: ID!): User
    items: [Item]
    item(itemId: ID!): Item
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth


    addPost( 
        title: String!
        PostType: String!
        body: String!
        username: String!
    ): Post
    editPost(
        _id: ID!
        title: String
        PostType: String
        body: String
        
    ): Post
    removePost(postId: ID!): Post
    
    addItem(
        name: String!
        price: Float!
        description: String!
        category: String!
        quantity: Int!
    ): Item
    editItem(
        _id: ID!
        name: String
        price: Float
        description: String
        category: String
        quantity: Int
    ): Item
    removeItem(itemId: ID!): Item
    }
`;

module.exports = typeDefs;