"use strict";

var _require = require('graphql'),
    GraphQLObjectType = _require.GraphQLObjectType,
    GraphQLString = _require.GraphQLString,
    GraphQLInt = _require.GraphQLInt,
    GraphQLSchema = _require.GraphQLSchema,
    GraphQLList = _require.GraphQLList,
    GraphQLNonNull = _require.GraphQLNonNull;

var axios = require('axios'); // const customers = [
//   { id: '1', name: 'John Doe', email: 'jondoe@gmail.com', age: 35 },
//   { id: '2', name: 'Dara Doe', email: 'daradoe@gmail.com', age: 24 },
//   { id: '3', name: 'Sara Doe', email: 'saradoe@gmail.com', age: 23 },
// ];


var CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: function fields() {
    return {
      id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      age: {
        type: GraphQLInt
      }
    };
  }
});
var RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: function resolve(parentValue, args) {
        // return customers.filter((c) => c.id == args.id)[0];
        return axios.get("http://localhost:3000/customers/".concat(args.id)).then(function (res) {
          return res.data;
        });
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve: function resolve(parentValue, args) {
        return axios.get("http://localhost:3000/customers").then(function (res) {
          return res.data;
        });
      }
    }
  }
});
var mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCustomer: {
      type: CustomerType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: function resolve(parentValue, args) {
        return axios.post("http://localhost:3000/customers", {
          name: args.name,
          email: args.email,
          age: args.age
        }).then(function (res) {
          return res.data;
        });
      }
    },
    deleteCustomer: {
      type: CustomerType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: function resolve(parentValue, args) {
        return axios["delete"]("http://localhost:3000/customers/".concat(args.id)).then(function (res) {
          return res.data;
        });
      }
    },
    editCustomer: {
      type: CustomerType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
        name: {
          type: GraphQLString
        },
        email: {
          type: GraphQLString
        },
        age: {
          type: GraphQLInt
        }
      },
      resolve: function resolve(parentValue, args) {
        return axios.put("http://localhost:3000/customers/".concat(args.id), args).then(function (res) {
          return res.data;
        });
      }
    }
  }
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation
});