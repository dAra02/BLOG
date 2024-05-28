import { useEffect, useState } from 'react';
import { H2, PrivateContent } from '../../components';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import { ROLE } from '../../constants';
import { checkAccess } from '../../utils';
import { useSelector } from 'react-redux';
import { selectorUserRole } from '../../selectors';
import styled from 'styled-components';

const UserContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRole = useSelector(selectorUserRole);

	const requestServer = useServerRequest();

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(([usersRes, rolesRes]) => {
			if (usersRes.error || rolesRes.error) {
				setErrorMessage(usersRes.error || rolesRes.error);
				return;
			}

			setUsers(usersRes.res);
			setRoles(rolesRes.res);
		});
	}, [requestServer, shouldUpdateUserList, userRole]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</div>
		</PrivateContent>
	);
};

export const Users = styled(UserContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	width: 570px;
	font-size: 18px;
`;
