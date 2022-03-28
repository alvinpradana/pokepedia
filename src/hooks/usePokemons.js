import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
    query pokemon($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
                url
                name
                image
            }
        }
    }
`;

export const usePokemons = () => {
    const { error, loading, data } = useQuery(GET_POKEMONS, {
        variables: {
            limit: 100,
            offset: 0
        }
    });
    return { error, loading, data };
};
