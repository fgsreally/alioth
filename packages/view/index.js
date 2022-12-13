const ts = require('typescript')

const filename = './input.ts'
const program = ts.createProgram([filename], {}) // 第二个参数是 compiler options，就是配置文件里的那些

const sourceFile = program.getSourceFile(filename)

const typeChecker = program.getTypeChecker()

const { transformed } = ts.transform(sourceFile, [
  function (context) {
    return function (node) {
      return ts.visitNode(node, visit)
      function visit(node) {
        ts.isVariableDeclaration(node) && console.log(node.name.escapedText)

        return ts.visitEachChild(node, visit, context)
      }
    }
  },
])

const printer = ts.createPrinter()

const code = printer.printNode(false, transformed[0], transformed[0])

