/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateShare = /* GraphQL */ `
  subscription OnCreateShare {
    onCreateShare {
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
export const onUpdateShare = /* GraphQL */ `
  subscription OnUpdateShare {
    onUpdateShare {
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
export const onDeleteShare = /* GraphQL */ `
  subscription OnDeleteShare {
    onDeleteShare {
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
