# Introduction
Hello Dear developer, we are so happy that you are going to join us and hope have perfect days together.

# Task description
We want you give us an object which helps us to sort our list of strings. Please pay attention that we don't want to sort the list, we want to sort our strings. For instance:

```bash
input : 
[
  'thisisfirsttest',
  'anotherlongcase',
  '8761o8372@test#',
  '--:)example3233'
]
output: 
[
      'efhiiirsssstttt',
      'aaceeghlnnoorst',
      '#12367788@eostt',
      ')--2333:aeelmpx'
]
```

You shouldn't change the array elements order


You should implement three functions:

- provideData
- toObject
- vowelsToCapital

#### provideData :
This function provides data to our object

#### toObject

Converts our list to object. for example:
```bash
input :
[
  'thisisfirsttest',
  'anotherlongcase',
  '8761o8372@test#',
  '--:)example3233'
]
output:
{
    0: 'efhiiirsssstttt',
    1: 'aaceeghlnnoorst',
    2: '#12367788@eostt',
    3: ')--2333:aeelmpx',
}
```
#### vowelsToCapital
This functions Capitalize vowels (E, I, O, A, U)

```bash
input:
[
  'thisisfirsttest',
  'anotherlongcase',
  '8761o8372@test#',
  '--:)example3233'
]
output
[
    'EfhIIIIrsssstttt',
    'AAcEEghlnnOOrst',
    '#12367788@EOstt',
    ')--2333:AEElmpx'
]
```

And we also want to call these functions any order but provideData always will be called. For example these statements must be equal:

```bash
  const result1 = makeObject().vowelsToCapital().toObject().provideData(data);
  const result2 = makeObject().toObject().vowelsToCapital().provideData(data);

  expect(result1).toStrictEqual(result2);
```

## Installation
```bash
git clone git@git.lamasoo.com:lamasoo/public/lamasoo-assignment.git

npm i

npm run test
```


