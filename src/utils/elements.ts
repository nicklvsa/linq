export type GetInputElementType = {[name: string]: any};

const getInputElementValues = <T>(form: HTMLFormElement): (typeof data) => {
    const data: T | GetInputElementType = {};

    Array.from(form.elements as (typeof form.elements & typeof data)).forEach((elem) => {
        if (elem instanceof HTMLInputElement) {
            const e = elem as HTMLInputElement;

            if (e?.id?.length > 0 || e?.name?.length > 0) {
                data[e.id || e.name] = e.value;
            }
        }
    });
    
    return data;
};

export {
    getInputElementValues,
};