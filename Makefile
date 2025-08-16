REPOSITORY=CarlosEduAC
IMAGE=wedding-api
FINAL_URL=${REPOSITORY}/$(IMAGE)
TAG=latest
APP_NAME=wedding-api
AWS_REGION=us-east-1
NODE_ENV=preprod

clean:
	rm -rf node_modules package-lock.json
	npm run clean
	npm run clean:tests

setup:
	npm install

run-local:
	npm run start:dev

run-prod:
	npm run build
	npm run start

test:
	npm run test

unit-test: test

integration-test: test

lint:
	npm run lint
	npm run format

docker-build:
	docker build --no-cache -f ./Dockerfile --build-arg app_name=${APP_NAME} --build-arg -t $(FINAL_URL):$(TAG) .

run-docker: docker-build
	docker run -dp 3000:3000 $(FINAL_URL):latest

generate-swagger:
	npm run swagger:generate
