# Description
Javascript's deep-copy library and Array/Object is supported

# Installation
```bash
git clone https://github.com/danielsss/js-deep-copy.git
```

# Test
```bash
cd js-deep-copy && npm test
> mocha

  Deep-Copy
    #Array:
      ✓ Array deep copies and should returns an copied array
    #Object:
      ✓ Object deep copies and should returns an copied object


  2 passing (27ms)
```

# How to use it ?
- Run node in shell.
```js
> const DeepCopy = require("./lib");
> let arr = [1, 2, [4, 5], 3];
> const deep = new DeepCopy();
> let arr1 = deep.cleaner.copy(arr); 
// You can use another ways, such as:
// const deep = new DeepCopy(arr);
// deep.cleaner.duplicator
> arr[0] = 10;
> console.log(arr);
[10, 2, [4, 5], 3]
> console.log(arr1);
[1, 2, [4, 5], 3]
> arr[2][0] = 40;
> console.log(arr);
[10, 2, [40, 5], 3]
> console.log(arr1);
[1, 2, [4, 5], 3]
```