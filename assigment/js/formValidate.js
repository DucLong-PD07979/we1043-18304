export const isEmail = (email) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return pattern.test(email);
};

export const isPhone = (phone) => {
    const pattern = /(038|[3|5|7|8|9])+([0-9]{8})\b/;
    return pattern.test(phone);
};

export const isName = (name) => {
    const pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return pattern.test(name);
};

export const isAddress = (address) => {
    const pattern = address.length < 150;
    return pattern;
};

export const isMessage = (message) => {
    const pattern = message.length < 500;
    return pattern;
};

export const ERROR_MESSAGE = {
    required: "Please fill in this field",
    regexp: "Field not like format",
};
