build-server: 
	docker build ./server -t node-server:1.0.0
build-client: 
	docker build ./client -t node-client:1.0.0 
build-tgBot: 
	docker build ./tgBot -t node-tgbot:1.0.0 
run: 
	docker-compose up -d
stop: 
	docker-compose down; docker container prune; docker image prune; docker image rm webster_server; docker image rm webster_client; docker image rm webster_bot; docker image rm postgres; docker volume prune; docker volume rm webster_pgdata
server-logs: 
	docker logs --follow node-server
bot-logs: 
	docker logs --follow tgBot
reload: 
	make stop; make run