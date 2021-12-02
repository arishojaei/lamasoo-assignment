# Introduction
Hello Dear Developer, we are so happy that you are going to join us and hope have perfect days.

# Task description
We want you give us an object which helps us to sort our list of strings, please pay attention that we don't want to sort list we want to sort our strings. for instance:

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

you have not to change array elements order


You should implement three functions :

- provideData
- toObject
- vowelsToCapital

#### provideData :
this function provides data to our object

#### toObject

converts our list to object. for example:
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
this functions Capitalize vowels (E, I, O, A, U)

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

And we also want to call these functions any order but provide data always will be called, for example these statements must be equal:

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


