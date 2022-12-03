const ABI = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'DaoName',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_addr',
				type: 'address',
			},
		],
		name: 'addBalance',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_addr',
				type: 'address',
			},
		],
		name: 'addRepresentative',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'checkBalance',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_msg',
				type: 'string',
			},
		],
		name: 'createRequestForProposal',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'createSnapShot',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'getAProposal',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: '_id',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: '_msg',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: '_yes',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: '_no',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: '_passed',
						type: 'bool',
					},
				],
				internalType: 'struct Proposal',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'getASnapShot',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: '_id',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: '_msg',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: '_yes',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: '_no',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: '_passed',
						type: 'bool',
					},
				],
				internalType: 'struct Proposal',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAllProposals',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: '_id',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: '_msg',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: '_yes',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: '_no',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: '_passed',
						type: 'bool',
					},
				],
				internalType: 'struct Proposal[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAllSnapShots',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: '_id',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: '_msg',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: '_yes',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: '_no',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: '_passed',
						type: 'bool',
					},
				],
				internalType: 'struct Proposal[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'idProposal',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'idSnapShot',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'representative',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_vote',
				type: 'bool',
			},
		],
		name: 'voteOnAProposal',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_vote',
				type: 'bool',
			},
		],
		name: 'voteOnASnapShot',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];

export default ABI;
