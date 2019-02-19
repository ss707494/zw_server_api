import { getUserCollection } from '../db/user'

export const typeDefs = `
  type User {
    name: String
    id: String
  }
  
  type Query {
    allUser: [User]
    oneUser: User
  }
`;

export const resolvers = {
  Query: {
    oneUser: async () => {
      return {name: 'test'}
    },
    allUser: async () => {
      const res = await getUserCollection().find().toArray();
      return res
    }
  },
}
