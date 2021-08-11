import React, { memo, useCallback } from 'react';
import { Form, Button, Checkbox, Select } from 'antd';
const { Option } = Select;
import generator from "generate-password";

const GenerateForm = ({setPassword}) => {

	const onFinish = useCallback(({length, numbers}) => {
		const passwordGenerator = generator.generate({
			length: length,
			numbers: numbers,
		});
		setPassword(passwordGenerator)
	}, [setPassword]);

	const initialValues = {
		numbers: true, length: '9'
	}

	return (
		<Form
			name="generate"
			initialValues={initialValues}
			onFinish={onFinish}
		>
			<Form.Item
				label="Password length"
				name="length"
			>
				<Select>
					<Option value="9">9</Option>
					<Option value="12">12</Option>
					<Option value="22">22</Option>
					<Option value="32">32</Option>
				</Select>
			</Form.Item>

			<Form.Item name="numbers" valuePropName="checked">
				<Checkbox>Have numbers</Checkbox>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default memo(GenerateForm);
