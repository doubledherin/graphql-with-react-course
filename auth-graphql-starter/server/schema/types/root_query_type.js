const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user // Passport.js adds a user object to the request object when a user is authed
      }
    }
  }
});

module.exports = RootQueryType;
