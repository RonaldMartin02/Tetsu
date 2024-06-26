import { gql } from '@apollo/client';
//Login and User Mutations
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

//POST MUTATIONS
export const ADD_POST = gql`
mutation AddPost($title: String!, $postType: String!, $body: String!, $username: String!) {
  addPost(title: $title, PostType: $postType, body: $body, username: $username) {
    PostType
    _id
    body
    postDate
    title
    username
  }
}
`;
export const EDIT_POST = gql`
mutation EditPost($id: ID!, $body: String, $postType: String, $title: String) {
  editPost(_id: $id, body: $body, PostType: $postType, title: $title) {
    PostType
    body
    postDate
    title
    username
    _id
  }
}
`;
export const REMOVE_POST = gql`
mutation RemovePost($postId: ID!) {
  removePost(postId: $postId) {
    _id
    PostType
    body
    postDate
    title
    username
  }
}
`;

//ITEM MUTATIONS
export const ADD_COMMENT = gql`
mutation AddItem($name: String!, $price: Float!, $description: String!, $category: String!, $quantity: Int!) {
  addItem(name: $name, price: $price, description: $description, category: $category, quantity: $quantity) {
    category
    description
    price
    quantity
    name
  }
}
`;