import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:3000/graphql',
	documents: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.graphql'],
	generates: {
		'./src/generated/graphql.tsx': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo'
			],
			config: {
				withHooks: true,
				withHOC: false,
				withComponent: false,
			},
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;