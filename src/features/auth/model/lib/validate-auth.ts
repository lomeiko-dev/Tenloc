interface IValidateData {
   email?: string
   password?: string
   name?: string
   phone?: string
}

interface IValidateOptions {
   getError: (message?: string) => void
}

export const ValidateAuth = async (
   data: IValidateData,
   options: IValidateOptions
) => {
   const { email, password, name, phone } = data
   const { getError } = options

   if (name && name.length < 6) {
      getError('Имя должно быть больше 6 символов')
      return
   } else getError(undefined)

   if (email && email.length < 4) {
      getError('Почта должна быть больше 4 символов')
      return
   } else getError(undefined)

   if (phone && phone.length === 0) {
      getError('Телефон не указан')
      return
   } else getError(undefined)

   if (password && password.length < 6) {
      getError('Пароль должен быть больше 6 симоволов')
      return
   } else getError(undefined)
}
