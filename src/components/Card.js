import { StyledCard } from "./Styled/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
    return (
        <StyledCard index={id}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt={title} />
            </div>
        </StyledCard>
    );
}
