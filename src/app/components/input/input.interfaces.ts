export interface InputLabel {
  id: string;
  name: string;
}

export const INPUT_REGEX = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
