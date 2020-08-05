/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createShare = /* GraphQL */ `
  mutation CreateShare(
    $input: CreateShareInput!
    $condition: ModelShareConditionInput
  ) {
    createShare(input: $input, condition: $condition) {
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
export const updateShare = /* GraphQL */ `
  mutation UpdateShare(
    $input: UpdateShareInput!
    $condition: ModelShareConditionInput
  ) {
    updateShare(input: $input, condition: $condition) {
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
export const deleteShare = /* GraphQL */ `
  mutation DeleteShare(
    $input: DeleteShareInput!
    $condition: ModelShareConditionInput
  ) {
    deleteShare(input: $input, condition: $condition) {
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
