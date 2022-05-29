export const convertirTiempo = minutos => {
    const horas = Math.floor(minutos / 60)
    const minutosRestantes = minutos % 60
    return `${horas > 0 ? horas + 'h' : ''} ${minutosRestantes}m`
}