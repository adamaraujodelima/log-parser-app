# Log parser app

Develop the command line node.js application, which parses the input log file. 
The application should find all the log messages with the level error and print them into the output file. Formats of input and outfit files are described below.

### Requirements:
- TypeScript project.
- Designed in accordance with OOD principles (DRY, SLAP, SOLID, etc).
- Unit-testing ready (or partially covered by tests)
- Flexibility of the architecture. Application should be easy to extend and modify.

### Usage:
> node parser.js --input ./app.log --output ./errors.json

## Input
Format: <ISO Date> - <Log Level> - {"transactionId: "<UUID>", "details": "<message event/action description>", "err": "<Optionall, error description>", ...<additional log information>}

### Example

2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}
2021-08-09T02:12:51.254Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"About to request the user information","userId": 10}
2021-08-09T02:12:51.254Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"About to request user orders list","userId": 10}
2021-08-09T02:12:51.255Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"Service is started"}
2021-08-09T02:12:51.257Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"About to request the user information","userId": 16}
2021-08-09T02:12:51.257Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"User information is gathered","user":{"id":10,"name":"Alice"}}
2021-08-09T02:12:51.258Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"About to request user orders list","userId":16}
2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}
2021-08-09T02:12:51.259Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"User information is retrieved","user": {"id": 16, "name": "Michael"}}
2021-08-09T02:12:51.262Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"User information is retrieved","user":{"id":16,"orders":[{"id":472,"items":{"id":7,"price":7.12}}]}}
2021-08-09T02:12:51.264Z - warn - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service finished with error","code":404,"err":"Cannot find user orders list"}
2021-08-09T02:12:51.265Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"Service is successfully finished"}

## Output

Format: [{"timestamp": <Epoch Unix Timestamp>, "loglevel": "<loglevel>", "transactionId: "<UUID>", "err": "<Error message>" }]

### Example
[{"timestamp":1628475171259,"loglevel":"error","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","err":"Not found"}]


# Setup

## Requirements using Docker

- Docker (https://docs.docker.com/engine/install/)
- Docker compose (https://docs.docker.com/compose/install/)

## Requirements without Docker

- NodeJS 14 or higher (https://nodejs.org/en/)
- NPM (Installed by NodeJS) or Yarn (https://classic.yarnpkg.com/en/docs/install)

## Installing with Docker

```bash
git clone git@github.com:adamaraujodelima/log-parser-app.git
cd log-parser-app && docker-compose up -d
docker exec logparserapp sh -c "cd /app && yarn && yarn tsc"
```

## Installing without docker

```bash
git clone git@github.com:adamaraujodelima/log-parser-app.git
cd log-parser-app && yarn && yarn tsc
```

# Usage

## Runing with docker

### Running tests
```bash
docker exec logparserapp sh -c "cd /app && yarn test" 
```

### Running parser
```bash
docker exec logparserapp sh -c "cd /app && node dist/parser.js --input {directory_of_file} --output {directory_with_name_fle}"
```
## Runing without Docker

### Running tests
```bash
yarn test 
```

### Running parser
```bash
node dist/parser.js --input {directory_of_file} --output {directory_with_name_fle}
```