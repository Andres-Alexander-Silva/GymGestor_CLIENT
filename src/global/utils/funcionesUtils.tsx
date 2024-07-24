export const ViewDatetime = (item: string) => {
    let fecha = new Date(item)
    let dia = String(fecha.getDate())
    let mes = String(fecha.getMonth())
    let year = fecha.getFullYear()
    let hora = String(fecha.getHours())
    let minutos = String(fecha.getMinutes())
    dia = dia.toString().length > 1 ? dia : `0${(dia).toString()}`
    mes = (mes + 1).toString().length > 1 ? mes + 1 : `0${(mes + 1).toString()}`
    hora = (hora).toString().length > 1 ? hora : `0${hora.toString()}`
    minutos = (minutos).toString().length > 1 ? minutos : `0${minutos.toString()}`
  
    return `${dia}/${mes}/${year} ${hora}:${minutos}`
  }
  
  export const frmDate = (item: string) => {
    let fecha = new Date(item)
    let dia = String(fecha.getDate())
    let mes = String(fecha.getMonth())
    let year = fecha.getFullYear()
  
    dia = dia.toString().length > 1 ? dia : `0${(dia).toString()}`
    mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
  
    return `${dia}/${mes}/${year}`
  }
  
  export const frmDateLar = (item: string) => {
    let fecha = new Date(item)
    let dia = String(fecha.getDate())
    let mes = String(fecha.getMonth())
    let year = fecha.getFullYear()
  
    dia = dia.toString().length > 1 ? dia : `0${(dia).toString()}`
    mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
    switch (mes) {
      case "01":
        mes = "Enero"
        break
      case "02":
        mes = "Febrero"
        break
      case "03":
        mes = "Marzo"
        break
      case "04":
        mes = "Abril"
        break
      case "05":
        mes = "Mayo"
        break
      case "06":
        mes = "Junio"
        break
      case "07":
        mes = "Julio"
        break
      case "08":
        mes = "Agosto"
        break
      case "09":
        mes = "Septiembre"
        break
      case "10":
        mes = "Octubre"
        break
      case "11":
        mes = "Noviembre"
        break
      case "12":
        mes = "Diciembre"
        break
    }
  
    return `${dia} de ${mes} de ${year}`
  }
  
  export const frmDateHora = (item: string) => {
    let fecha = new Date(item)
    let dia = String(fecha.getDate())
    let mes = String(fecha.getMonth())
    let year = fecha.getFullYear()
    let hora = String(fecha.getHours())
    let minutos = String(fecha.getMinutes())
  
    dia = dia.toString().length > 1 ? dia : `0${(dia).toString()}`
    mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
    hora = (hora).toString().length > 1 ? hora : `0${hora.toString()}`
    minutos = (minutos).toString().length > 1 ? minutos : `0${minutos.toString()}`
  
    return `${dia}/${mes}/${year}  ${hora}:${minutos}`
  }
  
  export const generateCurrency = (value: number): string => {
    let formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    })
    return formatter.format(value !== undefined ? value : 0)
  }