/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
  Forc version: 0.60.0
  Fuel-Core version: 0.26.0
*/



import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

import type { Option, Enum } from "./common";

export enum InitErrorInput { BytecodeRootAlreadySet = 'BytecodeRootAlreadySet', BytecodeRootDoesNotMatch = 'BytecodeRootDoesNotMatch', BytecodeRootNotSet = 'BytecodeRootNotSet', PairDoesNotDefinePool = 'PairDoesNotDefinePool' };
export enum InitErrorOutput { BytecodeRootAlreadySet = 'BytecodeRootAlreadySet', BytecodeRootDoesNotMatch = 'BytecodeRootDoesNotMatch', BytecodeRootNotSet = 'BytecodeRootNotSet', PairDoesNotDefinePool = 'PairDoesNotDefinePool' };

export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type RegisterPoolEventInput = { asset_pair: [AssetIdInput, AssetIdInput], pool: ContractIdInput };
export type RegisterPoolEventOutput = { asset_pair: [AssetIdOutput, AssetIdOutput], pool: ContractIdOutput };
export type SetExchangeBytecodeRootEventInput = { root: string };
export type SetExchangeBytecodeRootEventOutput = SetExchangeBytecodeRootEventInput;

const abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum InitError",
      "components": [
        {
          "name": "BytecodeRootAlreadySet",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BytecodeRootDoesNotMatch",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BytecodeRootNotSet",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "PairDoesNotDefinePool",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        5
      ]
    },
    {
      "typeId": 5,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct AssetId",
      "components": [
        {
          "name": "bits",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct RegisterPoolEvent",
      "components": [
        {
          "name": "asset_pair",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "pool",
          "type": 7,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct SetExchangeBytecodeRootEvent",
      "components": [
        {
          "name": "root",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "asset_pair",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "pool",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "add_pool",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "exchange_bytecode_root",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "initialize",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset_pair",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "pool",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 7,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "13019369090464841419",
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": "15462583148427426590",
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": "15355147761263664737",
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ed",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ee",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class AMMContractInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    add_pool: FunctionFragment;
    initialize: FunctionFragment;
    pool: FunctionFragment;
  };
}

export class AMMContract extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: AMMContractInterface;
  declare functions: {
    add_pool: InvokeFunction<[asset_pair: [AssetIdInput, AssetIdInput], pool: ContractIdInput], void>;
    initialize: InvokeFunction<[exchange_bytecode_root: ContractIdInput], void>;
    pool: InvokeFunction<[asset_pair: [AssetIdInput, AssetIdInput]], Option<ContractIdOutput>>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
