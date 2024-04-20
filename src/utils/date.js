 
export function transformDate(date) {
    // Divide a data em ano, mês e dia
    var parts = date.split("-");
    // Reorganiza os elementos para o formato DD-MM-YYYY
    var formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];
    return formattedDate;
}