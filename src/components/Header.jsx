import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowRightOnRectangle, HiCurrencyDollar } from "react-icons/hi2";
import ButtonWithEmojiDiv from "../ui/styledComponents/ButtonWithEmojiDiv";
import { useGlobal } from "../contexts/GlobalContext";

const FlexHeaderDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;

const FlexHeaderTextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledHeader = styled.header`
  background: var(--gradient-default);
  /* background: var(--gradient-default); */
  padding: 1rem 2rem;
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: auto 1fr;
  /* position: fixed; */
  top: 0;
  width: 100%;
`;

const StyledH1 = styled.h1`
  font-weight: 500;
  font-size: 2.6rem;
  letter-spacing: 0.1rem;
  color: white;
`;

const EmojiParagraph = styled.p`
  font-size: 3.8rem;
  animation: move 6s infinite forwards;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes move {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    90% {
      transform: translateY(0);
    }
    15%,
    85% {
      transform: translateY(-2px);
    }
    20%,
    80% {
      transform: translateY(2px);
    }
  }
`;

const UserInfo = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
`;

const LogOutButton = styled.button`
  border: none;
  font-weight: 600;
  background-color: white;
  color: var(--color-blue-700);
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  transition: background 1s;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-family: inherit;

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

function Header() {
  const { isAuthenticated, unAuthenticate } = useGlobal();
  const navigate = useNavigate();
  const { id } = useParams();

  function logOut() {
    unAuthenticate();
    navigate("/");
    toast.success("You have successfully logged out");
  }

  function handleClickTitle() {
    if (isAuthenticated) {
      navigate(`/users/${id}`);
    }
    if (!isAuthenticated) {
      navigate("/");
    }
  }

  return (
    <>
      <StyledHeader>
        <FlexHeaderDiv onClick={handleClickTitle}>
          <FlexHeaderTextDiv>
            <EmojiParagraph>
              <HiCurrencyDollar style={{ color: "white" }} />
            </EmojiParagraph>
            <StyledH1>BudgetMaster</StyledH1>
          </FlexHeaderTextDiv>
        </FlexHeaderDiv>
        <UserInfo>
          {isAuthenticated ? (
            <LogOutButton onClick={logOut}>
              <ButtonWithEmojiDiv>
                <HiArrowRightOnRectangle style={{ flexShrink: "0" }} />
                LOG OUT
              </ButtonWithEmojiDiv>
            </LogOutButton>
          ) : (
            ""
          )}{" "}
        </UserInfo>
      </StyledHeader>
    </>
  );
}

export default Header;
