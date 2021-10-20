// const babelUtils = require('@babel/helper-plugin-utils')

// const declare = babelUtils.declare

// exports.default =  declare((api, options, dirname) => {
//   console.log(params)
//   const t = params.types
//   return {
//     visitor: {  // 访问者
//       BinaryExpression (path) {
//         if (path.node.operator !== '===') return
//         path.node.left = t.identifier('sebmck')
//       }
//     }
//   }
// });

module.exports = function (params) {
  console.log(Object.keys(params))
  const t = params.types
  return {
    visitor: {  // 访问者
      BinaryExpression (path) {
        if (path.node.operator !== '===') return
        path.node.left = t.identifier('sebmck')
        path.node.right = t.identifier('akli')
      }
    }
  }
}