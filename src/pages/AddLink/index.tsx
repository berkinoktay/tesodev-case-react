import ErrorToast from 'components/errorToast';
import SearchInput from 'components/search';
import TesodevButton from 'components/tesodevButton';
import { setRecords } from 'redux/slices/records';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
interface IFormValues {
    name_surname: string;
    company: string;
    country: string;
    city: string;
    email: string;
}
interface IFormErrors {
    name_surname?: string | boolean;
    company?: string | boolean;
    country?: string | boolean;
    city?: string | boolean;
    email?: string | boolean;
}
const AddLink = () => {
    const initialValues = { name_surname: '', company: '', country: '', city: '', email: '' };
    const [formValues, formSetValues] = useState<IFormValues>(initialValues);
    const [errors, setErrors] = useState<IFormErrors>(initialValues);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (value !== " ") {
            formSetValues({ ...formValues, [name]: value });
            validate(name, value)

        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) {
            const name_surname = formValues.name_surname.trim();
            const company = formValues.company.trim();
            const country = formValues.country.trim();
            const city = formValues.city.trim();
            const email = formValues.email.trim();
            const name_surname_words = name_surname.split(" ");

            console.log(name_surname_words);
            if (name_surname_words.length < 2) {
                setShowToast(true)

            } else {
                const records = JSON.parse(localStorage.getItem("recordsData") || "[]");
                const currentDate = new Date();
                const recordDate = `${currentDate.getDate()}/${(currentDate.getMonth() + 1).toLocaleString().length === 1 ? '0' : ''}${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
                localStorage.setItem("recordsData", JSON.stringify([...records, { name_surname, company, country, city, email, date: recordDate }]));
                formSetValues(initialValues);
            }
        }
    }

    useEffect(() => {
        const errorArr = [...Object.values(errors)]
        if (errorArr.length > 0 && errorArr.every((item) => item === true)) {
            setIsSubmitting(true);

        } else {
            setIsSubmitting(false);
        }
    }, [errors]);

    useEffect(() => {
        if (showToast) {
            setTimeout(() => {
                setShowToast(false)
            }, 3000);
        }
    }, [showToast])

    const validate = (name: string, value: string) => {
        const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        switch (name) {
            case 'name_surname':
                if (!(value.length >= 4 && value.length <= 60) && value !== '') {
                    setErrors({ ...errors, name_surname: 'Name and surname must be between 4 and 60 characters' })
                } else if (!value) {
                    setErrors({ ...errors, name_surname: 'Name and surname is required' })
                } else {
                    setErrors({ ...errors, name_surname: true })
                }

                break;
            case 'company':
                if (!(value.length >= 2 && value.length <= 40) && value !== '') {
                    setErrors({ ...errors, company: 'Company must be between 2 and 40 characters' })

                } else if (!value) {
                    setErrors({ ...errors, company: 'Company is required' })
                }
                else {
                    setErrors({ ...errors, company: true })
                }

                break;
            case 'country':
                if (!(value.length >= 2 && value.length <= 40) && value !== '') {
                    setErrors({ ...errors, country: 'Country must be between 2 and 40 characters' })

                } else if (!value) {
                    setErrors({ ...errors, country: 'Country is required' })
                }
                else {
                    setErrors({ ...errors, country: true })
                }


                break;
            case 'city':
                if (!(value.length >= 2 && value.length <= 40) && value !== '') {

                    setErrors({ ...errors, city: 'City must be between 2 and 40 characters' })

                } else if (!value) {
                    setErrors({ ...errors, city: 'City is required' })
                }
                else {
                    setErrors({ ...errors, city: true })
                }



                break;
            case 'email':
                if (!mailRegex.test(value) && value !== '') {
                    setErrors({ ...errors, email: 'Email is not valid' })

                } else if (!value) {
                    setErrors({ ...errors, email: 'Email is required' })
                }
                else {
                    setErrors({ ...errors, email: true })
                }

                break;
            default:
                break;
        }

    }

    return (
        <>
            <div className='container'>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={!!errors.name_surname && errors.name_surname !== true ? styles.errorBox : ''}>
                        <span>Name Surname</span>
                        <SearchInput name='name_surname' showIcon={false} placeholder={'Enter name and surname'} className={`${styles.inputBox}`} value={formValues.name_surname} onChange={handleChange} />
                        {!!errors.name_surname && errors.name_surname !== true && <span className={styles.error}>{errors.name_surname}</span>}
                    </label>
                    <label className={!!errors.company && errors.company !== true ? styles.errorBox : ''}>
                        <span>Company</span>
                        <SearchInput name='company' showIcon={false} placeholder={'Enter a company'} className={styles.inputBox} value={formValues.company} onChange={handleChange} />
                        {!!errors.company && errors.company !== true && <span className={styles.error}>{errors.company}</span>}
                    </label>
                    <label className={!!errors.country && errors.country !== true ? styles.errorBox : ''}>
                        <span>Country</span>
                        <SearchInput name='country' showIcon={false} placeholder={'Enter a country'} className={styles.inputBox} value={formValues.country} onChange={handleChange} />
                        {!!errors.country && errors.country !== true && <span className={styles.error}>{errors.country}</span>}
                    </label>
                    <label className={!!errors.city && errors.city !== true ? styles.errorBox : ''}>
                        <span>City</span>
                        <SearchInput name='city' showIcon={false} placeholder={'Enter a city'} className={styles.inputBox} value={formValues.city} onChange={handleChange} />
                        {!!errors.city && errors.city !== true && <span className={styles.error}>{errors.city}</span>}
                    </label>
                    <label className={!!errors.email && errors.email !== true ? styles.errorBox : ''}>
                        <span>Email</span>
                        <SearchInput name='email' type='email' showIcon={false} placeholder={'Enter a e-mail (abc@xyz.com)'} className={styles.inputBox} value={formValues.email} onChange={handleChange} />
                        {!!errors.email && errors.email !== true && <span className={styles.error}>{errors.email}</span>}
                    </label>
                    <TesodevButton type='submit' title='Add' disabled={!isSubmitting} />
                </form>
            </div>
            {showToast && <div className={styles.toast}>
                <ErrorToast title='Error while adding link element' message='Name and surname should contain at least 2 words' setShow={setShowToast} />
            </div>}


        </>

    )
}

export default AddLink