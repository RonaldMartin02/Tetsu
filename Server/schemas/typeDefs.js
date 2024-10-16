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
    imgLink: String
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
type Show{
    _id: ID
    showDate: String
    showTime: String
    showLocation: String
    showName: String
    showPrice: Float
    results: [Match]
}
type Match{
    _id: ID
    matchType: String
    wrestlers: [Wrestler]
    matchWinner: String
    videoId: String
}
type Wrestler{
    _id: ID
    wrestlerName: String
}

type Query {
    posts: [Post]
    post(postId: ID!): Post
    users: [User]
    user(_id: ID!): User
    items: [Item]
    item(itemId: ID!): Item
    shows: [Show]
    show(showId: ID!): Show
    matches: [Match]
    match(matchId: ID!): Match
    wrestlers: [Wrestler]
    wrestler(wrestlerId: ID!): Wrestler
    }
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth


    addPost( 
        title: String!
        imgLink: String!
        body: String!
        username: String!
    ): Post
    editPost(
        _id: ID!
        title: String
        imgLink: String
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

    addShow(
        showDate: String!
        showTime: String!
        showLocation: String!
        showName: String!
        showPrice: Float!
    ): Show
    editShow(
        _id: ID!
        showDate: String
        showTime: String
        showLocation: String
        showName: String
        showPrice: Float
    ): Show
    removeShow(showId: ID!): Show
    addMatch(matchType: String!, wrestlers: [String], matchWinner: String!, videoId: String!): Match
    editMatch(_id: ID!, matchType: String, wrestlers: [String], matchWinner: String, videoId: String): Match
    removeMatch(matchId: ID!): Match
    addWrestler(wrestlerName: String!): Wrestler
    editWrestler(_id: ID!, wrestlerName: String): Wrestler
    removeWrestler(wrestlerId: ID!): Wrestler
    }

`;

module.exports = typeDefs;