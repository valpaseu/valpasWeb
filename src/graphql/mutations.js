/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAgreement = /* GraphQL */ `
  mutation CreateAgreement(
    $input: CreateAgreementInput!
    $condition: ModelAgreementConditionInput
  ) {
    createAgreement(input: $input, condition: $condition) {
      id
      name
      workers
      client
      createdAt
      userId
      user {
        userId
        name
        family_name
        icon
      }
      aditionalInfo {
        name
        description
        id
      }
      userAgreement {
        id
        status
      }
      workspaceId
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAgreement = /* GraphQL */ `
  mutation UpdateAgreement(
    $input: UpdateAgreementInput!
    $condition: ModelAgreementConditionInput
  ) {
    updateAgreement(input: $input, condition: $condition) {
      id
      name
      workers
      client
      createdAt
      userId
      user {
        userId
        name
        family_name
        icon
      }
      aditionalInfo {
        name
        description
        id
      }
      userAgreement {
        id
        status
      }
      workspaceId
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAgreement = /* GraphQL */ `
  mutation DeleteAgreement(
    $input: DeleteAgreementInput!
    $condition: ModelAgreementConditionInput
  ) {
    deleteAgreement(input: $input, condition: $condition) {
      id
      name
      workers
      client
      createdAt
      userId
      user {
        userId
        name
        family_name
        icon
      }
      aditionalInfo {
        name
        description
        id
      }
      userAgreement {
        id
        status
      }
      workspaceId
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTasks = /* GraphQL */ `
  mutation CreateTasks(
    $input: CreateTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    createTasks(input: $input, condition: $condition) {
      id
      title
      description
      username
      user {
        userId
        name
        family_name
        icon
      }
      time
      status
      workplace {
        workId
        name
      }
      interval {
        end
        start
      }
      comments {
        title
        comment
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTasks = /* GraphQL */ `
  mutation UpdateTasks(
    $input: UpdateTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    updateTasks(input: $input, condition: $condition) {
      id
      title
      description
      username
      user {
        userId
        name
        family_name
        icon
      }
      time
      status
      workplace {
        workId
        name
      }
      interval {
        end
        start
      }
      comments {
        title
        comment
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTasks = /* GraphQL */ `
  mutation DeleteTasks(
    $input: DeleteTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    deleteTasks(input: $input, condition: $condition) {
      id
      title
      description
      username
      user {
        userId
        name
        family_name
        icon
      }
      time
      status
      workplace {
        workId
        name
      }
      interval {
        end
        start
      }
      comments {
        title
        comment
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTimeEntry = /* GraphQL */ `
  mutation CreateTimeEntry(
    $input: CreateTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    createTimeEntry(input: $input, condition: $condition) {
      id
      description
      userId
      workspaceId
      timeInterval {
        end
        start
      }
      isActive
      isLocked
      isSent
      isConfirmed
      isPaused
      pauseStart
      break {
        id
        reason
        end
        start
      }
      work {
        name
        description
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTimeEntry = /* GraphQL */ `
  mutation UpdateTimeEntry(
    $input: UpdateTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    updateTimeEntry(input: $input, condition: $condition) {
      id
      description
      userId
      workspaceId
      timeInterval {
        end
        start
      }
      isActive
      isLocked
      isSent
      isConfirmed
      isPaused
      pauseStart
      break {
        id
        reason
        end
        start
      }
      work {
        name
        description
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTimeEntry = /* GraphQL */ `
  mutation DeleteTimeEntry(
    $input: DeleteTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    deleteTimeEntry(input: $input, condition: $condition) {
      id
      description
      userId
      workspaceId
      timeInterval {
        end
        start
      }
      isActive
      isLocked
      isSent
      isConfirmed
      isPaused
      pauseStart
      break {
        id
        reason
        end
        start
      }
      work {
        name
        description
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAllWorkSpaces = /* GraphQL */ `
  mutation CreateAllWorkSpaces(
    $input: CreateAllWorkSpacesInput!
    $condition: ModelAllWorkSpacesConditionInput
  ) {
    createAllWorkSpaces(input: $input, condition: $condition) {
      id
      hourlyRate {
        amount
        currency
      }
      imageUrl
      memberships {
        membershipType
        membershipStatus
        userId
        targetId
      }
      name
      workspaceSettings {
        shortBreak
        dinnerBreak
      }
      workers
      adminId
      work {
        name
        description
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAllWorkSpaces = /* GraphQL */ `
  mutation UpdateAllWorkSpaces(
    $input: UpdateAllWorkSpacesInput!
    $condition: ModelAllWorkSpacesConditionInput
  ) {
    updateAllWorkSpaces(input: $input, condition: $condition) {
      id
      hourlyRate {
        amount
        currency
      }
      imageUrl
      memberships {
        membershipType
        membershipStatus
        userId
        targetId
      }
      name
      workspaceSettings {
        shortBreak
        dinnerBreak
      }
      workers
      adminId
      work {
        name
        description
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAllWorkSpaces = /* GraphQL */ `
  mutation DeleteAllWorkSpaces(
    $input: DeleteAllWorkSpacesInput!
    $condition: ModelAllWorkSpacesConditionInput
  ) {
    deleteAllWorkSpaces(input: $input, condition: $condition) {
      id
      hourlyRate {
        amount
        currency
      }
      imageUrl
      memberships {
        membershipType
        membershipStatus
        userId
        targetId
      }
      name
      workspaceSettings {
        shortBreak
        dinnerBreak
      }
      workers
      adminId
      work {
        name
        description
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserCredentials = /* GraphQL */ `
  mutation CreateUserCredentials(
    $input: CreateUserCredentialsInput!
    $condition: ModelUserCredentialsConditionInput
  ) {
    createUserCredentials(input: $input, condition: $condition) {
      id
      userId
      activeTimeEntry
      status
      defaultWorkspace
      memberships {
        membershipStatus
        membershipType
        userId
        targetId
      }
      profile {
        profile_picture
        first_name
        last_name
        email
      }
      formChecked
      settings {
        timeFormat
        timeZone
        dateFormat
        modalSendConfirm
        modalConfirmConfirm
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserCredentials = /* GraphQL */ `
  mutation UpdateUserCredentials(
    $input: UpdateUserCredentialsInput!
    $condition: ModelUserCredentialsConditionInput
  ) {
    updateUserCredentials(input: $input, condition: $condition) {
      id
      userId
      activeTimeEntry
      status
      defaultWorkspace
      memberships {
        membershipStatus
        membershipType
        userId
        targetId
      }
      profile {
        profile_picture
        first_name
        last_name
        email
      }
      formChecked
      settings {
        timeFormat
        timeZone
        dateFormat
        modalSendConfirm
        modalConfirmConfirm
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserCredentials = /* GraphQL */ `
  mutation DeleteUserCredentials(
    $input: DeleteUserCredentialsInput!
    $condition: ModelUserCredentialsConditionInput
  ) {
    deleteUserCredentials(input: $input, condition: $condition) {
      id
      userId
      activeTimeEntry
      status
      defaultWorkspace
      memberships {
        membershipStatus
        membershipType
        userId
        targetId
      }
      profile {
        profile_picture
        first_name
        last_name
        email
      }
      formChecked
      settings {
        timeFormat
        timeZone
        dateFormat
        modalSendConfirm
        modalConfirmConfirm
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
