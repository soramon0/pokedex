import { useState } from 'react';
import { useLocalization } from '../context/Localization';

type TouchState = {
	[key: string]: boolean
}

function useForm<T>(state: T, validate: any) {
	const { t } = useLocalization();
	const [values, setValues] = useState<T>(state);
	const [errors, setErrors] = useState<T>(state);
	const [touched, setTouched] = useState(() => {
		const touchState: TouchState = {};
		
		Object.keys(state).forEach((key) => touchState[key] = false);

		return touchState
	});

	const handleChange = (key: string) => {
		return (text: string) => {
			if (!touched[key]) {
				setTouched({ ...touched, [key]: true });
			}
			setValues({ ...values, [key]: text });
		};
	};

	const handleBlur = (key: string) => {
		return async () => {
			const errs = await validate(values, t);

			setErrors({ ...errors, [key]: errs[key] });

			if (touched[key] && errs[key]) {
				setTouched({ ...touched, [key]: false });
			}
		};
	};

	const handleCheckbox = (key: string) => {
		return () => {
			setValues((state) => ({
				...state,
				// @ts-ignore
				[key]: !state[key],
			}));
		};
	};

	const done = (cb: () => void) => {
		// if we pass validation when submitting then
		// call the function passed by the user
		return async () => {
			const errObject = await validate(values, t)
			setErrors(errObject);
	
			if (Object.values(errObject).length === 0) {
				if (typeof cb === 'function') cb();
			}
		}
	};

	return {
		values,
		touched,
		errors,
		setErrors,
		handleChange,
		handleBlur,
		handleCheckbox,
		done
	};
}

export default useForm;
