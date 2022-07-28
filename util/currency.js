export const currency = (number) => {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(number)
}
