import styled from "styled-components";

import { Button } from "../components/Button/Button";
import { Product } from "../components/Category/Product/Product";

const ProductsStyled = styled.section`
    padding: 3rem 2rem;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;

const AllProducts = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    margin-top: 1rem;
`;

export function Products() {
    return (
        <ProductsStyled>
            <Header>
                <Title>Todos os Produtos</Title>
                <Button backgroundColor="var(--button-background-color)" color="var(--white-text-color)">Adicionar Produto</Button>
            </Header>

            <AllProducts>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </AllProducts>
        </ProductsStyled>
    );
}
