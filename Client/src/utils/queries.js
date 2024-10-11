import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
    query Posts {
  posts {
    imgLink
    _id
    body
    postDate
    title
    username
  }
}
    `;

export const GET_POST = gql`
query Post($postId: ID!) {
  post(postId: $postId) {
    body
    postDate
    imgLink
    title
    username
    _id
  }
}
`;
export const GET_ME = gql`
query me {
  me {
    _id
    username
    email
    posts {
      _id
      title
      body
      postDate
    }
  }
}
`;