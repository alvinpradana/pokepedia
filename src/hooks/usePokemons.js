import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
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
    const { error, loading, data } = useQuery(GET_POKEMONS);
    return { error, loading, data };
};
