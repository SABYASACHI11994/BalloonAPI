/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      gender
      age
      username
      profilePic
      post {
        items {
          id
          title
          isLive
          isAcive
          likeCount
          shareCount
          createdAt
          updatedAt
        }
        nextToken
      }
      card {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      like {
        items {
          id
          title
          isLive
          isAcive
          likeCount
          shareCount
          createdAt
          updatedAt
        }
        nextToken
      }
      share {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        gender
        age
        username
        profilePic
        post {
          nextToken
        }
        card {
          nextToken
        }
        like {
          nextToken
        }
        share {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      createdBy {
        id
        name
        email
        gender
        age
        username
        profilePic
        post {
          nextToken
        }
        card {
          nextToken
        }
        like {
          nextToken
        }
        share {
          nextToken
        }
        createdAt
        updatedAt
      }
      cards {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      isLive
      isAcive
      likeCount
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      shareCount
      shares {
        items {
          id
          sharedAt
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdBy {
          id
          name
          email
          gender
          age
          username
          profilePic
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        isLive
        isAcive
        likeCount
        likes {
          nextToken
        }
        shareCount
        shares {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
      id
      post {
        id
        title
        createdBy {
          id
          name
          email
          gender
          age
          username
          profilePic
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        isLive
        isAcive
        likeCount
        likes {
          nextToken
        }
        shareCount
        shares {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdBy {
        id
        name
        email
        gender
        age
        username
        profilePic
        post {
          nextToken
        }
        card {
          nextToken
        }
        like {
          nextToken
        }
        share {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          isLive
          isAcive
          likeCount
          shareCount
          createdAt
          updatedAt
        }
        content
        createdBy {
          id
          name
          email
          gender
          age
          username
          profilePic
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      post {
        id
        title
        createdBy {
          id
          name
          email
          gender
          age
          username
          profilePic
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        isLive
        isAcive
        likeCount
        likes {
          nextToken
        }
        shareCount
        shares {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdBy {
        id
        name
        email
        gender
        age
        username
        profilePic
        post {
          nextToken
        }
        card {
          nextToken
        }
        like {
          nextToken
        }
        share {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          isLive
          isAcive
          likeCount
          shareCount
          createdAt
          updatedAt
        }
        createdBy {
          id
          name
          email
          gender
          age
          username
          profilePic
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getShare = /* GraphQL */ `
  query GetShare($id: ID!) {
    getShare(id: $id) {
      id
      sharedAt
      post {
        id
        title
        createdBy {
          id
          name
          email
          gender
          age
          username
          profilePic
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        isLive
        isAcive
        likeCount
        likes {
          nextToken
        }
        shareCount
        shares {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdBy {
        id
        name
        email
        gender
        age
        username
        profilePic
        post {
          nextToken
        }
        card {
          nextToken
        }
        like {
          nextToken
        }
        share {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listShares = /* GraphQL */ `
  query ListShares(
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShares(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sharedAt
        post {
          id
          title
          isLive
          isAcive
          likeCount
          shareCount
          createdAt
          updatedAt
        }
        createdBy {
          id
          name
          email
          gender
          age
          username
          profilePic
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
