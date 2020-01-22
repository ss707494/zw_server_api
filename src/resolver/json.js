import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

function parseObject(ast, variables) {
  const value = Object.create(null);
  ast.fields.forEach(field => {
    // eslint-disable-next-line no-use-before-define
    value[field.name.value] = parseLiteral(field.value, variables);
  });

  return value;
}

function parseLiteral(ast, variables) {
  switch (ast.kind) {
    case Kind.STRING:
    case Kind.BOOLEAN:
      return ast.value;
    case Kind.INT:
    case Kind.FLOAT:
      return parseFloat(ast.value);
    case Kind.OBJECT:
      return parseObject(ast, variables);
    case Kind.LIST:
      return ast.values.map(n => parseLiteral(n, variables));
    case Kind.NULL:
      return null;
    case Kind.VARIABLE: {
      const name = ast.name.value;
      return variables ? variables[name] : undefined;
    }
    default:
      return undefined;
  }
}

export default {
  JSON: new GraphQLScalarType({
    name: 'JSON',
    description: 'The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
    parseValue(value) { // value from the client
      return JSON.stringify(value)
    },
    serialize(value) { // value sent to the client
      return JSON.parse(value)
    },
    parseLiteral,
  }),
}
