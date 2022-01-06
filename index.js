import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

const root = {
    friend: () => {
        return {
            "id": 5658489489,
            "firstName": "Rahas",
            "lastName": "Das",
            "gender": "Male",
            "email": "rahas@gmail.com"
        }
    }
};

app.get('/', (req, res) => {
    res.send('Graphql is amazing!');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
