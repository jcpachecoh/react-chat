export const graphcoolEndPoint = 'https://api.graph.cool/simple/v1/cji69nwmg4yux01676gvolt9d';

export const ALL_MESSAGES_QUERY = `
query allMessages {
  allTasks {
      id
      message,
      createdAt
    }
  }
`;