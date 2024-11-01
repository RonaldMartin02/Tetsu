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
mutation AddPost($title: String!, $imgLink: String!, $body: String!, $username: String!) {
  addPost(title: $title, imgLink: $imgLink, body: $body, username: $username) {
    imgLink
    _id
    body
    postDate
    title
    username
  }
}
`;
export const EDIT_POST = gql`
mutation EditPost($id: ID!, $body: String, $imgLink: String, $title: String) {
  editPost(_id: $id, body: $body, imgLink: $imgLink, title: $title) {
    imgLink
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
    imgLink
    body
    postDate
    title
    username
  }
}
`;
