import { FormEvent } from 'react';
import { 
    Link,
    useParams,
} from 'react-router-dom';

import API from '../../utils/api';
import { validate as uuidValidate } from 'uuid';
import { getInputElementValues } from '../../utils/elements';

interface QueueProps {
    server: API;
}

const Queue = (props: QueueProps) => {
    type PathRouter = {
        pathUUID: string;
    };

    type UserInfoForm = {
        email: HTMLInputElement;
        phonenumber: HTMLInputElement;
        name: HTMLInputElement;
    };
    
    const { pathUUID } = useParams<PathRouter>();

    const enteredUserInfoForm = (evt: FormEvent) => {
        evt.preventDefault();

        const target = evt.target as HTMLFormElement;
        const data = getInputElementValues<UserInfoForm>(target);
        console.log(data);
    };

    if (!uuidValidate(pathUUID)) {
        return (
            <div>
                <p>You entered an incorrectly formatted id!</p>
                <Link to="/">
                    Home
                </Link>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={enteredUserInfoForm}>
                <input type="email" id="email" placeholder="example@example.com" />
                <input type="tel" id="phonenumber" placeholder="+11234567890" required />
                <input type="text" id="name" placeholder="First Last" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Queue;
