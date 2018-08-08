const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString
} = GraphQL

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
})

module.exports = UserType
