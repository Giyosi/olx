import styled from "styled-components";

const CategoryWrapper = styled.div`

.product-img {
    height: 200px !important;
    object-fit: cover !important;
    border-radius: 3px;
}
@media screen and (max-width: 992px) {
    .category__box {
        justify-content: center !important;
    }
}
`;

export default CategoryWrapper;
