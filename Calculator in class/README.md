**Steps**

` npm init -y`
` tsc --init `

in package.json add:
` "types":"module", `

optional:
 `  "start":"tsc && node index.js" `

in tsconfig.js add:

 `"target": "ES2022"`

` "module": "NodeNext",          `
` "moduleResolution": "NodeNext",`
