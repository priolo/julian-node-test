# julian-nodes

A TypeScript Node.js library with ESM support and Jest testing.

## Requirements

- Node.js >= 22.0.0

## Installation

```bash
npm install julian-nodes
```

## Usage

```typescript
import { Calculator } from 'julian-nodes';

const calc = new Calculator();
console.log(calc.add(2, 3)); // Output: 5
console.log(calc.subtract(5, 3)); // Output: 2
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

3. Build the library:
```bash
npm run build
```

## License

ISC
