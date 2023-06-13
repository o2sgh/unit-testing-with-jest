# Unit Testing
 I am using Jest Testing.

## Snapshot Test
1) Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
2) I want to test my UI of App.tsx file
3) Create file  ('file name') in test folder.
4) Import this in your test file:

```
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
```

5) Add test case for snapshot:
```
test('Snapshot Test', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot();
});
```
6) Run command in terminal

```
yarn test (file name)
```
7) If snapshot and your UI is same it show pass in terminal otherwise its fail.


## Function Logic Test
1) I create a file with name Sum.tsx
2)In this example, I testing a function called addNumbers. This function takes two numbers and returns their sum:
```
const addNumbers = (a, b) => {
return  a + b
};
```
3) This is Sum.tsx file:
```
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// @ts-ignore

const addNumbers = (a, b) => {
return  a + b
};
 
const Sum = () => {
  return (addNumbers(2,3))

}

export default Sum

const styles = StyleSheet.create({})
```

4) Create file  ('file name') in test folder.
5) import addNumbers from your component
6) Add test case in test file:
```
describe('sum', () => {
  it('returns the correct result', () => {
    // @ts-ignore
    const result = addNumbers(2, 3);
    console.log('****************************************',result);
    expect(result).toEqual(5);
  });
});
```
7) Run command in terminal

```
yarn test (file name)
```

8) If actual result and received result is same it show pass in terminal otherwise its fail.

 
