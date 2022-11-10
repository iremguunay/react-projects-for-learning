import { ref } from "yup";
import { object, string, number, date, InferType } from "yup";

const validations = object({
  email: string().email('Geçerli bir email girin').required('Zorunlu alan'),
  password: string().min(6, 'Parolanın en az 6 karakter olmalı').required('Zorunlu alan'),
  passwordConfirm: string().oneOf([ref('password')], 'Parolanız uyuşmuyor').required('Zorunlu alan'),
});

export default validations;
