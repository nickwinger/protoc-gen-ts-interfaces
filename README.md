
# Protobuf-TS-Interfaces

[![License](https://img.shields.io/github/license/bufbuild/protobuf-es?color=blue)](./LICENSE)  

Generates Typescript Interfaces form ProtoBuf Files.
Useful for typing the from and to Json methods.
So if you want to serialize the JS/TS-ProtoBuf-Classes to and from json you now can typesafe the json files, not only the classes.
Needed in frontend-development where e.g. the state/store has to be serializable.
## TypeScript

The generated code is compatible with TypeScript **v4.1.2** or later, with the default compiler settings.


## Copyright

The [code to encode and decode varint](packages/protobuf/src/google/varint.ts) is Copyright 2008 Google Inc., licensed 
under BSD-3-Clause.  
All other files are licensed under Apache-2.0, see [LICENSE](LICENSE).
