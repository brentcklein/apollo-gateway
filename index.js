import apollo from "apollo-server"
const { ApolloServer } = apollo
import g from "@apollo/gateway"
const { ApolloGateway } = g

const gateway = new ApolloGateway({
    serviceList: [
        { name: 'template', url: 'http://localhost:5000'},
        { name: 'users', url: 'http://localhost:8000' }
    ]
});

const server = new ApolloServer({ gateway, 'subscriptions': false });
server.listen(8001);
