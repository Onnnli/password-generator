import React, { useState } from 'react';
import { Button, Input } from 'antd';

import GenerateForm from './GenerateForm';

import styles from '../styles/Main.module.css'

const Main = () => {
	const [password, setPassword] = useState();

	const clickHandler = () => {
		navigator.clipboard.writeText(password).then(response => response);
	};

	return (
		<div className={styles.wrapper}>
			<GenerateForm setPassword={setPassword} />
			{password && (
				<div>
					<Input value={password} readOnly />
					<Button type="primary" onClick={clickHandler}>
						Click me!
					</Button>
				</div>
			)}
		</div>
	);
};

export default Main;
