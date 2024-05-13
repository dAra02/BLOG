import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Button } from '../../../../components';
import styled from 'styled-components';
import { ROLE } from '../../../../constants';
import { selectorUserLogin, selectorUserRole, selectUserSession } from '../../../../selectors';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const StyleIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectorUserRole);
	const login = useSelector(selectorUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<StyleIcon>
							<Icon id="fa-sign-out" margin="0 0 0 10px" onClick={() => dispatch(logout(session))} />
						</StyleIcon>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<StyleIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</StyleIcon>

				<Link to="/post">
					<Icon id="fa-file-text-o" margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
